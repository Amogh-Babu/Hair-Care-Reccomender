user_input = {
    "hairtype": "wavy",
    "density": 5,
    "oiliness": 4,
    "dandruff": False,
    "headcovering": False,
    "workout": True,
    "heat": True,
    "goals": {"volume", "shine", "frizz control"},
    "time_range": [25, 50],  # willing to spend 15–35 mins
    "budget_range": [20, 50]  # total budget range in dollars
}

all_products = [
    # --- Shampoo ---
    {
        "name": "Lush Volume Boost Shampoo",
        "type": "Shampoo",
        "cost": 14,
        "oiliness": 4,
        "density": 5,
        "dandruff": False,
        "headcovering": False,
        "workout": True,
        "heat": False,
        "hairtypes": ["straight", "wavy"],
        "goals_treated": {"volume", "shine"}
    },
    {
        "name": "Budget Shampoo Basic",
        "type": "Shampoo",
        "cost": 5,
        "oiliness": 3,
        "density": 4,
        "dandruff": True,
        "headcovering": True,
        "workout": False,
        "heat": False,
        "hairtypes": ["coily", "wavy"],
        "goals_treated": {"cleanse", "scalp health"}
    },
    {
        "name": "Ultra Repair Hydrating Shampoo",
        "type": "Shampoo",
        "cost": 20,
        "oiliness": 5,
        "density": 6,
        "dandruff": False,
        "headcovering": False,
        "workout": True,
        "heat": True,
        "hairtypes": ["curly", "wavy"],
        "goals_treated": {"repair", "moisture"}
    },

    # --- Conditioner ---
    {
        "name": "Smooth & Sleek Conditioner",
        "type": "Conditioner",
        "cost": 12,
        "oiliness": 3,
        "density": 5,
        "dandruff": False,
        "headcovering": False,
        "workout": True,
        "heat": True,
        "hairtypes": ["wavy", "curly"],
        "goals_treated": {"frizz control", "shine"}
    },
    {
        "name": "Silky Conditioner Deluxe",
        "type": "Conditioner",
        "cost": 24,
        "oiliness": 4,
        "density": 6,
        "dandruff": False,
        "headcovering": False,
        "workout": False,
        "heat": True,
        "hairtypes": ["wavy"],
        "goals_treated": {"shine", "softness"}
    },
    {
        "name": "Budget Daily Conditioner",
        "type": "Conditioner",
        "cost": 7,
        "oiliness": 3,
        "density": 4,
        "dandruff": True,
        "headcovering": True,
        "workout": False,
        "heat": False,
        "hairtypes": ["straight", "wavy"],
        "goals_treated": {"moisture"}
    },

    # --- Deep Conditioner ---
    {
        "name": "Argan Deep Repair Mask",
        "type": "Deep Conditioner",
        "cost": 18,
        "oiliness": 4,
        "density": 5,
        "dandruff": False,
        "headcovering": False,
        "workout": False,
        "heat": True,
        "hairtypes": ["wavy"],
        "goals_treated": {"repair", "shine"}
    },
    {
        "name": "Protein Strength Deep Mask",
        "type": "Deep Conditioner",
        "cost": 15,
        "oiliness": 5,
        "density": 6,
        "dandruff": False,
        "headcovering": True,
        "workout": True,
        "heat": True,
        "hairtypes": ["curly", "coily"],
        "goals_treated": {"strength", "damage repair"}
    },
    {
        "name": "Coconut Repair Deep Conditioner",
        "type": "Deep Conditioner",
        "cost": 10,
        "oiliness": 3,
        "density": 3,
        "dandruff": False,
        "headcovering": False,
        "workout": True,
        "heat": False,
        "hairtypes": ["wavy"],
        "goals_treated": {"moisture", "shine"}
    },

    # --- Leave-In Conditioner ---
    {
        "name": "Hydration Leave-In Spray",
        "type": "Leave-In Conditioner",
        "cost": 11,
        "oiliness": 4,
        "density": 6,
        "dandruff": False,
        "headcovering": True,
        "workout": True,
        "heat": True,
        "hairtypes": ["wavy", "curly"],
        "goals_treated": {"shine", "frizz control"}
    },
    {
        "name": "Overnight Leave-In Luxe",
        "type": "Leave-In Conditioner",
        "cost": 19,
        "oiliness": 5,
        "density": 6,
        "dandruff": False,
        "headcovering": False,
        "workout": True,
        "heat": True,
        "hairtypes": ["wavy"],
        "goals_treated": {"moisture", "shine"}
    },
    {
        "name": "Budget Leave-In Cream",
        "type": "Leave-In Conditioner",
        "cost": 8,
        "oiliness": 3,
        "density": 4,
        "dandruff": False,
        "headcovering": False,
        "workout": False,
        "heat": False,
        "hairtypes": ["straight"],
        "goals_treated": {"softness", "moisture"}
    },

    # --- Styling Product ---
    {
        "name": "Frizz Fix Styling Cream",
        "type": "Styling Product",
        "cost": 12,
        "oiliness": 5,
        "density": 5,
        "dandruff": False,
        "headcovering": False,
        "workout": True,
        "heat": True,
        "hairtypes": ["wavy", "curly"],
        "goals_treated": {"frizz control", "hold"}
    },
    {
        "name": "Strong Hold Gel Pro",
        "type": "Styling Product",
        "cost": 16,
        "oiliness": 4,
        "density": 5,
        "dandruff": False,
        "headcovering": False,
        "workout": False,
        "heat": False,
        "hairtypes": ["straight", "wavy", "curly"],
        "goals_treated": {"hold", "definition"}
    },
    {
        "name": "Lightweight Mousse Boost",
        "type": "Styling Product",
        "cost": 10,
        "oiliness": 3,
        "density": 3,
        "dandruff": False,
        "headcovering": True,
        "workout": False,
        "heat": False,
        "hairtypes": ["wavy", "straight"],
        "goals_treated": {"volume", "hold"}
    },

    # --- Oil/Serum ---
    {
        "name": "Moroccan Oil Serum",
        "type": "Oil/Serum",
        "cost": 25,
        "oiliness": 3,
        "density": 4,
        "dandruff": False,
        "headcovering": False,
        "workout": False,
        "heat": False,
        "hairtypes": ["straight", "wavy"],
        "goals_treated": {"shine", "frizz control"}
    },
    {
        "name": "Rose Hair Elixir",
        "type": "Oil/Serum",
        "cost": 22,
        "oiliness": 4,
        "density": 5,
        "dandruff": False,
        "headcovering": False,
        "workout": False,
        "heat": False,
        "hairtypes": ["wavy", "curly"],
        "goals_treated": {"shine", "smoothness"}
    },
    {
        "name": "Budget Coconut Oil Serum",
        "type": "Oil/Serum",
        "cost": 9,
        "oiliness": 4,
        "density": 4,
        "dandruff": True,
        "headcovering": True,
        "workout": True,
        "heat": False,
        "hairtypes": ["coily", "wavy"],
        "goals_treated": {"moisture", "shine"}
    },

    # --- Scalp Treatment ---
    {
        "name": "Tea Tree Scalp Soother",
        "type": "Scalp Treatment",
        "cost": 16,
        "oiliness": 5,
        "density": 6,
        "dandruff": True,
        "headcovering": False,
        "workout": True,
        "heat": False,
        "hairtypes": ["wavy", "coily"],
        "goals_treated": {"scalp health", "dandruff"}
    },
    {
        "name": "Mint Cooling Scalp Spray",
        "type": "Scalp Treatment",
        "cost": 14,
        "oiliness": 3,
        "density": 4,
        "dandruff": True,
        "headcovering": True,
        "workout": False,
        "heat": False,
        "hairtypes": ["straight", "wavy"],
        "goals_treated": {"refresh", "scalp health"}
    },
    {
        "name": "Anti-Itch Aloe Treatment",
        "type": "Scalp Treatment",
        "cost": 10,
        "oiliness": 4,
        "density": 5,
        "dandruff": True,
        "headcovering": False,
        "workout": True,
        "heat": True,
        "hairtypes": ["wavy", "curly"],
        "goals_treated": {"itch relief", "moisture"}
    }
]
