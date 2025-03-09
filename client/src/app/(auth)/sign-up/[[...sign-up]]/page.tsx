"use client";
import React from "react";

// Clerk Authentication
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";

// Assets & Icons
import { Loader2 } from "lucide-react";
import { GoogleIco } from "@/assets/icons/Google";
import { GithubIco } from "@/assets/icons/Github";
import LogoImg from "@/assets/images/logo.png";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Authentication Components
import { SocialLoginButton } from "@/components/auth/SocialLoginButton";
import { PasswordInput } from "@/components/auth/PasswordInput";

// Utilities
import { cn } from "@/lib/utils";

export default function SignUpPage() {
  const socialProviders = [
    { provider: "GitHub", icon: GithubIco },
    { provider: "Google", icon: GoogleIco },
  ];

  return (
    <div className="flex flex-col items-center text-sm pt-6 px-4 sm:px-6 md:px-8 pb-6 bg-background min-h-screen">
      <SignUp.Root path="/sign-up" routing="path">
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <div className="flex w-full max-w-md flex-col items-center">
              {/* Logo Section */}
              <img
                src={LogoImg.src}
                alt="Forem Logo"
                className="w-28 max-w-full h-auto self-center mb-6"
              />

              <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-center text-foreground">
                Join the Forem Community
              </h1>

              <p className="text-sm sm:text-base text-center mt-4 text-muted-foreground">
                Connect with 2,893,476 amazing developers worldwide
              </p>

              {/* Social Login Buttons */}
              <div className="w-full space-y-3 mt-6">
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
                          `provider:${provider.provider.toLowerCase()}` as `provider:${"google" | "github"}`
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
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center mt-6 w-full">
                <div className="bg-border h-px w-full absolute" />
                <span className="bg-background relative px-4 py-1.5 text-foreground text-sm">
                  OR
                </span>
              </div>

              {/* Registration Steps */}
              <SignUp.Step name="start">
                <div className="w-full space-y-6 mt-6">
                  <Clerk.Field name="emailAddress" className="space-y-2">
                    <Clerk.Label asChild>
                      <Label className="text-base text-foreground">Email</Label>
                    </Clerk.Label>
                    <Clerk.Input type="email" required asChild>
                      <Input
                        placeholder="Enter your email"
                        className="w-full bg-card text-card-foreground border-border focus:ring-2 focus:ring-ring focus:border-primary transition-colors duration-200"
                      />
                    </Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <Clerk.Field name="password" className="space-y-2">
                    <Clerk.Label asChild>
                      <Label className="text-base text-foreground">Password</Label>
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

                {/* Terms and Sign-in */}
                <p className="text-muted-foreground text-sm text-center mt-6">
                  By creating an account, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">
                    terms of service
                  </a>
                  ,{" "}
                  <a href="#" className="text-primary hover:underline">
                    privacy policy
                  </a>
                  , and{" "}
                  <a href="#" className="text-primary hover:underline">
                    community guidelines
                  </a>
                  .
                </p>

                <div className="bg-border h-px w-full mt-6" />

                <p className="text-sm text-center mt-6 text-foreground">
                  Already have an account?{" "}
                  <Clerk.Link navigate="sign-in" className="text-primary hover:underline">
                    Sign in
                  </Clerk.Link>
                </p>
              </SignUp.Step>

              {/* Continue Step */}
              <SignUp.Step name="continue">
                <div className="w-full space-y-6">
                  <Clerk.Field name="username" className="space-y-2">
                    <Clerk.Label asChild>
                      <Label className="text-base text-foreground">Username</Label>
                    </Clerk.Label>
                    <Clerk.Input type="text" required asChild>
                      <Input
                        placeholder="Choose a username"
                        className="w-full bg-card text-card-foreground border-border focus:ring-2 focus:ring-ring focus:border-primary transition-colors duration-200"
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
                    <Button variant="link" size="sm" className="w-full">
                      Back to previous step
                    </Button>
                  </SignUp.Action>
                </div>
              </SignUp.Step>

              {/* Verification Step */}
              <SignUp.Step name="verifications">
                <SignUp.Strategy name="email_code">
                  <div className="w-full space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center">
                        Verify your email
                      </h2>
                      <p className="text-muted-foreground text-sm text-center">
                        Enter the verification code sent to your email address
                      </p>
                    </div>

                    <Clerk.Field name="code" className="space-y-2">
                      <Clerk.Label className="sr-only">Verification Code</Clerk.Label>
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
                        <Button variant="link" size="sm" disabled className="w-full">
                          Didn’t receive a code? Resend (
                          <span className="tabular-nums">{resendableAfter}</span>)
                        </Button>
                      )}
                    >
                      <Button
                        variant="link"
                        size="sm"
                        className="w-full text-muted-foreground"
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