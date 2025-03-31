import HttpClient from "@/services/HttpClient";

abstract class Service {
  protected http = HttpClient.getInstance();
}

export default Service;
