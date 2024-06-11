import Link from "next/link";


export default function Menu(){
    return(
        <ul className="menu">
            <li><Link href={"/"} prefetch={true}>Home</Link></li>
            <li><Link href={"/produtos"} prefetch={true}>Produtos</Link></li>
            <li><Link href={"/cursos"} prefetch={true}>Cursos</Link></li>
            <li><Link href={"/sobre#empresa"} scroll={false}>Sobre</Link></li>
            <li><Link href={"/imc"}>IMC</Link></li>
            <li><Link href={"/contato"}>Contato</Link></li>
        </ul>
    )
}