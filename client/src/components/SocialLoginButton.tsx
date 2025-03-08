import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SVGProps } from "react";

interface SocialLoginButtonProps {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  provider: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  icon: IconComponent,
  provider,
  onClick,
  disabled = false,
}) => {
  return (
    <Button
      variant="outline"
      size='lg'
      className={cn(
        "w-full mt-3 py-3 flex items-center justify-start gap-5",
        "bg-card text-card-foreground border-border",
        "hover:bg-muted hover:text-muted-foreground",
        "transition-colors duration-200",
        "cursor-pointer",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <IconComponent className="size-6" />
      <span className="flex-grow text-center">Continue with {provider}</span>
    </Button>
  );
};