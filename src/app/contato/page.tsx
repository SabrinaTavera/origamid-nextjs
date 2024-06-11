import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contato",
    description: "Criado por Sabrina",
  };
  
export default function ContatoPage(){
    return (
        <main>
            <h2>Contato</h2>
                   
        </main>
    )
}



// type PageParams = {
//     params: {
//         slug: string[]
//     }
// }
// export default async function CursosPage({params}: PageParams){

//     // const response = await fetch(`https://api.origamid.online/produtos/${params.id}`)

//     // const data = await response.json() as Produto
//     return <main>
//         <h1>Cursos  </h1>
//         <p>{params.slug.join('/')}</p>
//         </main>
// }