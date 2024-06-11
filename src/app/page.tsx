import Acesso from "@/components/acesso";
import Menu from "@/components/menu"
import ServerFetch from "@/components/server-fetch";

export default async function     HomePage() {

  return (
    <main >
     <h1>Home </h1>
     <Acesso/>
     <ServerFetch/>

    
    </main>
  );
}
