import Skill from "./skills/Skill"
import { skills } from "./skills/skills"

export default function Resume(){
  return (
    <div className="w-full h-fit flex flex-col items-center">
      <embed src="/blank.pdf" type="application/pdf" className="w-full h-[500px]" />
      <h3 className="text-4xl py-8">Skills</h3>
      <Skill {...skills[0]} />
    </div>
  )
}

export const pageTitle = "Resume"