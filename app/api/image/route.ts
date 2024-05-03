import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";


const openAi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages , amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openAi) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Missing prompt", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Missing amount", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Missing resolution", { status: 400 });
    }

    const isAllowed = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!isAllowed && !isPro) {
      return new NextResponse("API Limit Exceeded", { status: 403 });
    }

    const response = await openAi.images.generate({
      model: "dall-e-3", prompt: messages, n: amount, size: resolution 
    });

    if (!isPro) {
      await increaseApiLimit();
    }

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
