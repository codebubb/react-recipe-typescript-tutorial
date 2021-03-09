import { IRecipe } from "./IRecipe";

const RecipeComponent = (props: { recipe: IRecipe }) => {
    const { recipe } = props;
    return (
        <div className="recipe">
            <div className="title">
                <img src={recipe.thumbnail || 'http://localhost:3000/placeholder.jpg'} alt={recipe.title} />
                <p>{recipe.title}</p>
            </div>
            {recipe.ingredients &&
                <ul>
                    {recipe.ingredients.split(',').map(ingredient => <li>{ingredient}</li>)}
                </ul>
            }
            <a href={recipe.href} target="_bla">View Recipe</a>
        </div>
    )
};

export default RecipeComponent;