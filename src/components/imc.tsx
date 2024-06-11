'use client'

import { useState } from "react"

export default function IMC(){
    const [peso,setPeso] = useState('')
    const [altura,setAltura] = useState('')
    const [imc,setImc] = useState('')

    
    const handleImc = ()    =>{
const alturaMetro = Number(altura) /100
        const calculo =  (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2)

        setImc(calculo)
    }
    return <div>
           
       
       <label htmlFor="peso">Peso (em kg)</label>
       <input type="number" id="peso" name="peso" value={peso} onChange={(e)=>setPeso(e.target.value)}/>
       <label htmlFor="altura">Altura (em cm)</label>
       <input type="number" id="altura" name="altura" value={altura} onChange={(e)=> setAltura(e.target.value)}/>
       <button onClick={handleImc}>Calcular</button>

       <label htmlFor="imc">IMC: {imc}</label>
    </div>
}