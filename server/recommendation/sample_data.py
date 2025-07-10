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
        "name": "Growth Boost Shampoo",
        "type": "Shampoo",
        "cost": 15,
        "oiliness": 4,
        "density": 5,
        "dandruff": False,
        "headcovering": False,
        "workout": True,
        "heat": False,
        "hairtypes": ["1A", "1B", "2A", "2B"],
        "goals_treated": {"Growth", "Volume/Thickness"}
    },
    {
        "name": "Damage Repair Shampoo",
        "type": "Shampoo",
        "cost": 12,
        "oiliness": 3,
        "density": 4,
        "dandruff": True,
        "headcovering": True,
        "workout": False,
        "heat": False,
        "hairtypes": ["3B", "4A", "4B", "4C"],
        "goals_treated": {"Damage Repair", "Frizz Control"}
    },
    {
        "name": "Curl Cleanse Shampoo",
        "type": "Shampoo",
        "cost": 18,
        "oiliness": 5,
        "density": 6,
        "dandruff": False,
        "headcovering": False,
        "workout": True,
        "heat": True,
        "hairtypes": ["2C", "3A", "3B"],
        "goals_treated": {"Curl Definition", "Texture"}
    },

    # --- Conditioner ---
    {
        "name": "Smooth Curl Conditioner",
        "type": "Conditioner",
        "cost": 14,
        "oiliness": 3,
        "density": 5,
        "dandruff": False,
        "headcovering": False,
        "workout": True,
        "heat": True,
        "hairtypes": ["2C", "3A", "3B"],
        "goals_treated": {"Frizz Control", "Curl Definition"}
    },
    {
        "name": "Soft & Silky Conditioner",
        "type": "Conditioner",
        "cost": 20,
        "oiliness": 4,
        "density": 6,
        "dandruff": False,
        "headcovering": False,
        "workout": False,
        "heat": True,
        "hairtypes": ["2A", "2B"],
        "goals_treated": {"Softness", "Texture"}
    },
    {
        "name": "Thickening Conditioner",
        "type": "Conditioner",
        "cost": 10,
        "oiliness": 3,
        "density": 4,
        "dandruff": True,
        "headcovering": True,
        "workout": False,
        "heat": False,
        "hairtypes": ["1A", "1B", "2A"],
        "goals_treated": {"Volume/Thickness"}
    },

    # --- Deep Conditioner ---
    {
        "name": "Intense Repair Mask",
        "type": "Deep Conditioner",
        "cost": 22,
        "oiliness": 4,
        "density": 5,
        "dandruff": False,
        "headcovering": False,
        "workout": False,
        "heat": True,
        "hairtypes": ["2B", "3C", "4A"],
        "goals_treated": {"Damage Repair", "Softness"}
    },
    {
        "name": "Protein Curl Mask",
        "type": "Deep Conditioner",
        "cost": 17,
        "oiliness": 5,
        "density": 6,
        "dandruff": False,
        "headcovering": True,
        "workout": True,
        "heat": True,
        "hairtypes": ["3C", "4A", "4B"],
        "goals_treated": {"Curl Definition", "Texture"}
    },

    # --- Leave-In Conditioner ---
    {
        "name": "Leave-In Curl Spray",
        "type": "Leave-In Conditioner",
        "cost": 13,
        "oiliness": 4,
        "density": 6,
        "dandruff": False,
        "headcovering": True,
        "workout": True,
        "heat": True,
        "hairtypes": ["3A", "3B", "3C"],
        "goals_treated": {"Frizz Control", "Curl Definition"}
    },
    {
        "name": "Softness Leave-In",
        "type": "Leave-In Conditioner",
        "cost": 19,
        "oiliness": 5,
        "density": 6,
        "dandruff": False,
        "headcovering": False,
        "workout": True,
        "heat": True,
        "hairtypes": ["2B", "2C", "3A"],
        "goals_treated": {"Softness"}
    },

    # --- Styling Product ---
    {
        "name": "Volume Lift Mousse",
        "type": "Styling Product",
        "cost": 16,
        "oiliness": 3,
        "density": 4,
        "dandruff": False,
        "headcovering": False,
        "workout": False,
        "heat": True,
        "hairtypes": ["1C", "2A", "2B"],
        "goals_treated": {"Volume/Thickness", "Texture"}
    },
    {
        "name": "Curl Defining Gel",
        "type": "Styling Product",
        "cost": 14,
        "oiliness": 4,
        "density": 5,
        "dandruff": False,
        "headcovering": False,
        "workout": True,
        "heat": False,
        "hairtypes": ["3B", "3C", "4A"],
        "goals_treated": {"Curl Definition"}
    },

    # --- Oil/Serum ---
    {
        "name": "Frizz-Free Serum",
        "type": "Oil/Serum",
        "cost": 18,
        "oiliness": 3,
        "density": 4,
        "dandruff": False,
        "headcovering": False,
        "workout": False,
        "heat": False,
        "hairtypes": ["1B", "2A", "2B"],
        "goals_treated": {"Frizz Control"}
    },
    {
        "name": "Soft Curl Oil",
        "type": "Oil/Serum",
        "cost": 20,
        "oiliness": 4,
        "density": 5,
        "dandruff": False,
        "headcovering": False,
        "workout": False,
        "heat": False,
        "hairtypes": ["3A", "3B"],
        "goals_treated": {"Softness", "Curl Definition"}
    },

    # --- Scalp Treatment ---
    {
        "name": "Root Growth Serum",
        "type": "Scalp Treatment",
        "cost": 21,
        "oiliness": 3,
        "density": 5,
        "dandruff": True,
        "headcovering": False,
        "workout": True,
        "heat": False,
        "hairtypes": ["1A", "2A", "3A", "4A"],
        "goals_treated": {"Growth"}
    }
]

