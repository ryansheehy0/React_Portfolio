import Skill from "./skills/Skill"
import { skills } from "./skills/skills"

export default function Resume(){
  return (
    <div className="w-full h-fit flex flex-col items-center">
      <embed src="/ryan_sheehy_resume.pdf" type="application/pdf" className="w-full h-[990px]" />
      <h3 className="text-4xl py-8">Skills</h3>
      {/*skills.map((skill) => {
        <Skill {...skill} />
      })*/}
        <Skill {...skills[0]} />
        <Skill {...skills[1]} />
        <Skill {...skills[2]} />
        <Skill {...skills[3]} />
        <Skill {...skills[4]} />
        <Skill {...skills[5]} />
    </div>
  )
}

export const pageTitle = "Resume"