import Appointment from "@/models/appointment";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { fullname, email, phone, time,status } = await request.json();
  try {
    await connectToDB();
    const newAppointment = new Appointment({
      fullname,
      email,
      phone,
      time,
      status
    });

    await newAppointment.save();
    return new Response(JSON.stringify(newAppointment), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Appointment", { status: 500 });
  }
};
