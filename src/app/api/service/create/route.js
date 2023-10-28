import Service from "@/models/service";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { type,name, small_description,description, price, banner } = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Service({ type, name, small_description, description, price, banner });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new service", { status: 500 });
    }
}