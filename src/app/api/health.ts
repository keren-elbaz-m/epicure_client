import { BASE_API_URL } from "@/constans/Api.constans";

export async function checkServerHealth(): Promise<string> {
    const res = await fetch(`${BASE_API_URL}/health`);
    if (!res.ok) throw new Error("Server not reachable");
    return res.text();
}
