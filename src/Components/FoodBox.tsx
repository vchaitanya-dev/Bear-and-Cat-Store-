import { useFoodStore } from "../stores/foodStore"

function FoodBox() {
  const add5Fish = () => {
    useFoodStore.setState((state) => ({
      fish:state.fish +5
    }))
  }
  
    const {fish,addOneFish,removeAllFish,removeOneFish} = useFoodStore()
  return (
    <div className="box">
        <h1>Food Box</h1>
        <p>fish:{fish}</p>
        <button onClick={addOneFish} >Add</button>
        <button onClick={add5Fish}>add 5 fish</button>
        <button onClick={removeOneFish}>Remove</button>

        <button onClick={removeAllFish}>reset</button>
    </div>
  )
}

export default FoodBox