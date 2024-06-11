type Params = {
    params: {
        curso: string,
        aula: string
    }
}
export default function AulaPage(
    {params}: Params
){


    return (
        <main>

            <h1>Aula {params.aula}</h1>
        </main>


    )
}