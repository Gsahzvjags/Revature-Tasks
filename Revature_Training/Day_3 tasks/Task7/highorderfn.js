// Use the following array to complete the tasks below

const products = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
    { id: 2, name: "Headphones", price: 49.99, category: "Electronics" },
    { id: 3, name: "Smartphone", price: 699.99, category: "Electronics" },
    { id: 4, name: "Keyboard", price: 39.99, category: "Electronics" },
    { id: 5, name: "Mouse", price: 19.99, category: "Electronics" },
    { id: 6, name: "Shirt", price: 29.99, category: "Clothing" },
    { id: 7, name: "Jeans", price: 49.99, category: "Clothing" },
    { id: 8, name: "Sneakers", price: 79.99, category: "Footwear" },
    { id: 9, name: "Sandals", price: 39.99, category: "Footwear" },
    { id: 10, name: "Backpack", price: 59.99, category: "Accessories" }
    ];

    // 1. Write a JavaScript program to create a new array that contains only the names of the products from the product array.
    // Method 1
      let arr=[];
     for(let i of products){
         arr.push(i.name)
     }
     console.log(arr)
    // Method 2
     let productName=products.map(product=>product.name)
    console.log(productName)

    // 2. Write a JavaScript program to filter out and retrieve only the items from the product array whose price is greater than $50.

    let productPrice=products.filter(product=>product.price>50)
    console.log(productPrice)

    // 3. Write a JavaScript program to calculate the total price of all items in the product array by multiplying the price of each item by its quantity, and then summing up these values.
    // Method 1
    function totalPrice(product){
    let totalPrice=0;
    for(let product of products){
    totalPrice+=product.price;
    }
    return totalPrice
    }
    let total=totalPrice(products)
    console.log(total)
    // Method 2
    let total_price=products.reduce((total,product)=>total+product.price,0)
    console.log(total_price)

    // 4. Write a JavaScript program to create an array of products that belong to the same category. (e.g Electronics)
    // Method 1
    function sameCategory(product,category){
        return products.filter(product=>product.category===category)
    }
      let category_Products=sameCategory(products,'Electronics')
      console.log(category_Products)
    // Method 2
      let electronicProducts=products.filter(product=>product.category==='Electronics')
      console.log(electronicProducts)
