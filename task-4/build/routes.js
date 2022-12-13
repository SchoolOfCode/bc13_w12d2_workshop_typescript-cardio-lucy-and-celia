import express from "express";
const celiaRouter = express.Router();
import getRecipes from "./models.js";
//Create a get route handler
celiaRouter.get("/", async function (req, res) {
    //Get the recipes array
    const recipes = await getRecipes();
    //Create a response
    const response = {
        success: true,
        payload: recipes,
    };
    //Send the response
    res.json(response);
});
export default celiaRouter;
