import { useBearStore } from '@/store'

function Home() {
  const { bears, increase } = useBearStore()
  return (
    <main className=" bg-red-100 text-center">
      <h1>this is home</h1>
      <div>{bears}</div>
      <button onClick={() => increase(1)}>increase</button>
    </main>
  )
}

export default Home
