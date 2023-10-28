import UserQuery from "@/models/query";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const query = await UserQuery.find({})

        return new Response(JSON.stringify(query), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all query", { status: 500 })
    }
} 