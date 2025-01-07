"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }


  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input className='px-4 py-1 focus:outline-purple-600 rounded-md' value={url} type="text" placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
        <input className='px-4 py-1 focus:outline-purple-600 rounded-md' value={shorturl} type="text" placeholder='Enter your preferred short URL' onChange={e => { setshorturl(e.target.value) }} />
      </div>
      <div className='flex justify-center items-center'>
        <button onClick={generate} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg p-3 py-1 text-center'>Generate</button>
      </div>
      {generated && <>
        <span className='font-bold text-lg'>Your Link</span> <code><Link target="_blank" href={generated}>{generated}</Link>
        </code></>}
    </div>
  )
}

export default Shorten