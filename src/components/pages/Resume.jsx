import Skill from "./skills/Skill"
import { skills } from "./skills/skills"

export default function Resume(){
  return (
    <div className="w-full h-fit flex flex-col items-center">
      <embed src="/ryan_sheehy_resume.pdf" type="application/pdf" className="w-full h-[990px]" />
      <h3 className="text-4xl py-8">Skills</h3>
      {skills.map((skill) => (
        <Skill key={skill.skillName} {...skill} />
      ))}
    </div>
  )
}

export const pageTitle = "Resume"