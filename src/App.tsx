import FoodBox from "./Components/FoodBox"
import BearBox from "./Components/BearBox"
import CatBox from "./Components/CatBox"
import CatControl from "./Components/CatControl"
function App() {

  return (
   <div className="container" >
    <h1>Zustand Tutorial</h1>
    <div>
      <BearBox />
      <FoodBox />
    </div>
    <div>
      <CatBox />
      <CatControl />
    </div>
   </div>
  )
}

export default App
