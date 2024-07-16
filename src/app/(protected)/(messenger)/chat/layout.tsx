import dynamic from "next/dynamic";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const ConversationList = dynamic(() => import("@/components/ConversationList"));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-[70px] h-[calc(100vh-70px)] overflow-hidden">

      <div className="flex antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden bg-gray-50">

          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 border-r">
            <div className="flex flex-row items-center justify-center h-12 w-full">
              <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                <IoChatboxEllipsesOutline className="w-6 h-6" />
              </div>
              <div className="ml-2 font-bold text-2xl">Conversations</div>
            </div>

            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  4
                </span>
              </div>

              <ConversationList />
            </div>
          </div>

          {children}
        </div>
      </div>

    </main>
  );
}