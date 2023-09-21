import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface FishState {
  fish: number
  increase: (by: number) => void
}

export const useFishStore = create<FishState>()(
  devtools(
    persist(
      set => ({
        fish: 0,
        increase: by => set(state => ({ fish: state.fish + by })),
      }),
      {
        name: 'FishPersist',
      },
    ),
    {
      store: 'Fish',
      name: 'Fish',
    },
  ),
)
