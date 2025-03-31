import { IMyGathering, IMyGatheringFilterParams } from "@/types/gathering";

class GatheringService {
  async createGathering(formData: FormData) {
    const res = await fetch("/api/gatherings", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw await res.json();
    return res.json();
  }

  async joinGathering(id: string) {
    const res = await fetch(`/api/gatherings/${id}/join`, {
      method: "POST",
    });

    if (!res.ok) throw await res.json();
    return res.json;
  }

  async deleteGathering(id: string) {
    const res = await fetch(`/api/gatherings/${id}/cancel`, {
      method: "PUT",
    });

    if (!res.ok) throw await res.json();
    return res.json();
  }

  async leaveGathering(id: string) {
    const res = await fetch(`/api/gatherings/${id}/leave`, {
      method: "DELETE",
    });

    if (!res.ok) throw await res.json();
    return res.json();
  }

  async getMyGatheringList(searchParams?: IMyGatheringFilterParams) {
    const paramStr = new URLSearchParams(
      (searchParams ?? {}) as Record<string, string>,
    ).toString();
    const baseURL = process.env.NEXT_PUBLIC_SITE_URL;
    const url = `/api/gatherings/joined${paramStr && `?${paramStr}`}`;

    const header = new Headers();
    let res: Response;
    if (typeof window === "undefined") {
      await import("next/headers").then(({ cookies }) => {
        const _cookies = cookies().getAll();
        const cookieArr = _cookies
          .map(cookie => `${cookie.name}=${cookie.value}`)
          .join("; ");
        header.set("Cookie", cookieArr);
      });
      res = await fetch(`${baseURL}${url}`, {
        method: "GET",
        credentials: "include",
        headers: header,
      });
    } else {
      res = await fetch(url, {
        method: "GET",
        credentials: "include",
      });
    }

    if (!res.ok) throw await res.json();
    return res.json() as Promise<IMyGathering[]>;
  }
}

const gatheringService = new GatheringService();

export default gatheringService;
