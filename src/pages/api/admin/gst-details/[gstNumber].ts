import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { gstNumber } = req.query;
  if (!gstNumber || typeof gstNumber !== "string") {
    return res.status(400).json({ message: "gstNumber is required" });
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
    const upstreamUrl = `${baseUrl}/api/auth/admin/gst-details/${encodeURIComponent(gstNumber)}`;

    const upstream = await fetch(upstreamUrl, { method: "GET" });
    const data = await upstream.json();

    if (!upstream.ok) {
      return res.status(upstream.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error: any) {
    console.error("GST proxy error", error);
    return res.status(500).json({ message: "Failed to fetch GST details" });
  }
}


