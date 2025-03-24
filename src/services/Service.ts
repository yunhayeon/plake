import HttpClient from "@/services/HttpClient";

abstract class Service {
  protected http = HttpClient.getInstance();

  protected setToken(token: string) {
    this.http.setToken(token);
  }
}

export default Service;
