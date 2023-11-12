import { useState, useEffect } from "react"

export default function Skill({skillName, skillLogo, percentage, color1, color2}){
  const [strokeOffset, setStrokeOffset] = useState(440)

  useEffect(() => {
    const finalStrokeOffset = 447 - (447 * (percentage / 100))
    setStrokeOffset(finalStrokeOffset)
  }, [])

  const SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" >
         <defs>
            <linearGradient id={`GradientColor${skillName.split(" ").join("")}`}>
               <stop offset="0%" stop-color={color1} />
               <stop offset="100%" stop-color={color2} />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="72" stroke-linecap="round" strokeWidth="16" stroke={`url(#GradientColor${skillName.split(" ").join("")})`} fill="none" strokeDasharray="447" strokeDashoffset={strokeOffset} style={{transition: "stroke-dashoffset 0.5s ease-in-out"}} />
    </svg>
  )

  return (
    <>
      <h4 className="text-3xl">{skillName}</h4>
      <div className="h-40 w-40 rounded-full p-4 mb-10 flex justify-center items-center shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] relative">
        <div className="h-32 w-32 rounded-full shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)]">
          <div className="h-32 w-32 flex items-center justify-center flex-col">
            <img src={skillLogo} className="w-12 h-12" />
            <p className="text-xl font-bold text-center w-12">{percentage}%</p>
          </div>
        </div>
        <div className="absolute flex items-center justify-center">{SVG}</div>
      </div>
    </>
  )
}