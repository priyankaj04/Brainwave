"use client";
import {
	ArrowRight,
	Code,
	ImageIcon,
	MessageSquare,
	Music,
	VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { gradient } from '../../../../assets'
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tools = [
	{
		label: "Conversation",
		icon: MessageSquare,
		color: "text-violet-500",
		bgColor: "bg-violet-500/10",
		href: "/conversation",
	},
	{
		label: "Music Generation",
		icon: Music,
		color: "text-emerald-500",
		bgColor: "bg-emerald-500/10",
		href: "/music",
	},
	{
		label: "Image Generation",
		icon: ImageIcon,
		color: "text-pink-700",
		bgColor: "bg-pink-700/10",
		href: "/image",
	},
	{
		label: "Video Generation",
		icon: VideoIcon,
		color: "text-orange-700",
		bgColor: "bg-orange-700/10",
		href: "/video",
	},
	{
		label: "Code Generation",
		icon: Code,
		color: "text-green-700",
		bgColor: "bg-green-700/10",
		href: "/code",
	},
];

const DashboardPage = () => {
	const router = useRouter();

	return (
		<div>
			<div className="fixed w-screen h-screen lg:h-full lg:w-full opacity-60 mix-blend-color-dodge pointer-events-none">
				<div className="fixed top-1/2 left-1/2 w-screen h-screen lg:h-full lg:w-full -translate-x-3/4 -translate-y-1/2">
					<img
						className="w-full h-full"
						src={gradient.src}
						alt="Gradient"
					/>
				</div>
			</div>
			<div className="mb-8 space-y-4">
				<h2 className="text-2xl md:text-4xl font-bold text-center">
					Explore the power of AI
				</h2>
				<p className="text-muted-foreground font-light text-sm md:text-lg text-center">
					Brainwave is a platform that allows you to generate music, videos,
					and code using the power of AI.
				</p>
			</div>
			 <div className="px-4 md:px-20 lg:px-32 space-y-4">
				{tools.map((tool) => (
					<Card
						onClick={() => router.push(tool.href)}
						key={tool.href}
						className={
							"p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
						}
					>
						<div className="flex items-center gap-x-4">
							<div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
								<tool.icon className={cn("w-8 h-8", tool.color)} />
							</div>
							<div className="font-semibold">{tool.label}</div>
						</div>
						<ArrowRight className="w-5 h-5" />
					</Card>
				))}
			</div>
		</div>
	);
};

export default DashboardPage;
