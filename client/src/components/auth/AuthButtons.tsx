"use client";

import React from "react";

// ** Clerk Authentication
import { 
  SignInButton, 
  SignUpButton, 
  SignedIn, 
  SignedOut,
  UserButton 
} from "@clerk/nextjs";

// ** UI Components
import { Button } from "@/components/ui/button";

// ** Icons
import { Bell } from "lucide-react";

const AuthButtons: React.FC = () => {
  return (
    <div className="flex items-center gap-2 ml-auto">
      <SignedOut>
        <SignInButton mode="redirect">
          <Button
            variant="ghost"
            className="text-foreground hover:bg-muted hidden md:block"
          >
            Log in
          </Button>
        </SignInButton>
        <SignUpButton mode="redirect">
          <Button
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Create account
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <Button variant="ghost" size="icon" aria-label="Notifications" className="cursor-pointer">
          <Bell className="h-6 w-6 text-foreground" />
        </Button>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "h-10 w-10",
            },
          }}
        />
      </SignedIn>
    </div>
  );
};

export default AuthButtons;