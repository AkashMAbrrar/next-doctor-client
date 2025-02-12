"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  };
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
      toast.success("Logged In Successfully");
    }
  }, [session?.status]);

  return (
    <div className="flex justify-center gap-8">
      <p
        onClick={() => handleSocialLogin("google")}
        className="bg-slate-200 rounded-full p-3">
        <FaGoogle type="button" className="cursor-pointer"></FaGoogle>
      </p>
      <p
        onClick={() => handleSocialLogin("github")}
        className="bg-slate-200 rounded-full p-3">
        <FaGithub type="button" className="cursor-pointer"></FaGithub>
      </p>
    </div>
  );
};

export default SocialLogin;
