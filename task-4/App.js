import getRecipes from "./build/models";

app.use(express.static("public"));
app.use(express.json());

app.use("/lucy", celiaRouter);

