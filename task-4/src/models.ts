import fs from "node:fs/promises";
import path from "node:path";
// const { v4: uuidv4 } = require("uuid");
const filePath = path.resolve(process.cwd(), "data");


// GET ALL RECIPES:
async function getRecipes() : Promise<any> {
    const fileContents = await fs.readFile
    (filePath);
    const recipes = JSON.parse(fileContents.toString());
    return recipes;
}


export default getRecipes;