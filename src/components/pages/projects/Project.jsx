export default function Project({title, description, imagePath, githubLink, deployedSiteLink}){

  return (
    <a href={`${deployedSiteLink}`} target="_blank" style={{backgroundImage: `url(${imagePath})`}} className={`bg-cover bg-no-repeat bg-center rounded w-[350px] h-[250px] border-black border-2`}>
      <div className="bg-black inline-block p-2 z-10 rounded-br">
        <a href={`${githubLink}`} target="_blank" className="no-underline text-white hover:no-underline hover:text-white">{title}</a>
        <p className="text-white text-sm">{description}</p>
      </div>
    </a>
  )
}