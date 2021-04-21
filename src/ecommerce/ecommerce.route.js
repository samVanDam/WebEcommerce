import express from 'express'
import {getBasket, getCategories, getCategoryById, getProductById, getProductByCategory, getProducts, getUser, postCreateUser, postLoginUser, postBasket } from './ecommerce.controller.js'
//var {getBasket, getCategories, getCategoryById, getProductById, getProducts, getUser, postCreateUser, postLoginUser, updateBasket }  = require('./ecommerce.controller');
import cors from "cors"


export const ecommerceRouter = express.Router();
ecommerceRouter.use(cors())

// middleware specific to this route
ecommerceRouter.use(express.json())


// route handlers
ecommerceRouter.post("/users", postCreateUser);

ecommerceRouter.get("/users/:email", getUser);

ecommerceRouter.post("/users/:email/basket", postBasket);

ecommerceRouter.get("/users/:email/basket", getBasket);

ecommerceRouter.post("/login/", postLoginUser);

ecommerceRouter.get("/products/", getProducts);

ecommerceRouter.get("/products/:img", getProductById);

ecommerceRouter.get("/products/categories/:Id", getProductByCategory);

ecommerceRouter.get("/categories/", getCategories);

ecommerceRouter.get("/categories/:id", getCategoryById);


