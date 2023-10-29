import Appointment from "@/models/appointment";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const app = await Appointment.find({ email: params.email });
        if (!app) return new Response("Appointment Not Found", { status: 404 });

        return new Response(JSON.stringify(app), { status: 200 })

    } catch (error) {
        return new Response(error.message, { status: 500 });
    }
}