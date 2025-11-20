import { cookies } from "next/headers";

export async function GET() {
  const token = cookies().get("admin_auth");
  if (!token) return new Response("Unauthorized", { status: 401 });
  return new Response("OK");
}
