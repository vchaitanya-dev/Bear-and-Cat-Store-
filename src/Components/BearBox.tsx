import { useState,useEffect } from "react"
import { useBearStore } from "../stores/bearStore"
import { useFoodStore } from "../stores/foodStore"
import { shallow } from "zustand/shallow"
function BearBox() {
    const [bgColor,setBgColor] = useState<"lightgreen"|"lightpink"|undefined>(undefined)
  useEffect(() => {
    const unsub = useFoodStore.subscribe(state => state.fish, 
      (fish,prevfish) => {
        if (fish == prevfish){
          if(fish <= 5){
            setBgColor('lightpink')
          }else {
            setBgColor('lightpink')
          }
        }
      if (prevfish <= 5 && fish > 5){
      setBgColor("lightgreen")
    }else if (prevfish > 5 && fish <= 5){
      setBgColor('lightpink')
    }
  },{
    equalityFn:shallow,
    fireImmediately:true
  })
  return unsub;
},[])
const {bears,increasePopulation,removeAllBear} = useBearStore();
    return (
   <div className="box" style={{backgroundColor:bgColor}}>
    <h1>Bear Box</h1>
    <p>bears:{bears}</p>
    <div>
        <button
        onClick={increasePopulation}
        >add bear</button>
        <button onClick={removeAllBear}
        >remove bear</button>
        <button onClick={useBearStore.persist.clearStorage} 
        >Clear</button>
    </div>
   </div>
  )
}

export default BearBox