"use client";
import React, { useState } from "react";
import { SocialLoginButton } from "@/components/SocialLoginButton";
import { PasswordInput } from "@/components/PasswordInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

import { GoogleIco } from "@/assets/icons/Google";
import { GithubIco } from "@/assets/icons/Github";
import LogoImg from "@/assets/images/logo.png";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password, rememberMe });
  };

  const socialProviders = [
    { provider: "GitHub", icon: GithubIco },
    { provider: "Google", icon: GoogleIco },
  ];

  return (
    <div className="flex flex-col items-center text-sm pt-10 pb-[94px] px-20 max-md:px-5">
      <div className="flex w-[544px] max-w-full flex-col items-stretch">
        <img
          src={LogoImg.src}
          alt="Forem Logo"
          className="aspect-[2.38] w-[114px] self-center max-w-full"
        />

        <h1 className="text-3xl font-bold leading-none text-center self-center mt-8 text-foreground">
          Join the Forem
        </h1>

        <p className="text-base text-center self-center mt-[17px] text-muted-foreground">
          Forem is a community of 2,893,476 amazing members
        </p>

        {socialProviders.map((provider) => (
          <SocialLoginButton
            key={provider.provider}
            icon={provider.icon}
            provider={provider.provider}
            onClick={() => console.log(`Login with ${provider.provider}`)}
          />
        ))}

        <div className="relative flex items-center justify-center mt-[22px]">
          <div className="bg-border h-px w-full absolute" />
          <span className="bg-card relative px-[18px] py-1.5 text-foreground">
            OR
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-card text-card-foreground border-border focus:ring-2 focus:ring-ring focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-base text-foreground">
              Password
            </Label>
            <PasswordInput
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex w-full items-center justify-between gap-10 text-base max-md:flex-wrap">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember-me"
                checked={rememberMe}
                onCheckedChange={() => setRememberMe(!rememberMe)}
                
              />
              <Label
                htmlFor="remember-me"
                className="text-foreground cursor-pointer"
              >
                Remember me
              </Label>
            </div>
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
          </div>

          <Button
            size="lg"
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Log in
          </Button>
        </form>

        <p className="text-muted-foreground leading-[21px] text-center self-center mt-8">
          By signing in, you are agreeing to our{" "}
          <a href="#" className="text-primary hover:underline">
            privacy policy
          </a>
          ,{" "}
          <a href="#" className="text-primary hover:underline">
            terms of use
          </a>
          <br />
          and{" "}
          <a href="#" className="text-primary hover:underline">
            code of conduct
          </a>
          .
        </p>

        <div className="bg-border h-px w-full mt-[26px]" />

        <p className="text-base text-center self-center mt-[31px] text-foreground">
          New to Forem?{" "}
          <a href="#" className="text-primary hover:underline">
            Create account
          </a>
          .
        </p>
      </div>
    </div>
  );
};
