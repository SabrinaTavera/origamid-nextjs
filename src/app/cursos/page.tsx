import { getCursos } from "@/app/api/cursos"
import Link from "next/link";

export default async function CursosPage(){

    const cursos =  await getCursos();
 console.log({cursos});
    return (
        <main>
            <h1>Cursos </h1>
            <ul>
                {cursos.map((curso)=>{
                    return <li key={curso.id}><Link href={`cursos/${curso.slug}`} >{curso.nome}</Link></li>
                })}
            </ul>
        </main>
    )
}