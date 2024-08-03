import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";

const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  return NextResponse.json({ msg: "success" });
}

export async function POST(request) {
  const formData = await request.formData();
  const timeStamps = Date.now();

  const image = formData.get("image");

  const imageByteData = await image.arrayBuffer();

  const buffer = Buffer.from(imageByteData);

  const path = `./public/${timeStamps}_${image.name}`;
  await writeFile(path, buffer);
  const imgURL = `/${timeStamps}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgURL}`,
    author_image: `${formData.get("author_image")}`,
  };

  await BlogModel.create(blogData);
  console.log("Blogs saved successfully");

  return NextResponse.json({ success: true, msg: "Blog added successfully" });
}
