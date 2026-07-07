import { CiTimer } from "react-icons/ci";
import { SiNamemc } from "react-icons/si";
import { FaPlateWheat } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { VscDiffModified } from "react-icons/vsc";
import { RecipeInfo } from "../RecipeInfo/RecipeInfo";

export function Item({ name, time, servings, calories, difficulty, image }) {
  return (
    <li>
      
      
      <RecipeInfo icon={<SiNamemc />} text={name}/>

      <RecipeInfo icon={<CiTimer />} text={time} />
      <RecipeInfo icon={<FaPlateWheat />} text={servings} />
      <RecipeInfo icon={<IoFastFoodOutline />} text={calories} />
      <RecipeInfo icon={<VscDiffModified />} text={difficulty} />

      <img src={image} alt={name} width={250} />
    </li>
  );
}