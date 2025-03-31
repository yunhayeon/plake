import { NextResponse } from "next/server";

export default class ApiClient {
  private token?: string;
  private baseURL: string;

  constructor(token?: string) {
    this.token = token;
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || "";
    if (!this.baseURL) {
      throw new Error("API_URL 환경변수가 설정되지 않았습니다.");
    }
  }

  private async request(
    method: "GET" | "POST" | "PUT" | "DELETE",
    path: string,
    body?: unknown,
    config?: RequestInit,
  ) {
    const headers = new Headers();

    if (this.token) {
      headers.set("Authorization", `Bearer ${this.token}`);
    }

    const isFormData = body instanceof FormData;
    if (!isFormData) {
      headers.set("Content-Type", "application/json");
    }

    const res = await fetch(`${this.baseURL}${path}`, {
      method,
      headers,
      body: isFormData ? body : body ? JSON.stringify(body) : undefined,
      ...config,
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        {
          code: data.code || "UNKNOWN",
          message: data.message || "요청 실패",
        },
        { status: res.status },
      );
    }

    return NextResponse.json(data);
  }

  get(path: string) {
    return this.request("GET", path);
  }

  post(path: string, body?: unknown) {
    return this.request("POST", path, body);
  }

  put(path: string, body?: unknown) {
    return this.request("PUT", path, body);
  }

  delete(path: string) {
    return this.request("DELETE", path);
  }
}
