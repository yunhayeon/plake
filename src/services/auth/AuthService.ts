class AuthService {
  async getUser() {
    const baseURL = process.env.NEXT_PUBLIC_SITE_URL;

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
      res = await fetch(`${baseURL}/api/auths/user`, {
        method: "GET",
        credentials: "include",
        headers: header,
      });
    } else {
      res = await fetch("/api/auths/user", {
        method: "GET",
        credentials: "include",
      });
    }

    if (!res.ok) throw await res.json();
    return res.json();
  }

  async updateUser(formData: FormData) {
    const res = await fetch("/api/auths/user", {
      method: "PUT",
      body: formData,
    });

    if (!res.ok) throw await res.json();
    return res.json();
  }
}

const authService = new AuthService();

export default authService;
