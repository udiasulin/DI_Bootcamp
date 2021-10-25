let groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        payed: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}



groceriesCopy = groceries;

groceries['totalPrice'] = '35$';
groceries['other']['payed'] = false;

console.log(groceriesCopy)
// Yes because they have the same address.




