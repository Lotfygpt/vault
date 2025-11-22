import { readdir, stat } from "fs/promises";
import path from "path";

export async function GET() {
  const dir = path.join(process.cwd(), "public", "superfranken");
  const items = await readdir(dir);

  const folders = [];

  for (const item of items) {
    const folderPath = path.join(dir, item);
    const isDir = (await stat(folderPath)).isDirectory();

    if (isDir) {
      let thumb = null;

      // Vérifie si thumb.jpg existe
      try {
        const files = await readdir(folderPath);
        const thumbFile = files.find((f) => f.toLowerCase().startsWith("thumb"));

        if (thumbFile) {
          thumb = `/superfranken/${item}/${thumbFile}`;
        } else if (files.includes("1.jpg")) {
          thumb = `/superfranken/${item}/1.jpg`;
        }
      } catch {}

      folders.push({
        name: item,
        thumb,
      });
    }
  }

  return Response.json(folders);
}
