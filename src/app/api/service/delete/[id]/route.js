import Service from "@/models/service";
import { connectToDB } from "@/utils/database";

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the prompt by ID and remove it
        await Service.findByIdAndRemove(params.id);

        return new Response("Service deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting Service", { status: 500 });
    }
};