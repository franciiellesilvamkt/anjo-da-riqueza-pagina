import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI Client lazily/safely
  const getGenAI = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    return new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  };

  // API Route: Reprogram Limiting Financial Belief
  app.post("/api/gemini/reprogram-belief", async (req, res) => {
    try {
      const { belief } = req.body;
      if (!belief || typeof belief !== "string") {
        return res.status(400).json({ error: "Por favor, forneça uma crença válida para reprogramar." });
      }

      const ai = getGenAI();

      const systemPrompt = `Você é o Anjo da Riqueza, um guia espiritual e mestre em inteligência de abundância e reprogramação mental subconsciente para libertação financeira.
O usuário vai compartilhar um medo, trauma ou crença limitante sobre dinheiro (exemplo: "Tenho medo de faltar dinheiro", "Acho que dinheiro é difícil de conseguir", "Sinto culpa quando gasto").

Sua missão é:
1. Analisar com empatia a causa raiz oculta dessa crença.
2. Criar 3 Afirmações Poderosas personalizadas e de alto impacto (Manhã, Dia e Noite) no tom das "Afirmações do Anjo da Riqueza" para substituir essa trava.
3. Sugerir 1 Ação Concreta para o usuário executar dentro de 24 horas para desbloquear essa energia.
4. Enviar uma breve mensagem inspiradora e amorosa do Anjo da Riqueza em português fluente, acolhedor e seguro.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Analise e reconfigure a seguinte crença limitante do usuário: "${belief}"`,
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              rootCause: {
                type: Type.STRING,
                description: "Breve explicação amorosa de onde essa trava costuma se originar."
              },
              affirmationMorning: {
                type: Type.STRING,
                description: "Afirmação matinal para ativar a abundância ao acordar."
              },
              affirmationDay: {
                type: Type.STRING,
                description: "Afirmação do dia para focar nas oportunidades de ganhos."
              },
              affirmationNight: {
                type: Type.STRING,
                description: "Afirmação noturna para o subconsciente absorver no sono."
              },
              action24h: {
                type: Type.STRING,
                description: "Ação prática simples de até 24 horas para destravar a prosperidade."
              },
              angelMessage: {
                type: Type.STRING,
                description: "Mensagem pessoal e abençoada do Anjo da Riqueza."
              }
            },
            required: ["rootCause", "affirmationMorning", "affirmationDay", "affirmationNight", "action24h", "angelMessage"]
          }
        }
      });

      const jsonText = response.text || "{}";
      const parsedData = JSON.parse(jsonText);

      return res.json({
        success: true,
        data: {
          originalBelief: belief,
          rootCause: parsedData.rootCause,
          affirmations: {
            morning: parsedData.affirmationMorning,
            day: parsedData.affirmationDay,
            night: parsedData.affirmationNight
          },
          action24h: parsedData.action24h,
          angelMessage: parsedData.angelMessage
        }
      });

    } catch (error: any) {
      console.error("Erro na API Reprogram Belief:", error);
      return res.status(500).json({
        error: "Não foi possível conectar com a inteligência do Anjo da Riqueza no momento.",
        details: error?.message || "Erro interno"
      });
    }
  });

  // API Route: Get Daily Angel Guidance
  app.post("/api/gemini/daily-guidance", async (req, res) => {
    try {
      const { dayNumber, mood } = req.body;
      const ai = getGenAI();

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `O usuário está no Dia ${dayNumber || 1} da Jornada de 21 Dias do Anjo da Riqueza. O estado atual dele é: "${mood || 'Buscando paz e foco financeiro'}". Forneça uma frase curta de luz e 1 orientação abençoada para o dia dele.`,
        config: {
          systemInstruction: "Você é o Anjo da Riqueza. Responda em português, tom encorajador, sereno e luminoso.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              dailyMotto: { type: Type.STRING },
              angelGuidance: { type: Type.STRING }
            },
            required: ["dailyMotto", "angelGuidance"]
          }
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      return res.json({ success: true, data: parsed });
    } catch (err: any) {
      return res.status(500).json({ error: "Erro ao buscar orientação diária." });
    }
  });

  // API Route: Generate Personal Decree
  app.post("/api/gemini/generate-decree", async (req, res) => {
    try {
      const { name, goal, focusArea } = req.body;
      if (!name || typeof name !== "string") {
        return res.status(400).json({ error: "Por favor, forneça seu nome para gerar o decreto." });
      }

      let parsedData;
      try {
        const ai = getGenAI();
        const systemPrompt = `Você é o Anjo da Riqueza, o guardião e canal celestial da inteligência de abundância e prosperidade financeira.
Sua missão é compor um Decreto Sagrado de Reprogramação Subconsciente e Ativação de Abundância altamente personalizado para o usuário.

O decreto deve ser solene, profundo, emocionante, motivador e transmitir segurança espiritual e mental. Deve conter o nome da pessoa e ser focado nos objetivos fornecidos.`;

        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: `Crie um Decreto Sagrado Personalizado para a pessoa com as seguintes informações:
Nome: "${name}"
Meta Financeira Desejada: "${goal || 'Manifestar R$ 1.000 por semana e paz financeira'}"
Área de Foco Principal: "${focusArea || 'Novas Oportunidades e Destravar Prosperidade'}"`,
          config: {
            systemInstruction: systemPrompt,
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                title: {
                  type: Type.STRING,
                  description: "Título solene do decreto personalizado (ex: Decreto Sagrado da Abundância Inabalável para [Nome])"
                },
                decreeText: {
                  type: Type.STRING,
                  description: "O texto completo e contínuo do decreto de 3 parágrafos em primeira pessoa com a voz do usuário e bênçãos do Anjo da Riqueza."
                },
                keyAffirmation: {
                  type: Type.STRING,
                  description: "Frase síntese de poder em caixa alta (ex: EU SOU A MANIFESTAÇÃO VIVA DA ABUNDÂNCIA DE R$ 1.000 POR SEMANA)."
                },
                angelBlessing: {
                  type: Type.STRING,
                  description: "Uma bênção amorosa final e selo divino do Anjo da Riqueza para [Nome]."
                }
              },
              required: ["title", "decreeText", "keyAffirmation", "angelBlessing"]
            }
          }
        });

        const jsonText = response.text || "{}";
        parsedData = JSON.parse(jsonText);
      } catch (aiErr) {
        console.warn("Gemini API not available, using fallback template for decree:", aiErr);
        parsedData = {
          title: `Decreto Sagrado de Prosperidade Celestial de ${name}`,
          decreeText: `Eu, ${name}, sob a regência de paz e sabedoria do Anjo da Riqueza, declaro e decreto neste momento o rompimento definitivo de todas as velhas amarras de escassez, medo e ansiedade financeira.\n\nA partir de hoje, minha mente subconsciente está completamente aberta e sintonizada para atrair e manter ${goal || 'R$ 1.000 por semana'}. Todas as portas de oportunidades honestas, fontes de renda e bênçãos materiais se abrem com facilidade e harmonia na minha vida.\n\nSinto o alívio, a paz e a certeza no meu coração. O dinheiro é uma energia de bênção e utilidade na minha vida, permitindo que eu cuide daqueles que amo com conforto e alegria. Está decretado, selado e manifestado!`,
          keyAffirmation: `EU, ${name.toUpperCase()}, SOU UM ÍMÃ CONSTANTE PARA A PROSPERIDADE DE ${goal ? goal.toUpperCase() : 'R$ 1.000 POR SEMANA'}!`,
          angelBlessing: `Que as asas da prosperidade cubram seus passos, ${name}. O seu caminho de abundância começa agora.`
        };
      }

      return res.json({
        success: true,
        data: parsedData
      });
    } catch (error: any) {
      console.error("Erro no Gerador de Decreto:", error);
      return res.status(500).json({
        error: "Não foi possível gerar o decreto no momento.",
        details: error?.message || "Erro interno"
      });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "Anjo da Riqueza" });
  });

  // Vite development middleware or production static serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
