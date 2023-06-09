import Head from "next/head"
import { MyComponent } from "@pedroresende/css-error"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function Another() {
  const router = useRouter()
  const [hasLoaded, setLoaded] = useState(false)
  useEffect(() => {
    if (!hasLoaded && typeof window !== undefined) {
      setLoaded(true)
    }
  }, [hasLoaded])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {hasLoaded && <MyComponent first="Your" last="Name" />}
        <button onClick={() => router.push("/")}>Back</button>
      </main>
    </>
  )
}
