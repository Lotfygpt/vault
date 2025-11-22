import { readdir } from "fs/promises";
import path from "path";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const folder = searchParams.get("folder");

  if (!folder) {
    return Response.json({ error: "Missing folder" }, { status: 400 });
  }

  const dir = path.join(process.cwd(), "public", "superfranken", folder);

  const files = await readdir(dir);
  const images = files
    .filter((f) => f.match(/\.(jpg|jpeg|png|webp)$/i))
    .map((f) => `/superfranken/${folder}/${f}`);

  return Response.json(images);
}
