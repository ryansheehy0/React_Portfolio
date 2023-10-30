export default function Portfolio(){

  return (
    <div className={`w-screen h-screen absolute top-0 left-0 bg-white text-black ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity ease-in-out delay-300 grid grid-cols-1 justify-items-center`}>
      <h2 className="cursor-pointer absolute pt-6 left-8 text-4xl" onClick={onClickBack}>&lt; Back</h2>
      <h1 className="pt-4">Portfolio</h1>
    </div>
  )
}