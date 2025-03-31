import { getAuthorizedClient } from "@/app/lib/api/getAuthorizedClient";

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  const client = await getAuthorizedClient();

  return client.post(`/gatherings/${params.id}/join`);
}
