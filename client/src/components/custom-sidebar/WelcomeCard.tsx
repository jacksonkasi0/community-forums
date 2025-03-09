"use client";

import React from "react";

// ** UI Components
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ** Auth Components
import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";

const WelcomeCard: React.FC = () => {
  return (
    <Card className="border-border bg-card text-card-foreground rounded-md">
      <CardContent>
        <h2 className="text-xl font-bold leading-tight text-foreground">
          Forem is a<br />
          community of<br />
          2,893,476 amazing<br />
          members
        </h2>
        <p className="mt-6 leading-6 text-muted-foreground">
          We're a blogging-forward<br />
          open source social network<br />
          where we learn from one<br />
          another
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-4">
        <SignedOut>
          <SignUpButton mode="redirect">
            <Button
              variant="outline"
              className="w-full text-primary border-primary hover:bg-primary/5 cursor-pointer"
            >
              Create account
            </Button>
          </SignUpButton>
          <SignInButton mode="redirect">
            <Button
              variant="ghost"
              className="w-full text-muted-foreground hover:underline hover:bg-transparent cursor-pointer"
            >
              Log in
            </Button>
          </SignInButton>
        </SignedOut>
      </CardFooter>
    </Card>
  );
};

export default WelcomeCard;
