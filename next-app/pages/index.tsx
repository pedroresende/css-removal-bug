import Head from "next/head";
import { MyButton } from "@pedroresende/css-error";
import { useState, useEffect } from "react";

export default function Home() {
  const [hasLoaded, setLoaded] = useState(false);
  const [buttonText, setButtonText] = useState("hi");

  useEffect(() => {
    if (!hasLoaded && typeof window !== undefined) {
      setLoaded(true);
    }
  }, [hasLoaded]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p style={{ margin: "10px" }}>
          <input
            onChange={(e) => {
              setButtonText(e.target.value);
            }}
            defaultValue={buttonText}
          />
        </p>
        {hasLoaded && <MyButton>{buttonText}</MyButton>}
      </main>
    </>
  );
}
