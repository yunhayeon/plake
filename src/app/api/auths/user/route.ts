import { getAuthorizedClient } from "@/app/lib/api/getAuthorizedClient";

export async function GET() {
  const client = await getAuthorizedClient();

  return client.get("/auths/user");
}

export async function PUT(req: Request) {
  const formData = await req.formData();
  const client = await getAuthorizedClient();

  return client.put("/auths/user", formData);
}
