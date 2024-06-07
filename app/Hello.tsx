'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hello() {
  const [message, setMessage] = useState<string>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/hello')
      const {message} = await res.json()
      setMessage(message)
    }
    fetchData()
  }, [])

  return <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center px-4 md:px-6 space-y-4">
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Here is the response to your API call:
            </p>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {!message ? "Loading..." : message}        
            </h1>
            <Link
          href="/api/hello"
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
          prefetch={false}
        >
          View the API call
        </Link>
          </div>
        </section>
}
