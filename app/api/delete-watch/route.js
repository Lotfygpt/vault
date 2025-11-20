import { readFile, writeFile, unlink } from "fs/promises";
import path from "path";

export async function POST(req) {
  const { id } = await req.json();
  const watchId = Number(id);

  const jsonPath = path.join(process.cwd(), "public", "watches.json");
  const file = await readFile(jsonPath, "utf8");
  const watches = JSON.parse(file);

  const index = watches.findIndex(w => w.id === watchId);
  if (index === -1) return Response.json({ success: false });

  // delete image
  try {
    const imgPath = path.join(process.cwd(), "public", watches[index].img);
    await unlink(imgPath);
  } catch {}

  watches.splice(index, 1);

  await writeFile(jsonPath, JSON.stringify(watches, null, 2));
  return Response.json({ success: true });
}
