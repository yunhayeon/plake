import { getAuthorizedClient } from "@/app/lib/api/getAuthorizedClient";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.toString();
  const client = await getAuthorizedClient();

  return client.get(`/gatherings/joined${query ? `?${query}` : ""}`);
}
