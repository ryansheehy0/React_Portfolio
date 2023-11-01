import { useState } from "react"

export default function Contact(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(event){
    event.preventDefault()
  }

  return (
    <>
      <form className="text-white grid grid-cols-2 justify-items-center h-fit gap-4" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(event) => {setName(event.value)}}
          type="text"
          required
          placeholder="Your Name"
          className="inline-block focus:outline-none rounded p-2 h-fit bg-black col-span-1 w-full"
        />
        <input
          value={email}
          onChange={(event) => {setEmail(event.value)}}
          type="email"
          required
          placeholder="Your Email"
          className="inline-block focus:outline-none rounded p-2 h-fit bg-black col-span-1 w-full"
        />
        <input
          value={subject}
          onChange={(event) => {setSubject(event.value)}}
          type="text"
          required
          placeholder="Subject"
          className="block focus:outline-none rounded p-2 h-fit bg-black col-span-2 w-full"
        />
        <textarea
          value={message}
          onChange={(event) => {setMessage(event.value)}}
          type="text"
          placeholder="Message"
          className="block focus:outline-none rounded p-2 bg-black col-span-2 w-full h-36"
        />
        <button type="submit" className="block focus:outline-none rounded p-2 h-fit bg-black col-span-2 w-full">
          Submit
        </button>
      </form>
      {/*Add telephone and email address w/ images*/}
    </>
  )
}

export const pageTitle = "Contact"