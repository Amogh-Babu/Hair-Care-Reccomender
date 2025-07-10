from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Set, Tuple, Dict, Any
from rule_based import rule_based_recco
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi.middleware.cors import CORSMiddleware

MONGODBKEY="mongodb+srv://AmoghBabu:AmoghIsAwesome@hair-care-reccomender.at0f6vj.mongodb.net/?retryWrites=true&w=majority&appName=Hair-Care-Reccomender"
client = AsyncIOMotorClient(MONGODBKEY)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db = client["Products"]
collection = db["product"]

class UserInput(BaseModel):
    hair_type: str
    density: int
    oiliness: int
    dandruff: bool
    headcovering: bool
    workout: bool
    heat: bool
    goals: Set[str]
    time_range: Tuple[int, int]
    budget_range: Tuple[int, int]
    
@app.post("/submit")
async def get_recommendation(user_input: UserInput):
    print(user_input)
    try:
    
        products =  []
        async for product in collection.find()   :
            product["_id"] = str(product["_id"])
            products.append(product) 
        
        print(products)
        
        # routines = rule_based_recco(user_input.model_dump(), all_products)

        return {
            "Success:" "Yes" 
            # "low-end": routines[1],
            # "high-end": routines[0]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
