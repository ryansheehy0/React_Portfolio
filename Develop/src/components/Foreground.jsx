import {useState} from "react"

export default function Foreground({triangleLength}){
  const clipPath = {
    clipPath:  `
      polygon(
        calc(-1 * (50vh - ${triangleLength})) 50vh, /*Left*/
        50vw calc(-1 * (50vw - ${triangleLength})), /*Top*/
        calc(100vw + 50vh - ${triangleLength}) 50vh, /*Right*/
        50vw calc(100vh + 50vw - ${triangleLength}) /*Bottom*/
	    )`,
  }

  const [style, setStyle] = useState(clipPath)

  window.addEventListener("topLeftOpen", () => {
    const newClipPath = {...clipPath} // Pass by value
    newClipPath.clipPath = `
      polygon(
				50vw calc(100vh + 50vw - ${triangleLength}), /*Left*/
				calc(100vw + 50vh - ${triangleLength}) 50vh, /*Top*/
				calc(100vw + 50vh - ${triangleLength}) 50vh, /*Right*/
				50vw calc(100vh + 50vw - ${triangleLength}) /*Bottom*/
			)`
    setStyle(newClipPath)
  })

  window.addEventListener("topRightOpen", () => {
    const newClipPath = {...clipPath} // Pass by value
    newClipPath.clipPath = `
      polygon(
				calc(-1 * (50vh - ${triangleLength})) 50vh, /*Left*/
				calc(-1 * (50vh - ${triangleLength})) 50vh, /*Top*/
				50vw calc(100vh + 50vw - ${triangleLength}), /*Right*/
				50vw calc(100vh + 50vw - ${triangleLength}) /*Bottom*/
			)`
    setStyle(newClipPath)
  })

  window.addEventListener("bottomLeftOpen", () => {
    const newClipPath = {...clipPath} // Pass by value
    newClipPath.clipPath = `
      polygon(
				50vw calc(-1 * (50vw - ${triangleLength})), /*Left*/
				50vw calc(-1 * (50vw - ${triangleLength})), /*Top*/
				calc(100vw + 50vh - ${triangleLength}) 50vh, /*Right*/
				calc(100vw + 50vh - ${triangleLength}) 50vh /*Bottom*/
			)`
    setStyle(newClipPath)
  })

  window.addEventListener("bottomRightOpen", () => {
    const newClipPath = {...clipPath} // Pass by value
    newClipPath.clipPath = `
      polygon(
				calc(-1 * (50vh - ${triangleLength})) 50vh, /*Left*/
				50vw calc(-1 * (50vw - ${triangleLength})), /*Top*/
				50vw calc(-1 * (50vw - ${triangleLength})), /*Right*/
				calc(-1 * (50vh - ${triangleLength})) 50vh /*Bottom*/
			)`
    setStyle(newClipPath)
  })

  return (
    <div style={style} className='bg-black text-white w-screen h-screen transition-[clip-path] ease-in-out delay-300 z-10'>
      <div className="relative w-full h-auto">
        <img src="/profile_picture.png" className="w-[1000px] h-auto absolute -top-32 right-[calc(220px+25%)]"/>
      </div>
      <h1 className="text-9xl text-white absolute right-[calc(25%-50px)] top-1/2 -translate-y-1/2 text-center">Ryan<br/>Sheehy</h1>
    </div>
  )
}