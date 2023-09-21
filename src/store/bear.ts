import { produce } from 'immer'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface BearState {
  bears: number
  increase: (by: number) => void
}

export const useBearStore = create<BearState>()(
  devtools(
    set => ({
      bears: 0,
      weight: 0,
      increase: by => set(state => ({ bears: state.bears + by })),
      update: (fn: (state: BearState) => void) => set(produce(fn)),
    }),
    {
      store: 'Bear',
      name: 'Bear',
    },
  ),
)
