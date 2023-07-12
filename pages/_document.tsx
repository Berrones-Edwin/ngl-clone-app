import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{backgroundColor:"#ccc",minWidth:'100vh'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}