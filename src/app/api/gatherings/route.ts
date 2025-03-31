import { getAuthorizedClient } from "@/app/lib/api/getAuthorizedClient";

export async function POST(req: Request) {
  const formData = await req.formData();
  const client = await getAuthorizedClient();

  return client.post("/gatherings", formData);
}
