
// import dynamic from "next/dynamic";

import ClienteFetch from "@/components/client-fetch";
import Width from "@/components/width";

// const Width = dynamic(()=> import('@/components/width'), {ssr: false})


  
export default function SobrePage(){
    return (
        <main>
            <h2>Sobre</h2>
            <Width/>
            <h2  id="empresa">A Empresa</h2>

            <ClienteFetch/>
        </main>
    )
}