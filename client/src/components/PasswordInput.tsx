import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as Clerk from "@clerk/elements/common";

interface PasswordInputProps {
  id: string;
  validatePassword?: boolean; // Optional prop to enable Clerk's password validation
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  validatePassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Clerk.Input
        type={showPassword ? "text" : "password"}
        validatePassword={validatePassword}
        asChild
      >
        <Input
          id={id}
          className={cn(
            "pr-10", // Space for the toggle button
            "bg-card text-card-foreground border-border",
            "focus:ring-2 focus:ring-ring focus:border-primary",
            "transition-colors duration-200"
          )}
        />
      </Clerk.Input>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={togglePasswordVisibility}
        className={cn(
          "absolute right-1 top-1/2 -translate-y-1/2",
          "text-muted-foreground hover:text-foreground",
          "h-8 w-8"
        )}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </Button>
    </div>
  );
};