

export async function GET(request, { params }) {
    const id = (await params).id;
    // Handle the request based on slug
    const data = await fetchDataById(id);
    if (!data) {
        return Response.json({ status: 404, body: { message: 'Not found' } });
    }
    return Response.json(data)
}


async function fetchDataById(id) {
    // Mock function to simulate fetching data by ID
    // Replace this with your actual data fetching logic
    const mockData = {
        1: { title: 'First Post', content: 'This is the first post.' },
        2: { title: 'Second Post', content: 'This is the second post.' },
    };

    return mockData[id] || null;
}