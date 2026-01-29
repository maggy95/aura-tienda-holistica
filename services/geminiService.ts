import { GoogleGenAI, Chat } from "@google/genai";

// We create instances on demand to ensure we pick up the latest API key if the user switches it.
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const createChatSession = (): Chat => {
  const ai = getAIClient();
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: "You are Aura, a mystical and holistic wellness guide. You speak with a calm, soothing, and slightly poetic tone. You are knowledgeable about crystals, meditation, energy healing, essential oils, and spiritual growth. Keep answers concise but warm.",
    },
  });
};

export const generateVeoVideo = async (
    imageBase64: string, 
    prompt: string, 
    aspectRatio: '16:9' | '9:16' = '16:9'
): Promise<string> => {
    const ai = getAIClient();
    
    // We use the image input as the primary driver, with an optional prompt
    let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || "Bring this image to life with subtle, magical motion.",
        image: {
            imageBytes: imageBase64,
            mimeType: 'image/png', // Assuming PNG for simplicity, usually fine for Veo with base64
        },
        config: {
            numberOfVideos: 1,
            resolution: '720p',
            aspectRatio: aspectRatio
        }
    });

    // Poll for completion
    while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Check every 5s
        operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    if (operation.error) {
        throw new Error(operation.error.message || "Video generation failed");
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!videoUri) {
        throw new Error("No video URI returned");
    }

    // Return the URL with the API key appended for playback
    return `${videoUri}&key=${process.env.API_KEY}`;
};
