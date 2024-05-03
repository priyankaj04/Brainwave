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
import { Tools } from "../../../../constants";
import Arrow from "../../../../assets/svg/Arrow";
import { Card } from "@/Components/ui/card";
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
		<div className='flex flex-col justify-center align-center'>
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
				<h2 className="text-2xl md:text-4xl font-grotesk font-bold text-center">
					Explore the power of AI
				</h2>
				<p className="text-muted-foreground font-grotesk font-light text-sm md:text-lg text-center">
					Brainwave is a platform that allows you to generate music, videos,
					and code using the power of AI.
				</p>
			</div>
			<div className="px-4 md:px-20 lg:px-32 space-y-4">
				<div className="flex flex-wrap justify-center items-center gap-10 mb-10">
					{Tools.map((item) => (
						<a
							className="block relative cursor-pointer p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
							style={{ backgroundImage: `url(${item.backgroundUrl})` }}
							key={item.id}
							href={item.href}
						>
							<div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
								<h5 className="h5 mb-5">{item.title}</h5>
								<p className="body-2 mb-6 text-n-3">{item.text}</p>
								<div className="flex items-center mt-auto">
									<div className={cn("p-2 w-fit rounded-md", item.bgColor)}>
										<item.icon className={cn("w-8 h-8", item.color)} />
									</div>
									<p className="ml-auto font-sora text-xs font-bold text-n-1 uppercase">
										Explore More
									</p>
									<Arrow />
								</div>
							</div>
							{item.light && <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />}
							<div
								className="absolute inset-0.5 bg-n-8"
								style={{ clipPath: `url(#benefits)` }}
							>
								<div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
									{item.imageUrl && (
										<img
											className="w-full h-full object-cover"
											src={item.imageUrl.src}
											alt={item.title}
											height={362}
											width={350}
										/>
									)}
								</div>
							</div>
							<svg className="block" width={0} height={0}>
								<clipPath id="benefits" clipPathUnits="objectBoundingBox">
									<path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
								</clipPath>
							</svg>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
