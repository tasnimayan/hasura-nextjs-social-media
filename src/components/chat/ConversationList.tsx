"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import UserCardSkeleton from "../skeletons/UserCardSkeleton";
import UserCard from "../UserCard";
import { ConversationType } from "@/lib/Interface";


const ConversationList = ({
  conversations,
}: {
  conversations: ConversationType[];
}) => {
  const { data: session } = useSession();

  if (!conversations) return <UserCardSkeleton />;
  if (conversations.length === 0) return <p>No conversation available</p>;

  return (
    <div className="flex flex-col space-y-1 mt-4 -mx-2 h-[calc(100dvh-250px)] overflow-y-auto ">
      {conversations.map((conversation) => (
        <Link
          key={conversation.id}
          href={`/chat/${conversation.id}`}
          className="hover:shadow"
        >
          {conversation.user1.id == session?.user.id ? (
            <UserCard user={conversation.user2} />
          ) : (
            <UserCard user={conversation.user1} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default ConversationList;
