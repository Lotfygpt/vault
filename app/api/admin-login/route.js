import { cookies } from "next/headers";

export async function POST(req) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "FAIL" }, { status: 401 });
  }

  cookies().set("admin_auth", "true", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24
  });

  return Response.json({ success: true });
}
