# openfabric_assignment-angular

# About the project 

The project is for an e-commerce web application designed for sellers. The application allows sellers to manage their products by adding, updating, and deleting them from a product list. The product list is displayed on the Home route, providing an overview of all available products.

Additionally, the application provides a search box where users can enter a product name to find specific items. Upon searching, the user can view the product details by clicking on the desired product. This action redirects them to a detailed view of the product, providing comprehensive information about it.

# Build with

1. Angular
2. NodeJS
3. ExpressJS
4. MongoDB
5. Bootstrap

# Development
   
   # SetUp 
     1. Clone the repo into a public GitHub repository (or fork https://github.com/shindeamul76/openfabric_assignment-angular.git). 
        
        https://github.com/shindeamul76/openfabric_assignment-angular.git

     2. Go to project folder
      
            cd client
    
     3. Start with 
            
            ng serve

     4. Backend api url
           already deployed on render.com in angular app to change the url with localhost add .env file in server with 
              PORT = 
              MONGO_URI = 
              PASS_SEC = 
              JWT_SEC = 
            and start command "npm start"

# Getting Started 
   1. seller to signup name email and password if already account need to login 
   2. in server side by default admin is true so everyone can add update and delete      the product and everyone can see the the products by clicking on LOGO of app 
   3. by clicking on seller route we will get list of products in table where we will update and delete the product 
   4. by clicking on add products route we can Add the products 