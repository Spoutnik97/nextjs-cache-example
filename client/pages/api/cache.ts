// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ROOT_URL } from "../../src/constants";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("Fetching server from api...");

  const query = await fetch(`${ROOT_URL}/nocache`);
  console.log("query headers", query.headers);

  const response = await query.json();

  res.setHeader("Cache-control", "public, max-age=30");
  res.status(200).json(response);
}
