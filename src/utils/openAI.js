import OpenAI from "openai";
import { GPT_SECRET_KEY } from "./constants";

const openAI = new OpenAI({
  apiKey: GPT_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});

export default openAI;
