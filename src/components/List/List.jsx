import { Item } from "../Item/Item";

export function List ({recipies}) {
return (
    <ul>
        {recipies.map(({ name, time, servings, calories, difficulty, image }) => {
            return <Item key={image} name={name} time={time} servings={servings} calories={calories} difficulty={difficulty} image={image}/>
        })}
    </ul>
)
}