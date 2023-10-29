import Appointment from "@/models/appointment";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const app = await Appointment.findById(params.id)
        if (!app) return new Response("Appointment Not Found", { status: 404 });

        return new Response(JSON.stringify(app), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}