import Service from "@/models/service";
import { connectToDB } from "@/utils/database";

export const PATCH = async (request, { params }) => {
    const { name,small_description, description, price, banner } = await request.json();

    try {
        await connectToDB();

        // Find the existing prompt by ID
        const existingPrompt = await Service.findById(params.id);

        if (!existingPrompt) {
            return new Response("Service not found", { status: 404 });
        }

        // Update the prompt with new data
        existingPrompt.name = name;
        existingPrompt.description = description;
        existingPrompt.price = price;
        existingPrompt.banner=banner;
        existingPrompt.small_description=small_description

        await existingPrompt.save();

        return new Response("Successfully updated the Service", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Service", { status: 500 });
    }
};