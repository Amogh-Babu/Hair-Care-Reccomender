from sample_data import user_input, all_products

class Routine:
    def __init__(self):
        self.routine = {
            "Shampoo": {"Used": False, "Name": None, "Priority": 1},
            "Conditioner": {"Used": False, "Name": None, "Priority": 2},
            "Deep Conditioner": {"Used": False, "Name": None, "Priority": 3},
            "Leave-In Conditioner": {"Used": False, "Name": None, "Priority": 4},
            "Styling Product": {"Used": False, "Name": None, "Priority": 5},
            "Oil/Serum": {"Used": False, "Name": None, "Priority": 6},
            "Scalp Treatment": {"Used": False, "Name": None, "Priority": 7}
        }

    def setRoutine(self, routine):
        self.routine = routine

def rule_based_recco(user_input, all_products):
    """
    Args:
        user_input (dictionary): Dictionary representing user input queries
        products (array): Array of dictionaries representing products
    """
    high_routine = Routine()
    low_routine = Routine()
    included = []
    
    MAX = 50
    MIN = 10
    PRODUCT_NUMBER_MAX = 7
    JUMP = (MAX-MIN)//PRODUCT_NUMBER_MAX
        
    for product in all_products :
        if user_input["goals"].intersection(product["goals_treated"]) and user_input["hairtype"] in product["hairtypes"] :
            score = abs(product["oiliness"] - user_input["oiliness"])
            score += abs(product["density"] - user_input["density"])
            score += sum(1 for field in ["dandruff", "headcovering", "workout", "heat"] if user_input[field] != product[field])
            
            included.append({"product": product, "score": score})
            
    """
    low_products = low_routine.routine
    high_products = high_routine.routine
    
    for i in range(MIN, MAX, JUMP):
    
    routine.setRoutine(products)
    """
    
    print(included)
    
def main():
    rule_based_recco(user_input, all_products)
    
if __name__ == "__main__":
    main()
    