var Constants = {
    PRODUCTS: "products",
    IMAGES: "images",
    NODATA: "No data found for the search criteria",
    PLACEHOLDER: "Search for products or images",
    LIST_VIEW_HEADERS: ["Description", "Weight", "Price", "Best Before", "Ingredients", "Manufacturer"],
    PRODUCT_DATA: {
        responseType: "products",
        products: [
            {
                "name": "Dairymilk Silk Classic",
                "weight": "20g",
                "price": "$3",
                "bestBefore": "6M from manufacturing",
                "ingredients": "Cocoa, Milk solids, Emulsifiers",
                "manufacturer": "Cadbury"
            },
            {
                "name": "Amul Ice Cream",
                "weight": "500g",
                "price": "$10",
                "bestBefore": "3M from manufacturing",
                "ingredients": "Fat,Protein,Added Sugar, stabilizers",
                "manufacturer": "Amul"
            }
            ,
            {
                "name": "Maggi Noodles",
                "weight": "250g",
                "price": "$10",
                "bestBefore": "12M from manufacturing",
                "ingredients": "wheat, added preservatives",
                "manufacturer": "Nestle"
            }
            ,
            {
                "name": "Choco Chip Cookies",
                "weight": "80g",
                "price": "$3",
                "bestBefore": "12M from manufacturing",
                "ingredients": "Fibre, Wheat, Soya",
                "manufacturer": "Unibic"
            }
            ,
            {
                "name": "Pop Corn",
                "weight": "30g",
                "price": "$5",
                "bestBefore": "3M from manufacturing",
                "ingredients": "American sweet corn, added preservatives",
                "manufacturer": "Act II"
            }
            ,
            {
                "name": "Peanut Butter",
                "weight": "500g",
                "price": "$20",
                "bestBefore": "6M from manufacturing",
                "ingredients": "Peanuts",
                "manufacturer": "Sundrop"
            }
        ]
    },
    PRODUCT_IMAGE_DATA: {
        responseType: "images",
        productsImages:[{
            "name": "Dairymilk Silk Classic",
            "imageUrl": "./../images/dairy-milk-silk.jpg"
        }, {
            "name": "Amul Ice Cream",
            "imageUrl": "./../images/amul_ice_cream.jpg"
        }, {
            "name": "Maggi Noodles",
            "imageUrl": "./../images/maggi.jpg"
        }, {
            "name": "Choco Chip Cookies",
            "imageUrl": "./../images/unibic2.jpg"
        }, {
            "name": "Pop Corn",
            "imageUrl": "./../images/popcorn.jpg"
        }, {
            "name": "Peanut Butter",
            "imageUrl": "./../images/peanutButter.jpg"
        }]
    },
    NO_DATA: {
        "responseType": "error",
        "data": "No data available"
    }
}

module.exports = Constants;
