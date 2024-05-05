import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatHeadingProps {
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

export const ChatHeading = ({
    title,
    description,
    icon: Icon,
    iconColor,
    bgColor,
}: ChatHeadingProps) => {
    return (
        <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
            <div className={cn("p-2 w-fit rounded-md", bgColor)}>
                <Icon className={cn("w-10 h-10", iconColor)} />
            </div>
            <div>
                <h2 className={`text-3xl font-sora font-bold ${iconColor}`}>{title}</h2>
                <p className="text-sm font-sora text-muted-foreground">{description}</p>
            </div>
        </div>
    );
};
