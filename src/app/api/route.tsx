import {NextRequest} from "next/server";


const GET = (request:NextRequest) => {
    console.log(request)
    return new Response(`Hello World! URL = ${request.url}`)
}

export {GET}

