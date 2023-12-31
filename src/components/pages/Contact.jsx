import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact(){
  const form = useRef()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(event){
    event.preventDefault()
    const serviceId = "service_e1l2mww"
    const templateId = "template_b8orzrf"
    const publicKey = "x-2GXMzV_2EEN_Eum"
    try{
      const result = await emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      console.log(result.text)

      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    }catch(error){
      console.log(error.text);
    }
  }

  return (
    <>
      <form ref={form} className="text-white grid grid-cols-2 justify-items-center h-fit gap-4" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(event) => {setName(event.value)}}
          type="text"
          required
          placeholder="Your Name"
          name="name"
          className="inline-block focus:outline-none rounded p-2 h-fit bg-black col-span-1 w-full"
        />
        <input
          value={email}
          onChange={(event) => {setEmail(event.value)}}
          type="email"
          required
          placeholder="Your Email"
          name="email"
          className="inline-block focus:outline-none rounded p-2 h-fit bg-black col-span-1 w-full"
        />
        <input
          value={subject}
          onChange={(event) => {setSubject(event.value)}}
          type="text"
          required
          placeholder="Subject"
          name="subject"
          className="block focus:outline-none rounded p-2 h-fit bg-black col-span-2 w-full"
        />
        <textarea
          value={message}
          onChange={(event) => {setMessage(event.value)}}
          type="text"
          placeholder="Message"
          name="message"
          className="block focus:outline-none rounded p-2 bg-black col-span-2 w-full h-36"
        />
        <button type="submit" className="block focus:outline-none rounded p-2 h-fit bg-black col-span-2 w-full">
          Submit
        </button>
      </form>
      <div className="w-full h-fit flex items-center justify-center sm:flex-row flex-col">
        <div className="bg-black rounded sm:mr-4 mt-8 relative w-[350px] h-[250px] flex items-center justify-center flex-col">
          <div style={{backgroundImage: `url(/phone_image.jpg)`}} className="bg-cover bg-no-repeat bg-center w-[350px] h-[250px] opacity-40 absolute"></div>
          <p className="w-full text-white text-center text-xl z-10">Phone</p>
          <p className="w-full text-white text-center text-xl z-10">(408) 806-3989</p>
        </div>
        <div className="bg-black rounded sm:ml-4 mt-8 relative w-[350px] h-[250px] flex items-center justify-center flex-col">
          <div style={{backgroundImage: `url(/email_image.jpg)`}} className="bg-cover bg-no-repeat bg-center w-[350px] h-[250px] opacity-40 absolute"></div>
          <p className="w-full text-white text-center text-xl z-10">Email</p>
          <p className="w-full text-white text-center text-xl z-10">ryansheehy0@gmail.com</p>
        </div>
      </div>
    </>
  )
}

export const pageTitle = "Contact"