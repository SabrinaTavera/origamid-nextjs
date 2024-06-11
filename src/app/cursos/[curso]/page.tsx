import { getCurso } from "@/app/api/cursos";
import Link from "next/link";
import { useEffect } from "react"


type Params = {
    params: {
        curso: string
    }
}

export default async function CursosPage({params}: Params){

    const curso = await getCurso(params.curso);

    return (
        <main>
            <h1>{curso.nome}</h1>
            <p>Total horas: {curso.total_horas}</p>
            <p>Total aulas: {curso.total_aulas}</p>

            <h2>Aulas</h2>
            <ul>
                {curso.aulas.map((aula) => {
                    return <li key={aula.id}><Link href={`/cursos/${params.curso }/${aula.slug}`}></Link>{aula.nome}</li>
                })}
            </ul>



        </main>


    )
}