import React,{useEffect, useState} from 'react';

export default function ContactForm(){
    //useState
    const [name,setName]=useState(null)
    const [company,setCompany]=useState(null)
    const [email,setEmail]=useState(null)
    const [message,setMessage]=useState(null)
    const [error,setError]=useState(null)

    function handleSubmit(e){
        e.preventDefault(); 
        if(!name||!company||!email){
           return handleError('Empty Input. Please fill out all inputs.')
        }
        return alert(name,company,email,message)
    }
    //Handling Errors
    function handleError(string){
        setError(string)
        setTimeout(()=>setError(null),3000)
    }
    useEffect(()=>{
        if(error) return setError(null)
    },[name,company,email])
    
    return(
        <form className="flex flex-col justify-start items-center w-4/5 border-2 border-solid rounded-xl shadow-lg py-2 px-3 gap-4" onSubmit={e=>handleSubmit(e)}>
            <h1 className="text-3xl font-bold">Contact Me</h1>
            <input id="contact_name" className="px-2 py-1 placeholder:text-sm text-sm w-full active:focus:ring-0" placeholder='Your Name' onInput={e=>setName(e.target.value)}></input>
            <input id="contact_company" className="px-2 py-1 placeholder:text-sm text-sm w-full" placeholder='Your Email Address' onInput={e=>setCompany(e.target.value)}></input>
            <input id="contact_email" className="px-2 py-1 placeholder:text-sm text-sm w-full" placeholder='Your Message' onInput={e=>setEmail(e.target.value)}></input>
            <textarea onInput={e=>setMessage(e.target.value)} className="w-full ring-2 ring-black rounded-lg h-48 p-2 text-sm"></textarea>
            <button type="submit" className="border-2 border-solid border-emerald-500 rounded-lg py-1 px-2 hover:text-white hover:bg-emerald-500">Submit</button>
            {error?<div>{error}</div>:null}
        </form>
    ) 
}