import { writeFile, readFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  const form = await req.formData();

  const brand = form.get("brand");
  const name = form.get("name");
  const price = form.get("price");
  const available = form.get("available") === "true";
  const image = form.get("image");

  const filename = Date.now() + "-" + image.name.replace(/\s+/g, "_");
  const imagePath = path.join(process.cwd(), "public", "montres", filename);

  await writeFile(imagePath, Buffer.from(await image.arrayBuffer()));

  const jsonPath = path.join(process.cwd(), "public", "watches.json");
  const file = await readFile(jsonPath, "utf8");
  const watches = JSON.parse(file);

  watches.push({
    id: Date.now(),
    brand,
    name,
    price: Number(price),
    available,
    img: "/montres/" + filename
  });

  await writeFile(jsonPath, JSON.stringify(watches, null, 2));

  return Response.json({ message: "Montre ajoutée avec succès !" });
}
