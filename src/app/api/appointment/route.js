import Appointment from "@/models/appointment";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const appointmentData = await Appointment.find({})

        return new Response(JSON.stringify(appointmentData), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all Appointment", { status: 500 })
    }
} 