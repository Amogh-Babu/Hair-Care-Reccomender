from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Set, Tuple, Dict, Any
from rule_based import rule_based_recco

app = FastAPI()

class UserInput(BaseModel):
    hairtype: str
    density: int
    oiliness: int
    dandruff: bool
    headcovering: bool
    workout: bool
    heat: bool
    goals: Set[str]
    time_range: Tuple[int, int]
    budget_range: Tuple[int, int]
    
@app.post("/recommend")
def get_recommendation(user_input: UserInput):
    try:
        from sample_data import all_products
        routines = rule_based_recco(user_input.model_dump(), all_products)
        return {
            "low-end": routines[1].routine,
            "high-end": routines[0].routine
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
