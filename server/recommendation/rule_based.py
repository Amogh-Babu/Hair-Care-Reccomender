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
    
    MAX = 50
    MIN = 10
    BUFFER = 2
    JUMP = 8
    
    high_products = {
            "Shampoo": {"Used": True, "Name": None },
            "Conditioner": {"Used": True, "Name": None },
            "Deep Conditioner": {"Used": False, "Name": None },
            "Leave-In Conditioner": {"Used": False, "Name": None },
            "Styling Product": {"Used": False, "Name": None },
            "Oil/Serum": {"Used": False, "Name": None },
            "Scalp Treatment": {"Used": False, "Name": None }
        }
    low_products = {
            "Shampoo": {"Used": True, "Name": None },
            "Conditioner": {"Used": True, "Name": None },
            "Deep Conditioner": {"Used": False, "Name": None },
            "Leave-In Conditioner": {"Used": False, "Name": None },
            "Styling Product": {"Used": False, "Name": None },
            "Oil/Serum": {"Used": False, "Name": None },
            "Scalp Treatment": {"Used": False, "Name": None }
        }
    included = []
    product_by_included_type = {}
    
    # Get all products which correspond with user goals and hairtype    
    for product in all_products :
        if user_input["goals"].intersection(product["goals_treated"]) and user_input["hair_type"] in product["hairtypes"] :
            score = abs(product["oiliness"] - user_input["oiliness"])
            score += abs(product["density"] - user_input["density"])
            score += sum(1 for field in ["dandruff", "headcovering", "workout", "heat"] if user_input[field] != product[field])
            
            included.append({"product": product, "score": score})
            
    product_types = list(low_products.keys())
    avg_low_prod_cost = user_input["budget_range"][0] * 4 // len(low_products)
    avg_high_prod_cost = user_input["budget_range"][1] * 4 // len(high_products)
    cost_range = 5

    # Creates 2 (low and high end) routine "templates" based on user time     
    prod_index = BUFFER-1
    for i in range(MIN, MAX+1, JUMP):
        if (i <= user_input["time_range"][0]) :
            low_products[product_types[prod_index]]["Used"] = True
            high_products[product_types[prod_index]]["Used"] = True
            
        elif (i <= user_input["time_range"][1]) :
            high_products[product_types[prod_index]]["Used"] = True

        prod_index += 1
        
    # Create an empty dictionary (product_by_included_type) with keys corresponding to all product types included in the high-end routine
    for prod_type in product_types:
        if (high_products[prod_type]["Used"] == True):
            product_by_included_type[prod_type] = []
        
    # Added products from the included products array into the dictionary    
    for inc in included:
        product = inc["product"]
        prod_type = product["type"]
        if prod_type in product_by_included_type:
            product_by_included_type[prod_type].append(inc)
                   
    # For each product type in the dictionary, the loop
    #  1. Sorts the arrays of each entry by their score
    #  2. Each product in the sorted arrays are tested to see if they fall within an set range of an average high or low end product  
    #  3. If no product is found wihtin the range, the product with the best score is chosen and added 
    for prod_type in product_by_included_type:
        # 1.
        product_by_included_type[prod_type].sort(key=lambda x: x["score"])
        products_by_type = product_by_included_type[prod_type]
        
        product_type_in_low = low_products[prod_type]["Used"]
        
        for product in products_by_type:
            product = product["product"]
            product_cost = product["cost"]
            
            # 2.
            if (high_products[prod_type]["Name"] is None and product_cost >= (avg_high_prod_cost - cost_range) and product_cost <= (avg_high_prod_cost + cost_range)):
                high_products[product["type"]]["Name"] = product["name"]               
            
            if (product_type_in_low and low_products[prod_type]["Name"] is None and product_cost >= (avg_low_prod_cost - cost_range) and product_cost <= (avg_low_prod_cost + cost_range)):
                low_products[product["type"]]["Name"] = product["name"]
                
            if (low_products[prod_type]["Name"] is not None and high_products[prod_type]["Name"] is not None):
                break
                
        # 3.
        if high_products[prod_type]["Name"] is None:
            if (len(products_by_type) != 0):
                high_products[prod_type]["Name"] = products_by_type[0]["product"]["name"]
            else:
                high_products[prod_type]["Used"] = False
            
        if product_type_in_low and low_products[prod_type]["Name"] is None:
            if (len(products_by_type) != 0):
                low_products[prod_type]["Name"] = products_by_type[0]["product"]["name"]
            else:
                low_products[prod_type]["Used"] = False
       
    
    return [high_products, low_products]
      
def main():
    routines = rule_based_recco(user_input, all_products)
    for level, routine in zip(["High", "Low"], routines):
        print(f"\n{level} Routine:")
        for k, v in routine.routine.items():
            print(f"{k}: Used = {v['Used']}, Name = {v['Name']}")
    
if __name__ == "__main__":
    main()
    