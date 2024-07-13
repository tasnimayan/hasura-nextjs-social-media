import { signOut } from "next-auth/react";

const SignOutBtn = () => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/auth/singin" });
  };

  return (
    <button
      onClick={handleSignOut}
      className="border shadow-sm rounded-md px-3 py-1 hover:bg-gray-100"
    >
      Sign Out
    </button>
  );
};

export default SignOutBtn;
