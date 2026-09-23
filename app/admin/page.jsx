import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function AdminRootPage() {
  const cookieStore = cookies();
  const hasAuth = cookieStore.get("auth_token") || cookieStore.get("admin-auth");

  if (hasAuth) {
    redirect("/admin/dashboard");
  }

  redirect("/admin/login");
}
