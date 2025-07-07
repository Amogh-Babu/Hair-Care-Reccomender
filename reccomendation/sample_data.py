user_input = {
    "goals": {"moisture", "volume"},
    "hairtype": "C",
    "oiliness": 5,
    "density": 6,
    "dandruff": False,
    "headcovering": True,
    "workout": False,
    "heat": True,
    "time_range": [16, 50]
}

all_products = [
    {
        "name": "Hydrating Shampoo",
        "goals_treated": {"moisture"},
        "hairtypes": {"A", "B", "C"},
        "oiliness": 4,
        "density": 5,
        "dandruff": False,
        "headcovering": True,
        "workout": False,
        "heat": False
    },
    {
        "name": "Volumizing Conditioner",
        "goals_treated": {"volume"},
        "hairtypes": {"C", "D"},
        "oiliness": 6,
        "density": 7,
        "dandruff": False,
        "headcovering": False,
        "workout": False,
        "heat": True
    },
    {
        "name": "Anti-Dandruff Scalp Treatment",
        "goals_treated": {"dandruff"},
        "hairtypes": {"A", "B"},
        "oiliness": 3,
        "density": 6,
        "dandruff": True,
        "headcovering": False,
        "workout": True,
        "heat": False
    },
    {
        "name": "Heat Protectant Serum",
        "goals_treated": {"repair", "heat protection"},
        "hairtypes": {"A", "B", "C", "D"},
        "oiliness": 5,
        "density": 6,
        "dandruff": False,
        "headcovering": True,
        "workout": True,
        "heat": True
    }
]
