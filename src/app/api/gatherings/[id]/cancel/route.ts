import { getAuthorizedClient } from "@/app/lib/api/getAuthorizedClient";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const client = await getAuthorizedClient();

  return client.put(`/gatherings/${params.id}/cancel`);
}
