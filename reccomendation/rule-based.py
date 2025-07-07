from sample_data import user_input, all_products

class Routine:
    def __init__(self):
        self.routine = {
            "Shampoo": {"Used": True, "Name": None },
            "Conditioner": {"Used": True, "Name": None },
            "Deep Conditioner": {"Used": False, "Name": None },
            "Leave-In Conditioner": {"Used": False, "Name": None },
            "Styling Product": {"Used": False, "Name": None },
            "Oil/Serum": {"Used": False, "Name": None },
            "Scalp Treatment": {"Used": False, "Name": None }
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
    BUFFER = 2
    PRODUCT_NUMBER_MAX = 7
    FLEXIBLE_PRODUCTS = PRODUCT_NUMBER_MAX - BUFFER
    JUMP = (MAX-MIN)//PRODUCT_NUMBER_MAX
        
    for product in all_products :
        if user_input["goals"].intersection(product["goals_treated"]) and user_input["hairtype"] in product["hairtypes"] :
            score = abs(product["oiliness"] - user_input["oiliness"])
            score += abs(product["density"] - user_input["density"])
            score += sum(1 for field in ["dandruff", "headcovering", "workout", "heat"] if user_input[field] != product[field])
            
            included.append({"product": product, "score": score})
            
    low_products = low_routine.routine
    high_products = high_routine.routine
    product_types = list(low_products.keys())
    
    prod_index = BUFFER
    for i in range(MIN, min(MAX, MIN+JUMP*FLEXIBLE_PRODUCTS), JUMP):
        if (i <= user_input["time_range"][0]) :
            low_products[product_types[prod_index]]["Used"] = True
            high_products[product_types[prod_index]]["Used"] = True
            
        elif (i <= user_input["time_range"][1]) :
            high_products[product_types[prod_index]]["Used"] = True
            
        prod_index += 1
        
# Fill in all included products into the template routines to see which fits with the lowest score. Have one that fits to the lowest price/lowest time and highest price/highest time

    
    
    
def main():
    rule_based_recco(user_input, all_products)
    
if __name__ == "__main__":
    main()
    