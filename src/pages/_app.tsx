import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import { ToastContainer } from 'react-toastify'
import {RecoilRoot} from "recoil"
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
    <Head>
      <title>Leet Clone</title>
      <meta name="viewport" content ='width-device-width,initial-scale=1 '/>
      <link rel ='icon' href='/favicon.png'/>
      <meta name ="description" content ="web application that contains leetcode problems and video content"/>
      
    </Head>
    <ToastContainer/>
    <Component {...pageProps} />
    </RecoilRoot>
  )
}
