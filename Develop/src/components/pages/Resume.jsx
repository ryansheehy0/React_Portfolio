export default function Resume(){
  return (
    <div className="w-full h-full">
      <embed src="/blank.pdf" type="application/pdf" className="w-full h-full" />
      <h3 className="text-2xl">Skills:</h3>
      <ul>
        <li>Vanilla JavaScript: 90%</li>
        <li>React: 30%</li>
        <li>NodeJS: 75%</li>
        <li>HTML/CSS: 90%</li>
        <li>SQL: 60%</li>
        <li>ThreeJS: 5%</li>
      </ul>
    </div>
  )
}

export const pageTitle = "Resume"