import Navbar from "@/components/layout/feed/navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <div className="flex flex-col h-dvh w-full overflow-hidden">
      <Navbar />
      <main className="bg-[#EFF6FF]">{children}</main>
    </div>
  );
}
