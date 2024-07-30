"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createContext, useContext } from "react";
import MainLoader from "@/components/skeletons/MainLoader";

const SessionContext = createContext(null)
// Session hook for session variable data
export const useSessionContext = () => {
  const context = useContext(SessionContext);
  if(context === null){
    throw new Error('Must log in to use Session')
  }
  return context;
}

const AuthWrapper = ({ children }: { children?: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <MainLoader />;
  }

  if (!session) {
    router.replace("/auth/signin");
  } else {
    return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
  }
};

export default AuthWrapper;
