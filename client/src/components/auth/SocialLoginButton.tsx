import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SVGProps } from "react";

interface SocialLoginButtonProps {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  provider: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  icon: IconComponent,
  provider,
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <Button
      variant="outline"
      size="lg"
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full mt-3 py-3 flex items-center justify-between gap-5 transition-colors duration-200 cursor-pointer",
        "bg-card text-card-foreground border-border",
        "hover:bg-muted hover:text-muted-foreground",
        disabled && "opacity-50 cursor-not-allowed!"
      )}
    >
      <IconComponent className="size-6" />
      {/* Full text on larger screens */}
      <span className="hidden sm:block flex-grow text-center">
        Continue with {provider}
      </span>
      {/* On mobile, show only a short version (or provider name) */}
      <span className="block sm:hidden text-center">{provider}</span>
      {children && <span className="flex-shrink-0">{children}</span>}
    </Button>
  );
};
