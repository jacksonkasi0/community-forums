import React from "react";

// ** Utils
import { cn } from "@/lib/utils";

const SidebarFooter: React.FC = () => {
  return (
    <footer
      className={cn(
        "mt-auto space-y-4 text-sm text-muted-foreground",
        "dark:text-muted-foreground"
      )}
    >
      <div className="space-y-2">
        <div>
          <span className="text-sidebar-primary">Forem</span>
          <span> — An blogging-forward open</span>
        </div>
        <div>
          source social network where our
          <br />
          members connect and learn from one
          <br />
          another
        </div>
      </div>

      <div className="space-y-2">
        <div>
          Built on <span className="text-sidebar-primary">Forem</span> — the{" "}
          <span className="text-sidebar-primary">open source</span>
        </div>
        <div>
          software that powers <span className="text-sidebar-primary">DEV</span>{" "}
          and other inclusive communities.
        </div>
      </div>

      <div className="space-y-2">
        <div>
          Made with love and{" "}
          <span className="text-sidebar-primary">Next JS & Hono</span>.
        </div>
        <div>Forem © 2016 - {new Date().getFullYear()}.</div>
      </div>
    </footer>
  );
};

export default SidebarFooter;
