import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "@/utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return;
  }
  const { name, email, password } = req.body;
  const encryptedPass = await bcrypt.hash(password, 10);
  try {
    const mailExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (mailExist) {
      return res.status(200).send("Email already exists");
    }
    const user = await prisma.user.create({
      data: {
        email,
        password: encryptedPass,
        name,
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500);
  }
}
