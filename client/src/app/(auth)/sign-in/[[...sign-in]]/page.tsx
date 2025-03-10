"use client";
import React, { useState } from "react";
import Link from "next/link";

// Icons
import { Loader2 } from "lucide-react";

// Clerk Authentication
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// Components
import { SocialLoginButton } from "@/components/auth/SocialLoginButton";
import { PasswordInput } from "@/components/auth/PasswordInput";

// Icons & Assets
import { GoogleIco } from "@/assets/icons/Google";
import { GithubIco } from "@/assets/icons/Github";
import LogoImg from "@/assets/images/logo.png";

// Utilities
import { cn } from "@/lib/utils";

export default function SignInPage() {
  const [rememberMe, setRememberMe] = useState(false);
  const socialProviders = [
    { provider: "GitHub", icon: GithubIco },
    { provider: "Google", icon: GoogleIco },
  ];

  return (
    <div className="flex flex-col items-center bg-background ">
      <div className="text-sm pt-6 px-4 sm:px-6 md:px-8 pb-6 w-full max-w-lg">
        <SignIn.Root path="/sign-in" routing="path">
          <Clerk.Loading>
            {(isGlobalLoading) => (
              <div className="flex w-full flex-col items-center">
                {/* Logo Section */}
                <Link href="/" className="cursor-pointer">
                  <img
                    src={LogoImg.src}
                    alt="Forem Logo"
                    className="w-28 max-md:w-24 max-w-full h-auto self-center mb-6"
                  />
                </Link>

                <h1 className="text-2xl md:text-3xl font-bold leading-tight text-center text-foreground">
                  Join the Forem
                </h1>

                <p className="text-sm md:text-base text-center mt-4 text-muted-foreground">
                  Forem is a community of 2,893,476 amazing members
                </p>

                {/* Social Login Buttons */}
                <div className="w-full grid grid-cols-1 gap-y-4 mt-6">
                  {socialProviders.map((provider) => (
                    <Clerk.Connection
                      key={provider.provider}
                      name={
                        provider.provider.toLowerCase() as "google" | "github"
                      }
                      asChild
                    >
                      <SocialLoginButton
                        icon={provider.icon}
                        provider={provider.provider}
                        disabled={isGlobalLoading}
                      >
                        <Clerk.Loading
                          scope={
                            `provider:${provider.provider.toLowerCase()}` as
                              | "provider:google"
                              | "provider:github"
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
                  <span className="bg-background relative px-4 py-1 text-foreground text-sm">
                    OR
                  </span>
                </div>

                {/* Step 1: Email Collection */}
                <SignIn.Step name="start">
                  <div className="w-full space-y-4 md:space-y-6 mt-6">
                    <Clerk.Field name="identifier" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label className="text-base md:text-sm text-foreground">
                          Email
                        </Label>
                      </Clerk.Label>
                      <Clerk.Input type="email" required asChild>
                        <Input
                          placeholder="Enter your email"
                          className="w-full bg-card text-card-foreground border-border focus:ring-2 focus:ring-ring focus:border-primary"
                        />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>

                    <SignIn.Action submit asChild>
                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
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
                    </SignIn.Action>
                  </div>

                  {/* Terms and Signup */}
                  <div className="w-full mt-6">
                    <p className="text-xs md:text-sm leading-snug text-center text-muted-foreground">
                      By signing in, you are agreeing to our{" "}
                      <a href="#" className="text-primary hover:underline cursor-pointer">
                        privacy policy
                      </a>
                      ,{" "}
                      <a href="#" className="text-primary hover:underline cursor-pointer">
                        terms of use
                      </a>
                      , and{" "}
                      <a href="#" className="text-primary hover:underline cursor-pointer">
                        code of conduct
                      </a>
                      .
                    </p>

                    <div className="bg-border h-px w-full mt-4 md:mt-6" />

                    <p className="text-sm md:text-base text-center mt-4 md:mt-6 text-foreground">
                      New to Forem?{" "}
                      <Clerk.Link
                        navigate="sign-up"
                        className="text-primary hover:underline cursor-pointer"
                      >
                        Create account
                      </Clerk.Link>
                    </p>
                  </div>
                </SignIn.Step>

                {/* Step 2: Verification Strategies */}
                <SignIn.Step name="verifications" className="w-full">
                  {/* Password Strategy */}
                  <SignIn.Strategy name="password">
                    <div className="w-full space-y-4 md:space-y-6 mt-6">
                      <Clerk.Field name="password" className="space-y-2">
                        <Clerk.Label asChild>
                          <Label className="text-base md:text-sm text-foreground">
                            Password
                          </Label>
                        </Clerk.Label>
                        <PasswordInput id="password" validatePassword={true} />
                        <Clerk.FieldError className="block text-sm text-destructive" />
                      </Clerk.Field>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="remember-me"
                            checked={rememberMe}
                            onCheckedChange={() => setRememberMe(!rememberMe)}
                            className="cursor-pointer"
                          />
                          <Label
                            htmlFor="remember-me"
                            className="text-foreground cursor-pointer"
                          >
                            Remember me
                          </Label>
                        </div>
                        <SignIn.Action navigate="forgot-password" asChild>
                          <Button
                            variant="link"
                            size="sm"
                            className="text-primary hover:underline cursor-pointer"
                          >
                            Forgot password?
                          </Button>
                        </SignIn.Action>
                      </div>

                      <SignIn.Action submit asChild>
                        <Button
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                          disabled={isGlobalLoading}
                          size="lg"
                        >
                          <Clerk.Loading>
                            {(isLoading) =>
                              isLoading ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                "Log in"
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>
                    </div>
                  </SignIn.Strategy>

                  {/* Email Code Strategy */}
                  <SignIn.Strategy name="email_code">
                    <div className="w-full space-y-4 md:space-y-6 mt-6">
                      <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center">
                          Check your email
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground text-center w-full">
                          Enter the verification code sent to{" "}
                          <SignIn.SafeIdentifier />
                        </p>
                      </div>
                      <Clerk.Field name="code" className="space-y-2">
                        <Clerk.Label className="sr-only">
                          Verification Code
                        </Clerk.Label>
                        <Clerk.Input
                          type="otp"
                          autoSubmit
                          className="flex justify-center gap-2 has-[:disabled]:opacity-50"
                          render={({ value, status }) => (
                            <div
                              data-status={status}
                              className={cn(
                                "relative flex size-10 md:size-12 items-center justify-center border border-input rounded-md text-sm transition-all",
                                {
                                  "ring-2 ring-ring ring-offset-background":
                                    status === "cursor" ||
                                    status === "selected",
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
                      <SignIn.Action submit asChild>
                        <Button
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                          disabled={isGlobalLoading}
                          size="lg"
                        >
                          <Clerk.Loading scope="submit">
                            {(isLoading) =>
                              isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                              ) : (
                                "Verify"
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>
                      <SignIn.Action
                        resend
                        asChild
                        fallback={({ resendableAfter }) => (
                          <Button
                            variant="link"
                            size="sm"
                            disabled
                            className="w-full text-center cursor-pointer"
                          >
                            Didn't receive a code? Resend (
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
                          className="w-full text-center text-muted-foreground cursor-pointer"
                        >
                          Didn't receive a code? Resend
                        </Button>
                      </SignIn.Action>
                    </div>
                  </SignIn.Strategy>
                </SignIn.Step>

                {/* Forgot Password Step */}
                <SignIn.Step name="forgot-password">
                  <div className="w-full space-y-4 md:space-y-6 mt-6">
                    <div className="space-y-2">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground text-center">
                        Reset your password
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground text-center">
                        Enter your email to receive a password reset code
                      </p>
                    </div>
                    <Clerk.Field name="identifier" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label className="text-base md:text-sm text-foreground">
                          Email
                        </Label>
                      </Clerk.Label>
                      <Clerk.Input type="email" required asChild>
                        <Input
                          placeholder="Enter your email"
                          className="w-full bg-card text-card-foreground border-border focus:ring-2 focus:ring-ring focus:border-primary"
                        />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>

                    <SignIn.SupportedStrategy name="reset_password_email_code">
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                        disabled={isGlobalLoading}
                        size="lg"
                      >
                        <Clerk.Loading>
                          {(isLoading) =>
                            isLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              "Send Reset Code"
                            )
                          }
                        </Clerk.Loading>
                      </Button>
                    </SignIn.SupportedStrategy>

                    <SignIn.Action navigate="start" asChild>
                      <Button
                        variant="link"
                        size="sm"
                        className="w-full text-center text-muted-foreground cursor-pointer"
                      >
                        Back to sign in
                      </Button>
                    </SignIn.Action>
                  </div>
                </SignIn.Step>

                {/* Reset Password Step */}
                <SignIn.Step name="reset-password">
                  <div className="w-full space-y-4 md:space-y-6 mt-6">
                    <div className="space-y-2">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground text-center">
                        Set new password
                      </h2>
                    </div>
                    <Clerk.Field name="password" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label className="text-base md:text-sm text-foreground">
                          New Password
                        </Label>
                      </Clerk.Label>
                      <PasswordInput
                        id="new-password"
                        validatePassword={true}
                      />
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>

                    <Clerk.Field name="confirmPassword" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label className="text-base md:text-sm text-foreground">
                          Confirm Password
                        </Label>
                      </Clerk.Label>
                      <PasswordInput id="confirm-password" />
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>

                    <SignIn.Action submit asChild>
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                        disabled={isGlobalLoading}
                        size="lg"
                      >
                        <Clerk.Loading>
                          {(isLoading) =>
                            isLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              "Update Password"
                            )
                          }
                        </Clerk.Loading>
                      </Button>
                    </SignIn.Action>
                  </div>
                </SignIn.Step>
              </div>
            )}
          </Clerk.Loading>
        </SignIn.Root>
      </div>
    </div>
  );
}
