import { shallow } from "zustand/shallow"
import { useCatStore } from "../stores/catStore"

function CatControl() {
// const {increasedBigCats,increasedSmallCats} = useCatStore()
// const increasedBigCats = useCatStore.use.increasedBigCats()
// const increasedSmallCats = useCatStore.use.increasedSmallCats()
const {increasedBigCats,increasedSmallCats} = useCatStore((state) => ({
    increasedBigCats: state.increasedBigCats,
    increasedSmallCats: state.increasedSmallCats
}),
shallow) ;  

return (
    <div className="box">
        <h1>Cat Controller</h1>
        <p>{Math.random()}</p>
        <div>
            <button onClick={increasedBigCats}>add  big cats</button>
            <button onClick={increasedSmallCats}>add  big cats</button>
        </div>
    </div>
  )
}

export default CatControl