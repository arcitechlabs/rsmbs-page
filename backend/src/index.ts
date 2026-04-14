import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getGeminiResponse } from "./gemini";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// ─── Health Check ─────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "SARI AI Backend", model: "gemini-flash-latest" });
});

// ─── Chat Endpoint ────────────────────────────────────────────────────────
app.post("/api/chat", async (req, res) => {
    try {
        const { message, sessionId } = req.body as { message?: string; sessionId?: string };

        if (!message || typeof message !== "string" || message.trim() === "") {
            res.status(400).json({ error: "Pesan tidak boleh kosong." });
            return;
        }

        // Buat atau gunakan session ID yang sudah ada
        const currentSessionId = sessionId || Math.random().toString(36).substring(2, 10);

        const { reply } = await getGeminiResponse(message.trim(), currentSessionId);

        res.json({ reply, sessionId: currentSessionId });
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        console.error("❌ SARI Backend Error:", errMsg);
        res.status(500).json({
            error: "Maaf, SARI sedang mengalami gangguan sistem. Silakan coba beberapa saat lagi."
        });
    }
});

app.listen(PORT, () => {
    console.log(`✅ SARI Backend API aktif di http://localhost:${PORT}`);
    console.log(`   Model: gemini-2.5-flash`);
    console.log(`   Endpoint: POST /api/chat`);
});
