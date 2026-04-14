// Chatbot Script for RSMBS Hospital
// SARI — Smart Assistant RSMBS Intelligence
// Mode: AI-Powered via Google Gemini Backend

// ─── Config ───────────────────────────────────────────────────────────────
// Development : 'http://localhost:5001/api/chat'
// Production  : ganti dengan URL backend yang sudah di-deploy (Railway/Render/dll)
const BACKEND_URL = 'http://localhost:5001/api/chat';

// ─── Emergency Keywords (Client-side bypass — TIDAK boleh dihapus) ────────
const emergencyKeywords = [
  'nyeri dada', 'sesak napas', 'tidak sadar', 'pingsan', 'pendarahan', 'darah banyak',
  'stroke', 'kejang', 'kecelakaan', 'keracunan', 'overdosis', 'bunuh diri',
  'mati', 'serangan jantung', 'wajah mencong', 'lumpuh', 'tidak bisa bicara',
  'tersedak', 'tenggelam', 'patah tulang parah', 'darurat'
];

// ─── Quick Actions (tombol pintasan) ─────────────────────────────────────
const quickActions = [
  { label: '📅 Cara Daftar / Buat Janji', query: 'cara daftar atau buat janji dokter' },
  { label: '🩺 Jadwal Dokter Spesialis',  query: 'daftar jadwal dokter spesialis' },
  { label: '🏥 Kamar & Rawat Inap',       query: 'info kamar rawat inap dan tarif' },
  { label: '💳 BPJS & Asuransi',          query: 'prosedur bpjs dan asuransi' },
  { label: '🚑 IGD / Darurat',            query: 'kontak igd dan darurat' },
  { label: '📍 Lokasi & Jam Buka',        query: 'lokasi dan jam operasional rsmbs' },
  { label: '💊 Layanan & Fasilitas',      query: 'layanan dan fasilitas rumah sakit' },
  { label: '📋 Menu Bantuan',             query: 'tampilkan menu bantuan lengkap' }
];

// ─── Chat State ───────────────────────────────────────────────────────────
let sessionId = null;   // Menyimpan session ID untuk memori percakapan
let unreadCount = 0;
let suppressNotification = true;

// ─── DOM References ───────────────────────────────────────────────────────
const chatbotButton   = document.getElementById('chatbot-button');
const chatWindow      = document.getElementById('chat-window');
const chatMessages    = document.getElementById('chat-messages');
const chatInput       = document.getElementById('chat-input');
const sendBtn         = document.getElementById('send-btn');
const closeBtn        = document.getElementById('close-btn');
const resetBtn        = document.getElementById('reset-btn');
const typingIndicator = document.getElementById('typing-indicator');
const suggestionPanel = document.getElementById('suggestion-panel');
const chatUnread      = document.getElementById('chat-unread');

// ─── Init ─────────────────────────────────────────────────────────────────
function initChatbot() {
  chatbotButton.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);
  resetBtn.addEventListener('click', resetConversation);
  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
  showWelcome();
  suppressNotification = false;
}

// ─── Toggle & Unread ─────────────────────────────────────────────────────
function toggleChat() {
  const isOpen = chatWindow.style.display !== 'flex';
  chatWindow.style.display = isOpen ? 'flex' : 'none';
  if (isOpen) {
    chatInput.focus();
    clearUnread();
  }
}

function updateUnreadBadge() {
  if (!chatUnread) return;
  if (unreadCount > 0) {
    chatUnread.textContent = unreadCount > 9 ? '9+' : unreadCount;
    chatUnread.classList.remove('hidden');
  } else {
    chatUnread.classList.add('hidden');
  }
}

function clearUnread()     { unreadCount = 0; updateUnreadBadge(); }
function incrementUnread() { unreadCount += 1; updateUnreadBadge(); }

// ─── Input sanitization ───────────────────────────────────────────────────
function sanitizeInput(input) {
  return input.replace(/[<>]/g, '').substring(0, 500);
}

// ─── Emergency Intercept (prioritas tertinggi, bypass AI) ─────────────────
function isEmergency(input) {
  return emergencyKeywords.some(kw => input.toLowerCase().includes(kw));
}

function getEmergencyAlert() {
  return `🚨 INI ADALAH KONDISI DARURAT — SEGERA HUBUNGI:

📞 IGD RSMBS 24 Jam: (022) 7310-0001
📞 Ambulans RSMBS: (022) 7310-0002
📞 Hotline Nasional: 119

🏥 IGD RSMBS:
   Jl. Moch. Toha No. 123, Bandung Selatan, Jawa Barat 40253

JANGAN TUNDA — segera minta bantuan atau pergi ke IGD terdekat.`;
}

// ─── Send Message & Call AI Backend ──────────────────────────────────────
async function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  const sanitized = sanitizeInput(message);
  if (sanitized.length > 500) {
    addMessage('bot', '⚠️ Pesan terlalu panjang. Mohon dipersingkat.');
    return;
  }

  addMessage('user', sanitized);
  chatInput.value = '';
  renderSuggestions([]);
  showTyping();

  // ── Prioritas 1: Emergency detection (tanpa tunggu AI) ──
  if (isEmergency(sanitized)) {
    hideTyping();
    addMessage('bot', getEmergencyAlert());
    renderSuggestions([
      { label: '📍 Lokasi RSMBS', query: 'lokasi rsmbs' },
      { label: '📋 Info IGD', query: 'kontak igd darurat' }
    ]);
    return;
  }

  // ── Prioritas 2: Kirim ke Google Gemini via Backend ──
  try {
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: sanitized, sessionId })
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    sessionId = data.sessionId; // Simpan session ID untuk memori conversation
    hideTyping();
    addMessage('bot', data.reply);
    renderSuggestions(quickActions.slice(0, 4));

  } catch (error) {
    hideTyping();
    // Jika Backend mati / error, tampilkan pesan offline
    addMessage('bot', getOfflineMessage());
    renderSuggestions([
      { label: '🚑 Hubungi IGD', query: 'kontak igd darurat' },
      { label: '📍 Info RS', query: 'lokasi rsmbs' }
    ]);
    console.error('SARI Backend Error:', error);
  }
}

function getOfflineMessage() {
  return `Mohon maaf, SARI sedang tidak dapat terhubung ke server saat ini 🙏

Untuk pertanyaan mendesak, silakan hubungi kami langsung:
📞 Telepon: (022) 7310-XXXX
📞 IGD 24 Jam: (022) 7310-0001
💬 WhatsApp: 0811-2000-XXXX
🌐 Website: www.rsmbs.co.id

Tim kami siap membantu Anda setiap saat!`;
}

// ─── Markdown Renderer (bot messages only) ────────────────────────────────
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function applyInline(text) {
  // Bold: **text**
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // URLs to clickable links
  text = text.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
  return text;
}

function formatMessage(text) {
  const escaped = escapeHtml(text);
  const lines = escaped.split('\n');
  const output = [];
  let listType = null;
  let listItems = [];

  const flushList = () => {
    if (listType && listItems.length) {
      const tag = listType;
      output.push(`<${tag}>${listItems.map(li => `<li>${li}</li>`).join('')}</${tag}>`);
      listItems = [];
      listType = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const ulMatch = line.match(/^[*\-]\s+(.+)/);
    const olMatch = line.match(/^\d+[.)]\s+(.+)/);

    if (ulMatch) {
      if (listType === 'ol') flushList();
      listType = 'ul';
      listItems.push(applyInline(ulMatch[1]));
    } else if (olMatch) {
      if (listType === 'ul') flushList();
      listType = 'ol';
      listItems.push(applyInline(olMatch[1]));
    } else {
      flushList();
      if (line === '') {
        if (output.length > 0 && output[output.length - 1] !== '<br>') {
          output.push('<br>');
        }
      } else {
        output.push(`<p>${applyInline(line)}</p>`);
      }
    }
  }
  flushList();

  return output.join('');
}

// ─── UI Rendering ─────────────────────────────────────────────────────────
function addMessage(sender, text) {
  const div = document.createElement('div');
  div.className = `message ${sender}`;

  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';

  if (sender === 'bot') {
    bubble.innerHTML = formatMessage(text);
  } else {
    bubble.textContent = text;
  }

  div.appendChild(bubble);
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  if (sender === 'bot' && !suppressNotification) {
    playNotification();
    if (chatWindow.style.display !== 'flex') incrementUnread();
  }
}

function renderSuggestions(suggestions = []) {
  if (!suggestionPanel) return;
  suggestionPanel.innerHTML = '';
  if (!suggestions || suggestions.length === 0) {
    suggestionPanel.classList.add('hidden');
    return;
  }
  suggestionPanel.classList.remove('hidden');
  suggestions.forEach(item => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'suggestion-chip';
    btn.textContent = item.label;
    btn.addEventListener('click', () => {
      chatInput.value = item.query;
      sendMessage();
    });
    suggestionPanel.appendChild(btn);
  });
}

function showTyping() {
  if (!typingIndicator) return;
  typingIndicator.style.display = 'flex';
  typingIndicator.innerHTML = `
    <span class="typing-text">SARI sedang mengetik</span>
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
  `;
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
  if (!typingIndicator) return;
  typingIndicator.style.display = 'none';
  typingIndicator.innerHTML = '';
}

function playNotification() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 520;
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) { /* silent fail */ }
}

function showWelcome() {
  const welcomeText = `Selamat datang di RSMBS — Rumah Sakit Mitra Bandung Selatan! 👋

Saya SARI, asisten virtual yang kini didukung oleh kecerdasan buatan (Google Gemini AI).
Saya siap menjawab pertanyaan Anda secara natural dan cerdas.

Ada yang bisa saya bantu hari ini? 😊`;
  addMessage('bot', welcomeText);
  renderSuggestions(quickActions);
}

function resetConversation() {
  chatMessages.innerHTML = '';
  sessionId = null; // Reset session AI juga
  showWelcome();
}

// ─── Start ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', initChatbot);
