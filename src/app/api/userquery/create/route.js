import UserQuery from "@/models/query";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { fullname, email, description } = await request.json();
  try {
    await connectToDB();
    const newquery = new UserQuery({ fullname, email, description });

    await newquery.save();
    return new Response(JSON.stringify(newquery), { status: 201 });
  } catch (error) {
    return new Response("Failed to submit a new New Query", { status: 500 });
  }
};
