export async function GET(){

    const response = await fetch('https://api.origamid.online/conta/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'dog',
            password: 'dog',
        })




    })

    const data = await response.json()

    return Response.json(data)
}