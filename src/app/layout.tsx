import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Formstack Style Test',
  description: 'proof of concept Axos Bank',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='gradient-bg-blue'>
        <main>{children}</main>
        {/* <script type="text/javascript" id="jsFastForms" src="https://sfapi-sandbox.formstack.io/FormEngine/Scripts/Main.js?d=3gtN3PcFAZfu3Q4al6gcD6EiKjsgT3v6cSaJXuDd37sSqfFhPgi4bi5wXCa5huTY"></script> */}
        <script type="text/javascript" data-ishosted="true" id="jsFastForms" data-baseurl="https://sfapi-sandbox.formstack.io/FormEngine/Scripts/main.js?d=50853" src="https://sfapi-sandbox.formstack.io/FormEngine/Scripts/main.js?d=50853"></script>
        
        {/* <Script id='show-logo'>
          {`window.addEventListener("load", function() { var logo = document.createElement("img"); Object.assign(logo, { className: "x-logo", src: "http://www.axosbank.com/-/media/Axos/Company-Logos/axos-transparent", height: 36, width: 36, alt: "" }); setTimeout(() => { var child = document.querySelector("#dvFastForms .ff-page-header"); var parent = document.querySelector(".ff-page-header-row > div > div"); parent.insertBefore(logo, child); }, 2000); });`}
        </Script> */}
      </body>
    </html>
  )
}