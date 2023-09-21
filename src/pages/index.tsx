import { Outlet, useNavigate } from 'react-router'
import { useGithubUserInfoQuery } from '@/query'

import ReactLogo from '@/assets/react.svg?react'
import { useBearStore } from '@/store/bear'
import { useFishStore } from '@/store/fish'

function Home() {
  const { bears, increase } = useBearStore()
  const { fish, increase: increaseFish } = useFishStore()
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
        <div>
          <button className="mr-3 border border-black" onClick={() => increase(1)}>
            click me to increase bear:
          </button>
          <span>bear: {bears}</span>
        </div>
        <div>
          <button className="mr-3 border border-black" onClick={() => increaseFish(1)}>
            click me to increase fish:
          </button>
          <span>fish: {fish}</span>
        </div>
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
