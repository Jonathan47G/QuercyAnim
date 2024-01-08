
export async function GET(request:Request) {
    console.log('Loading hello world function');
    return Response.json("test")
}