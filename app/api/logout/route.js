import { cookies } from "next/headers";

export async function GET() {
  cookies().set("admin_auth", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0
  });

  return Response.json({ success: true });
}
