import './App.css'
import { List } from './components/List/List';
import recipes from "./recipies.json"
console.log(recipes);


function App() {
  

  return (
    <>
  <List recipies={recipes}/>
    </>
  )
}

export default App
