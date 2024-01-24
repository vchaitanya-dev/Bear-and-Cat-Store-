import { useCatStore } from "../stores/catStore"
const CatBox = () => {
    const bigCats = useCatStore(state => state.cats.bigCats)
    const smallCats = useCatStore(state => state.cats.smallCats)
    const increasedBigCats = useCatStore(state => state.increasedBigCats)
    const increasedSmallCats = useCatStore(state => state.increasedSmallCats)
    const summary = useCatStore(state => state.summary)
    console.log(summary())
    return (
    <div className="box">
        <h1>Cat Box</h1>
        <p>Big cat :{bigCats} </p>
        <p>Small cat : {smallCats} </p>

            <div>
                <button onClick={increasedBigCats}>Big Cat</button>
                <button onClick={increasedSmallCats}>Small Cat</button>

            </div>
    </div>

 )
}

export default CatBox