import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { createSelectors } from "../utils/createSelector";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
type TCatStoreState = {
    cats : {
        bigCats:number;
        smallCats:number
    };
    increasedBigCats:() => void;
    increasedSmallCats:() => void;
    summary: () => void;
}

export const useCatStore = createSelectors(create<TCatStoreState>()(
   immer(
    devtools(subscribeWithSelector(persist((set,get) => ({
        cats:{
            bigCats:0,
            smallCats:0
        },
        increasedBigCats: () => set((state) => {state.cats.bigCats++}),
        increasedSmallCats: () => set((state) =>{state.cats.smallCats++}),
        summary: () => {
            const total =get().cats.bigCats + get().cats.smallCats;
            return `There are ${total} cats in total`;
        }
   }),{name:'Cat Store'})))
)))

