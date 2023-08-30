import { useBearStore } from '@/store'

function Home() {
  const { bears, increase } = useBearStore()
  return (
    <main className=" bg-red-100 text-center">
      <h1>this is home</h1>
      <br />
      <div>
        <h2>zustand demo</h2>
        <button className="mr-3 bg-blue-500" onClick={() => increase(1)}>
          click me to increase:
        </button>
        <span>{bears}</span>
      </div>
      <br />
    </main>
  )
}

export default Home
