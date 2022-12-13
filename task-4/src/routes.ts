import express from "express";
const celiaRouter = express.Router();

import getRecipes from "./models.js";

type ResponseInterface = {
    success: boolean;
    payload: any;
}

//Create a get route handler
celiaRouter.get("/", async function(req, res) {
    //Get the recipes array
    const recipes = await getRecipes();
    //Create a response
    const response: ResponseInterface = {
        success: true,
        payload: recipes,
    };
    //Send the response
    res.json(response);
});


    
export default celiaRouter;