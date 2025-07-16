from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List, Set, Tuple, Dict, Any
from rule_based import rule_based_recco
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

MONGODBKEY=os.getenv("MONGODBKEY")
client = AsyncIOMotorClient(MONGODBKEY)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

products_db = client["Products"]
products_cl = products_db["product"]

responses_db = client["Responses"]
responses_cl = responses_db["response"]

class UserInput(BaseModel):
    hair_type: str
    density: int
    oiliness: int
    dandruff: bool
    headcovering: bool
    workout: bool
    heat: bool
    goals: List[str]
    time_range: List[int]
    budget_range: List[int]
    
@app.post("/submit")
async def get_recommendation(user_input: UserInput):
    try:
        await responses_cl.insert_one(user_input.model_dump())
    
        all_products =  []
        async for product in products_cl.find()   :
            product["_id"] = str(product["_id"])
            all_products.append(product) 
        
        routines = rule_based_recco(user_input.model_dump(), all_products)

        return {
            "low-end": routines[1],
            "high-end": routines[0]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
app.mount("/static", StaticFiles(directory="static"), name="static")

