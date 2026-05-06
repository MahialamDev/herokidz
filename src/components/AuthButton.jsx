"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const AuthButton = () => {
  const { status } = useSession();

  if (status === "loading") {
    return <p className="text-red-500">Loading...</p>;
  }

  if (status === "authenticated") {
    return (
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="rounded-full bg-red-500 px-6 py-2 font-bold text-white"
      >
        Logout
      </button>
    );
  }

  return (
    <Link href="/login">
      <button className="rounded-full bg-blue-600 px-6 py-2 font-bold text-white transition-transform hover:scale-105 active:scale-95">
        Login
      </button>
    </Link>
  );
};

export default AuthButton;