"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClassName = `background-dark400_light900 body-medium text-dark200_light800 
  rounded-2  min-h-12 flex-1 px-4 py-3`;

  const handleSignIn = (provider: "github" | "google") => {
    console.log("Handle github");

    try {
      signIn(provider, {
        redirectTo: ROUTES.HOME,
        // redirect: false,
      });
    } catch (error) {
      console.log(error);
      toast.error(
        error instanceof Error
          ? error.message
          : "An error occoured during sign-in"
      );
    }
  };

  return (
    <div className="flex flex-wrap mt-10 gap-2.5">
      <Button
        // className={buttonClassName}
        onClick={() => handleSignIn("github")}
      >
        <Image
          src={"/icons/github.svg"}
          alt="Github"
          width={20}
          height={20}
          className="object-contain mr-2.5 invert-colors"
        />
        <span>Login in with Github</span>
      </Button>
      <Button
        // className={buttonClassName}
        onClick={() => handleSignIn("google")}
      >
        <Image
          src={"/icons/google.svg"}
          alt="Github"
          width={20}
          height={20}
          className="object-contain mr-2.5 invert-colors"
        />
        <span>Login in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
