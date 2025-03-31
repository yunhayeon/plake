import { getAuthorizedClient } from "@/app/lib/api/getAuthorizedClient";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const client = await getAuthorizedClient();

  return client.delete(`/gatherings/${params.id}/leave`);
}
