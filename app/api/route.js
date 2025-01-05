

export async function GET(request) {
    const data = {
        name: "John Doe",
        age: 30
    }
    return Response.json(data);
}

export async function POST(request) {
    const data = await request.json();
    return Response.json(data);
}