import { Outlet, useNavigate } from 'react-router'
import { useGithubUserInfoQuery } from '@/query'
import { useBearStore } from '@/store'
import ReactLogo from '@/assets/react.svg?react'

function Home() {
  const { bears, increase } = useBearStore()
  const { isFetching, data } = useGithubUserInfoQuery('noobakong')
  const navigate = useNavigate()
  return (
    <main className="bg-red-100 text-center">
      <h1>
        this is home
        <span className="icon-[carbon--bot] ml-3"></span>
      </h1>
      <ReactLogo className="m-auto" width={50} height={50}></ReactLogo>
      <br />
      <div>
        <h2>zustand demo</h2>
        <button className="mr-3 bg-blue-500" onClick={() => increase(1)}>
          click me to increase:
        </button>
        <span>{bears}</span>
      </div>
      <br />

      <div>
        <h2>react-query demo</h2>
        {isFetching ? (
          <p>loading...</p>
        ) : (
          <>
            <div>{data?.login}</div>
            <img src={data?.avatar_url} alt="" className="mx-auto w-32  rounded-full" />
          </>
        )}
      </div>
      <button
        className="border border-black"
        onClick={() => {
          navigate('child1')
        }}
      >
        go to child router 1
      </button>
      <div className="inline-block w-4"></div>
      <button
        className="border border-black"
        onClick={() => {
          navigate('child2')
        }}
      >
        go to child router 2
      </button>
      <Outlet></Outlet>
    </main>
  )
}

export default Home
