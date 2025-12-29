# 🚀 Persian AI Gateway (PAG) - Next-Gen AI Platform for Iran

## 🌟 Project Overview
This project is a localized, SaaS-ready AI platform designed specifically for the Iranian market. Built on top of the robust **Chatbot UI** architecture, it aims to democratize access to state-of-the-art Large Language Models (LLMs) like GPT-4, Claude 3.5, and Gemini Pro for Persian-speaking users.

Unlike traditional subscription models, PAG introduces a flexible **Pay-As-You-Go (Token-Based)** billing system, solving the currency exchange and high subscription cost barriers for Iranian users.

## 🎯 Key Objectives & Features
- **Localized Experience:** Fully RTL (Right-to-Left) interface with Persian translations and Vazirmatn font integration.
- **Smart Billing System:** A custom credit/wallet system integrated with Iranian payment gateways (ZarinPal/Vandar). Users pay in IRR, and credits are deducted based on token consumption.
- **Multi-Model Support:** Seamless switching between OpenAI, Anthropic, and Google models.
- **Niche Focus:** Specialized system prompts (Agents) for Academic Research, Content Creation, and Coding assistance.
- **Privacy First:** User chat history is securely stored in our own Supabase instance, ensuring data sovereignty.

## 🛠️ Tech Stack
- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS
- **Backend:** Next.js Server Actions, Edge Functions
- **Database:** Supabase (PostgreSQL) for user data, chat history, and credit ledger.
- **Authentication:** Supabase Auth
- **Deployment:** Docker / VPS (Hetzner)

## 🗺️ Roadmap
### Phase 1: Setup & Localization (Current)
- [ ] Clone & Setup Chatbot UI base.
- [ ] Implement Vazirmatn Font & RTL layout.
- [ ] Translate core UI components to Persian.

### Phase 2: Backend & Billing
- [ ] Design `user_credits` schema in Supabase.
- [ ] Implement Token Counting logic in API routes.
- [ ] Integrate ZarinPal Payment Gateway.

### Phase 3: Launch & Optimization
- [ ] Deploy to VPS.
- [ ] Configure Nginx & Domain.
- [ ] Beta launch for initial users.

## 💡 Business Logic (Internal Note)
The core revenue model relies on the margin between API costs (USD) and Token sales (IRR).
Formula: `User_Cost = (Input_Tokens + Output_Tokens) * Markup_Multiplier`

---
*Developed with ❤️ for the Persian AI Community.*
