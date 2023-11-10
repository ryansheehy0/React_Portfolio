import { useNavigate } from "react-router-dom"

export default function Page({pageTitle, PageComponent}){
  const navigate = useNavigate()

  // Click back then fade out visibility
  function onClickBack(){
    setTimeout(() => {
      navigate("/")
    }, 400)
  }

  return (
    <div className={`w-full h-fit min-h-[100vh] absolute top-0 left-0 bg-white text-black pointer-events-auto transition-opacity ease-in-out delay-300 grid grid-cols-1 grid-rows-6 justify-items-center`}>
      <h2 className="cursor-pointer absolute pt-6 left-8 text-4xl" onClick={onClickBack}>&lt; Back</h2>
      <h1 className="pt-4 pb-8 row-span-1 text-6xl">{pageTitle}</h1>
      <div className="row-span-4 grid justify-items-center w-4/5">
        <PageComponent />
      </div>
      <div className="flex row-span-1 items-center">
        <a href="https://github.com/ryansheehy0" target="_blank">
          <img src="/logos/github.svg"/>
        </a>
        <a href="https://www.linkedin.com/in/ryan-sheehy-8513a5249/" target="_blank">
          <img src="/logos/linked-in.svg"/>
        </a>
      </div>
    </div>
  )
}