import { useState } from "react"

export default function Page({pageTitle, openEvent, PageComponent}){
  const [visible, setVisible] = useState(false)

  window.addEventListener(openEvent, () => {
    // fade in visibility
    setVisible(true)
  })

  // Click back then fade out visibility
  function onClickBack(){
    setVisible(false)
    window.dispatchEvent(new CustomEvent("openForeground"))
  }

  return (
    <div className={`w-screen h-screen absolute top-0 left-0 bg-white text-black ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity ease-in-out delay-300 grid grid-cols-1 justify-items-center`}>
      <h2 className="cursor-pointer absolute pt-6 left-8 text-4xl" onClick={onClickBack}>&lt; Back</h2>
      <h1 className="pt-4">{pageTitle}</h1>
      <PageComponent />
      <div className="flex">
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