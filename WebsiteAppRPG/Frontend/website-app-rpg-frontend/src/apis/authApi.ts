const apiUrl = "https://localhost:7151/apis/auth";

export async function login(email: string, password: string) {
  const response = await fetch(apiUrl + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include"
  });

  return await response.json();
}