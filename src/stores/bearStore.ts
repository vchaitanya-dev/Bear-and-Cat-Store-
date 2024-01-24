import { create } from "zustand";
import {  persist } from "zustand/middleware";

interface IBearStore {
    bears: number,
    increasePopulation: () => void,
    removeAllBear: () => void,
    color:string,
    size:number
}

export const useBearStore = create<IBearStore>()(
persist((set) => ({
        bears:0,
        increasePopulation: () => set((state) => ({bears: state.bears + 1})),
        removeAllBear: () => set({bears:0}),
        color:'red',
        size:32
    }),{
        name:'Bear Store',
        partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !['color','size'].includes(key)),
        ),
    })
)



