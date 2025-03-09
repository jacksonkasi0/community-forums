"use client";

import React from "react";

// ** Clerk Authentication
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";

// ** Assets &  Icons
import { Loader2 } from "lucide-react";
import { GoogleIco } from "@/assets/icons/Google";
import { GithubIco } from "@/assets/icons/Github";
import LogoImg from "@/assets/images/logo.png";

// ** UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// ** Authentication Components
import { SocialLoginButton } from "@/components/auth/SocialLoginButton";
import { PasswordInput } from "@/components/auth/PasswordInput";

// ** Utilities
import { cn } from "@/lib/utils";

export default function SignUpPage() {
  const socialProviders = [
    { provider: "GitHub", icon: GithubIco },
    { provider: "Google", icon: GoogleIco },
  ];

  return (
    <div className="flex flex-col items-center text-sm pt-10 pb-[94px] px-20 max-md:px-5 bg-background">
      <SignUp.Root path="/sign-up" routing="path">
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <div className="flex w-[544px] max-w-full flex-col items-stretch">
              {/* Logo Section */}
              <img
                src={LogoImg.src}
                alt="Forem Logo"
                className="aspect-[2.38] w-[114px] self-center max-w-full"
              />

              <h1 className="text-3xl font-bold leading-none text-center self-center mt-8 text-foreground">
                Join the Forem Community
              </h1>

              <p className="text-base text-center self-center mt-[17px] text-muted-foreground">
                Connect with 2,893,476 amazing developers worldwide
              </p>

              {/* Social Login Buttons */}
              {socialProviders.map((provider) => (
                <Clerk.Connection
                  key={provider.provider}
                  name={provider.provider.toLowerCase() as "google" | "github"}
                  asChild
                >
                  <SocialLoginButton
                    icon={provider.icon}
                    provider={provider.provider}
                    disabled={isGlobalLoading}
                  >
                    <Clerk.Loading
                      scope={
                        `provider:${provider.provider.toLowerCase()}` as `provider:${
                          | "google"
                          | "github"}`
                      }
                    >
                      {(isLoading) =>
                        isLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : null
                      }
                    </Clerk.Loading>
                  </SocialLoginButton>
                </Clerk.Connection>
              ))}

              {/* Divider */}
              <div className="relative flex items-center justify-center mt-[22px]">
                <div className="bg-border h-px w-full absolute" />
                <span className="bg-card relative px-[18px] py-1.5 text-foreground">
                  OR
                </span>
              </div>

              {/* Registration Steps */}
              <SignUp.Step name="start">
                <div className="space-y-6">
                  <Clerk.Field name="emailAddress" className="space-y-2">
                    <Clerk.Label asChild>
                      <Label className="text-base text-foreground">Email</Label>
                    </Clerk.Label>
                    <Clerk.Input type="email" required asChild>
                      <Input
                        placeholder="Enter your email"
                        className="bg-card text-card-foreground border-border focus:ring-2 focus:ring-ring focus:border-primary transition-colors duration-200"
                      />
                    </Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <Clerk.Field name="password" className="space-y-2">
                    <Clerk.Label asChild>
                      <Label className="text-base text-foreground">
                        Password
                      </Label>
                    </Clerk.Label>
                    <PasswordInput id="password" validatePassword={true} />
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <SignUp.Captcha className="empty:hidden" />

                  <SignUp.Action submit asChild>
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isGlobalLoading}
                      size="lg"
                    >
                      <Clerk.Loading>
                        {(isLoading) =>
                          isLoading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            "Continue"
                          )
                        }
                      </Clerk.Loading>
                    </Button>
                  </SignUp.Action>
                </div>

                {/* Terms and Signin */}
                <p className="text-muted-foreground leading-[21px] text-center self-center mt-8">
                  By creating an account, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">
                    terms of service
                  </a>
                  ,{" "}
                  <a href="#" className="text-primary hover:underline">
                    privacy policy
                  </a>
                  , <br />
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    community guidelines
                  </a>
                  .
                </p>

                <div className="bg-border h-px w-full mt-[26px]" />

                <p className="text-base text-center self-center mt-[31px] text-foreground">
                  Already have an account?{" "}
                  <Clerk.Link
                    navigate="sign-in"
                    className="text-primary hover:underline"
                  >
                    Sign in
                  </Clerk.Link>
                </p>
              </SignUp.Step>

              {/* Continue Step */}
              <SignUp.Step name="continue">
                <div className="space-y-6">
                  <Clerk.Field name="username" className="space-y-2">
                    <Clerk.Label asChild>
                      <Label className="text-base text-foreground">
                        Username
                      </Label>
                    </Clerk.Label>
                    <Clerk.Input type="text" required asChild>
                      <Input
                        placeholder="Choose a username"
                        className="bg-card text-card-foreground border-border focus:ring-2 focus:ring-ring focus:border-primary transition-colors duration-200"
                      />
                    </Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <SignUp.Action submit asChild>
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isGlobalLoading}
                      size="lg"
                    >
                      <Clerk.Loading>
                        {(isLoading) =>
                          isLoading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            "Continue"
                          )
                        }
                      </Clerk.Loading>
                    </Button>
                  </SignUp.Action>

                  <SignUp.Action navigate="start" asChild>
                    <Button variant="link" size="sm">
                      Back to previous step
                    </Button>
                  </SignUp.Action>
                </div>
              </SignUp.Step>

              {/* Verification Step */}
              <SignUp.Step name="verifications">
                <SignUp.Strategy name="email_code">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-foreground">
                        Verify your email
                      </h2>
                      <p className="text-muted-foreground">
                        Enter the verification code sent to your email address
                      </p>
                    </div>

                    <Clerk.Field name="code" className="space-y-2">
                      <Clerk.Label className="sr-only">
                        Verification Code
                      </Clerk.Label>
                      <Clerk.Input
                        type="otp"
                        autoSubmit
                        className="flex justify-center has-[:disabled]:opacity-50"
                        render={({ value, status }) => (
                          <div
                            data-status={status}
                            className={cn(
                              "relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
                              {
                                "z-10 ring-2 ring-ring ring-offset-background":
                                  status === "cursor" || status === "selected",
                              }
                            )}
                          >
                            {value}
                            {status === "cursor" && (
                              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                              </div>
                            )}
                          </div>
                        )}
                      />
                      <Clerk.FieldError className="block text-sm text-destructive text-center" />
                    </Clerk.Field>

                    {/* Add Submit Button */}
                    <SignUp.Action submit asChild>
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={isGlobalLoading}
                        size="lg"
                      >
                        <Clerk.Loading>
                          {(isLoading) =>
                            isLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              "Verify Code"
                            )
                          }
                        </Clerk.Loading>
                      </Button>
                    </SignUp.Action>

                    <SignUp.Action
                      resend
                      asChild
                      fallback={({ resendableAfter }) => (
                        <Button variant="link" size="sm" disabled>
                          Didn’t receive a code? Resend (
                          <span className="tabular-nums">
                            {resendableAfter}
                          </span>
                          )
                        </Button>
                      )}
                    >
                      <Button
                        variant="link"
                        size="sm"
                        className="text-muted-foreground cursor-pointer"
                      >
                        Didn’t receive a code? Resend
                      </Button>
                    </SignUp.Action>
                  </div>
                </SignUp.Strategy>
              </SignUp.Step>
            </div>
          )}
        </Clerk.Loading>
      </SignUp.Root>
    </div>
  );
}
