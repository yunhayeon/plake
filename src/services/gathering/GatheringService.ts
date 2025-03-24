import { CreateGatheringFormType } from "@/schemas/gatheringSchema";
import Service from "@/services/Service";
import { IGathering } from "@/types/gathering";

class GatheringService extends Service {
  constructor() {
    super();
    this.setToken("");
  }

  getGatheringList(type?: string, params?: string) {
    const isOnline = type === "online";
    const onlineFilter = isOnline ? "?location=홍대입구" : "";
    const filterParams = isOnline ? onlineFilter + `&${params}` : `?${params}`;

    if (isOnline && !params)
      return this.http.get<IGathering[]>(`/gatherings${onlineFilter}`);

    if (params)
      return this.http.get<IGathering[]>(`/gatherings${filterParams}`);

    return this.http.get<IGathering[]>(`/gatherings`);
  }
  getGatheringDetail(id: string) {
    const data = this.http.get<IGathering>(`/gatherings/${id}`);
    return data;
  }
  createGathering(formData: CreateGatheringFormType) {
    const data = this.http.post("/gatherings", formData);
    return data;
  }
  deleteGathering(id: string) {
    const data = this.http.put(`/gatherings/${id}/cancel`);
    return data;
  }
  joinGathering(id: string) {
    const data = this.http.post(`/gatherings/${id}/join`);
    return data;
  }
  leaveGathering(id: string) {
    const data = this.http.delete(`/gatherings/${id}/leave`);
    return data;
  }
}

const gatheringService = new GatheringService();

export default gatheringService;
