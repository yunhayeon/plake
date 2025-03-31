interface HTTPInstance {
  get<R>(url: string, config?: RequestInit): Promise<R>;
  post<T, R>(url: string, data?: T, config?: RequestInit): Promise<R>;
  put<T, R>(url: string, data?: T, config?: RequestInit): Promise<R>;
  delete<R>(url: string, config?: RequestInit): Promise<R>;
}

class HttpClient implements HTTPInstance {
  private static instance: HttpClient;
  private baseURL: string;

  constructor() {
    this.baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
  }

  public static getInstance() {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  private async request<R = unknown>(
    method: string,
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<R> {
    try {
      const isFormData = data instanceof FormData;
      const headers = new Headers(config?.headers);

      if (!isFormData) {
        headers.set("Content-Type", "application/json");
      }

      const response = await fetch(this.baseURL + url, {
        method,
        headers,
        body: isFormData ? data : data ? JSON.stringify(data) : undefined,
        ...config,
      });

      const responseData: R = await response.json();

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return responseData;
    } catch (error) {
      console.error("[Error]", method, url, error);
      throw error;
    }
  }

  public get<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>("GET", url, undefined, config);
  }

  public post<T>(
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>("POST", url, data, config);
  }

  public put<T>(url: string, data?: unknown, config?: RequestInit): Promise<T> {
    return this.request<T>("PUT", url, data, config);
  }

  public delete<R>(url: string, config?: RequestInit): Promise<R> {
    return this.request<R>("DELETE", url, undefined, config);
  }
}

export default HttpClient;
