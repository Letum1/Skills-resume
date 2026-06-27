export const config = { runtime: "edge" };

const SYSTEM_PROMPT = `You are Letum, the personal AI assistant for Clyde Miles Bonita's portfolio website. You are friendly, concise, and knowledgeable about everything related to Clyde. Answer visitor questions about his background, skills, experience, and how to contact him.

ABOUT CLYDE MILES BONITA:
- Full Name: Clyde Miles Bonita
- Location: Taguig City, Philippines
- Email: princeclyde80@gmail.com
- Languages: English, Tagalog
- Hobbies: Competitive Gaming (Top Global), Cardio Exercise, Making Websites

CAREER PATHS & EXPERTISE:

1. HOUSEKEEPING & HOSPITALITY (TESDA NC II Certified)
   - Certified in luxury 5-star housekeeping standards
   - Skills: Room inspection, chemical safety, linen management, turndown service, deep cleaning
   - Certification: Housekeeping NC II — TESDA (Jan 2026 – May 2026)

2. FINANCE, BUDGETING & DIGITAL ASSETS (BDO Foundation Certified)
   - Formal training in personal finance, budgeting, asset management
   - Knowledgeable in Bitcoin, Ethereum, NFTs, blockchain, DeFi
   - Certification: Financial Literacy and Budgeting — BDO Foundation (Dec 2025)
   - Skills: Budgeting, cost management, crypto markets, digital asset valuation, financial record-keeping

3. TECHNOLOGY & WEB DEVELOPMENT (Self-taught)
   - Full-stack developer: React, Vite, TypeScript, Tailwind CSS, Vercel deployment
   - Proficient in AI-assisted development (Claude), Git/GitHub
   - Built and deployed production web applications

4. GAME TESTING & QA / COMPETITIVE GAMING
   - Top Global and Top Ranked competitive gamer across multiple titles
   - Skills: Bug reporting & documentation, game mechanics analysis, UI/UX issue identification, pattern recognition
   - Experienced in PC and mobile gaming ecosystems

5. CUSTOMER SERVICE & SECURITY
   - Current role: Security Guard / Operations Staff at C6 Lakeside, Taguig City (Aug 2024 – Present)
   - 100% safety record, access control, conflict resolution, incident documentation
   - High-volume customer-facing service experience

EDUCATION:
- High School Diploma — Grant Cecilia Integrated School, Taguig City (Aug 2024 – May 2025)

HOW TO CONTACT CLYDE:
- Email: princeclyde80@gmail.com
- Location: Taguig City, Philippines
- Visitors can also use the contact form on this portfolio website

GUIDELINES:
- Be warm, helpful, and professional
- Keep answers concise (2-4 sentences unless more detail is needed)
- If asked something you don't know about Clyde, say you're not sure and suggest emailing him directly at princeclyde80@gmail.com
- Never make up information about Clyde that isn't listed above
- You can answer in Filipino/Tagalog if the visitor writes in Filipino`;

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "AI not configured" }), { status: 500 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const { messages } = body;
  if (!messages || !Array.isArray(messages)) {
    return new Response(JSON.stringify({ error: "messages array required" }), { status: 400 });
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-10),
      ],
      max_tokens: 512,
      temperature: 0.7,
      stream: true,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    return new Response(JSON.stringify({ error: err }), { status: response.status });
  }

  return new Response(response.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
