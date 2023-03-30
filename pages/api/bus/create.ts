import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Bus>
) {
  if (req.method != "POST") {
    return res.status(405);
  }
  const { reg_no, seats, type, route } = req.body;

  const busFound = await prisma.bus.findUnique({
    where: {
      reg_no,
    },
  });
  if (busFound) {
    return res.status(400).send("Bus already exists");
  }
  const bus = await prisma.bus.create({
    data: {
      reg_no,
      seats,
      type,
      route,
    },
  });
  return res.status(201).send(bus);
}
