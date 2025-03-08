"use client";
import React, { useState } from "react";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { SocialLoginButton } from "@/components/SocialLoginButton";
import { PasswordInput } from "@/components/PasswordInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { GoogleIco } from "@/assets/icons/Google";
import { GithubIco } from "@/assets/icons/Github";
import LogoImg from "@/assets/images/logo.png";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignInPage() {
  const [rememberMe, setRememberMe] = useState(false);
  const socialProviders = [
    { provider: "GitHub", icon: GithubIco },
    { provider: "Google", icon: GoogleIco },
  ];

  return (
    <div className="flex flex-col items-center text-sm pt-10 pb-[94px] px-20 max-md:px-5 bg-background">
      <SignIn.Root path="/sign-in" routing="path">
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
                Join the Forem
              </h1>

              <p className="text-base text-center self-center mt-[17px] text-muted-foreground">
                Forem is a community of 2,893,476 amazing members
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
                      scope={`provider:${provider.provider.toLowerCase()}` as "provider:google" | "provider:github"}
                    >
                      {(isLoading) =>
                        isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null
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

              {/* Step 1: Email Collection */}
              <SignIn.Step name="start">
                <div className="space-y-6">
                  <Clerk.Field name="identifier" className="space-y-2">
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

                  <SignIn.Action submit asChild>
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isGlobalLoading}
                    >
                      <Clerk.Loading>
                        {(isLoading) =>
                          isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Continue"
                        }
                      </Clerk.Loading>
                    </Button>
                  </SignIn.Action>
                </div>

                {/* Terms and Signup */}
                <p className="text-muted-foreground leading-[21px] text-center self-center mt-8">
                  By signing in, you are agreeing to our{" "}
                  <a href="#" className="text-primary hover:underline">privacy policy</a>,{" "}
                  <a href="#" className="text-primary hover:underline">terms of use</a>
                  <br />and{" "}
                  <a href="#" className="text-primary hover:underline">code of conduct</a>.
                </p>

                <div className="bg-border h-px w-full mt-[26px]" />

                <p className="text-base text-center self-center mt-[31px] text-foreground">
                  New to Forem?{" "}
                  <Clerk.Link 
                    navigate="sign-up"
                    className="text-primary hover:underline"
                  >
                    Create account
                  </Clerk.Link>
                </p>
              </SignIn.Step>

              {/* Step 2: Verification Strategies */}
              <SignIn.Step name="verifications">
                {/* Password Strategy */}
                <SignIn.Strategy name="password">
                  <div className="space-y-6">
                    <Clerk.Field name="password" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label className="text-base text-foreground">Password</Label>
                      </Clerk.Label>
                      <PasswordInput id="password" validatePassword={true} />
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>

                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="remember-me"
                          checked={rememberMe}
                          onCheckedChange={() => setRememberMe(!rememberMe)}
                          className="rounded-md"
                        />
                        <Label className="text-foreground cursor-pointer">Remember me</Label>
                      </div>
                      <SignIn.Action navigate="forgot-password" asChild>
                        <Button variant="link" size="sm" className="text-primary hover:underline">
                          Forgot password?
                        </Button>
                      </SignIn.Action>
                    </div>

                    <SignIn.Action submit asChild>
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={isGlobalLoading}
                      >
                        <Clerk.Loading>
                          {(isLoading) =>
                            isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Log in"
                          }
                        </Clerk.Loading>
                      </Button>
                    </SignIn.Action>
                  </div>
                </SignIn.Strategy>

                {/* Email Code Strategy */}
                <SignIn.Strategy name="email_code">
                  <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-foreground">
                      Check your email
                    </h2>
                    <p className="text-muted-foreground">
                      Enter the verification code sent to <SignIn.SafeIdentifier />
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
                    <SignIn.Action submit asChild>
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={isGlobalLoading}
                      >
                        <Clerk.Loading>
                          {(isLoading) =>
                            isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Verify"
                          }
                        </Clerk.Loading>
                      </Button>
                    </SignIn.Action>
                    <SignIn.Action
                      resend
                      asChild
                      fallback={({ resendableAfter }) => (
                        <Button variant="link" size="sm" disabled>
                          Didn’t receive a code? Resend (
                          <span className="tabular-nums">{resendableAfter}</span>)
                        </Button>
                      )}
                    >
                      <Button variant="link" size="sm" className="text-muted-foreground cursor-pointer">
                        Didn’t receive a code? Resend
                      </Button>
                    </SignIn.Action>
                  </div>
                </SignIn.Strategy>
              </SignIn.Step>

              {/* Forgot Password Step */}
              <SignIn.Step name="forgot-password">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    Reset your password
                  </h2>
                  <p className="text-muted-foreground">
                    Enter your email to receive a password reset code
                  </p>
                  <Clerk.Field name="identifier" className="space-y-2">
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
                  
                  <SignIn.SupportedStrategy name="reset_password_email_code">
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isGlobalLoading}
                    >
                      <Clerk.Loading>
                        {(isLoading) =>
                          isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send Reset Code"
                        }
                      </Clerk.Loading>
                    </Button>
                  </SignIn.SupportedStrategy>
                  
                  <SignIn.Action navigate="start" asChild>
                    <Button variant="link" size="sm" className="text-muted-foreground">
                      Back to sign in
                    </Button>
                  </SignIn.Action>
                </div>
              </SignIn.Step>

              {/* Reset Password Step */}
              <SignIn.Step name="reset-password">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    Set new password
                  </h2>
                  
                  <Clerk.Field name="password" className="space-y-2">
                    <Clerk.Label asChild>
                      <Label className="text-base text-foreground">New Password</Label>
                    </Clerk.Label>
                    <PasswordInput id="new-password" validatePassword={true} />
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <Clerk.Field name="confirmPassword" className="space-y-2">
                    <Clerk.Label asChild>
                      <Label className="text-base text-foreground">Confirm Password</Label>
                    </Clerk.Label>
                    <PasswordInput id="confirm-password" />
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>

                  <SignIn.Action submit asChild>
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isGlobalLoading}
                    >
                      <Clerk.Loading>
                        {(isLoading) =>
                          isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Update Password"
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
  );
}