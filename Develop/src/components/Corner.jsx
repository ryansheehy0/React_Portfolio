import { useState } from "react"

export default function Corner({triangleLength, clipPath, origin, textOrigin, textRotation, text, event, top, left, right}){
  const [visible, setVisible] = useState(true)

  const width = "150px"
  const height = "35px"
  const oneOverSqrtTwo = "0.707106781"
  const offset = `calc(50% - ${oneOverSqrtTwo} * (${width}/2 + ${height}))`

  function clickEventFunction(){
    if(visible){
      window.dispatchEvent(new CustomEvent(event))
      setVisible(false)
    }
  }

  window.addEventListener("openForeground", () => {
    setVisible(true)
  })
  window.addEventListener("topLeftOpen", () => {
    setVisible(false)
  })
  window.addEventListener("topRightOpen", () => {
    setVisible(false)
  })
  window.addEventListener("bottomLeftOpen", () => {
    setVisible(false)
  })
  window.addEventListener("bottomRightOpen", () => {
    setVisible(false)
  })

  return (
    <div style={{clipPath, width: triangleLength, height: triangleLength}} className={`${visible ? "bg-white" : "bg-transparent"} absolute ${visible ? "cursor-pointer" : "cursor-default"} ${origin} transition-[background-color] ease-in-out delay-300`} onClick={clickEventFunction}>
      <span style={{top : top(offset), left: left(offset), right: right(offset), width, height}} className={`text-2xl transition-[color] ease-in-out delay-300 ${visible ? "text-black" : "text-transparent"} inline-block relative ${textOrigin} ${textRotation} text-center`}>{text}</span>
    </div>
  )
}