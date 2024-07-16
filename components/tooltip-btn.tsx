import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

interface TooltipBtnProps {
    label: string;
    icon: React.ReactNode;
    isActive?: boolean;
  }

export function TooltipBtn({ label, icon, isActive = false } : TooltipBtnProps) {
    return (
        <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={ `rounded-lg ${isActive ? "bg-muted" : ""}` }
            aria-label={ label }
          >
            { icon }
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          { label }
        </TooltipContent>
      </Tooltip>
    );
}