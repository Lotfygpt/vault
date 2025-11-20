import { readFile, writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  const form = await req.formData();
  const id = Number(form.get("id"));

  const jsonPath = path.join(process.cwd(), "public", "watches.json");
  const file = await readFile(jsonPath, "utf8");
  const watches = JSON.parse(file);

  const index = watches.findIndex(w => w.id === id);
  if (index === -1)
    return Response.json({ success: false, message: "Introuvable" });

  watches[index].brand = form.get("brand");
  watches[index].name = form.get("name");
  watches[index].price = Number(form.get("price"));
  watches[index].available = form.get("available") === "true";

  const newImage = form.get("image");
  if (newImage && typeof newImage === "object") {
    const filename = Date.now() + "-" + newImage.name.replace(/\s+/g, "_");
    const imagePath = path.join(process.cwd(), "public", "montres", filename);
    await writeFile(imagePath, Buffer.from(await newImage.arrayBuffer()));

    watches[index].img = "/montres/" + filename;
  }

  await writeFile(jsonPath, JSON.stringify(watches, null, 2));
  return Response.json({ success: true, message: "Modifié avec succès !" });
}
