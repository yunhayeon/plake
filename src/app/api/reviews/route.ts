import { getAuthorizedClient } from "@/app/lib/api/getAuthorizedClient";

export async function POST(req: Request) {
  const body = await req.json();
  const client = await getAuthorizedClient();

  return client.post("/reviews", body);
}
