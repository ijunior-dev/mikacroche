-- ═══════════════════════════════════════════════════════════
--  SETUP SUPABASE — MIKA CROCHê LANDING PAGE
--  Execute este script inteiro no SQL Editor do Supabase.
-- ═══════════════════════════════════════════════════════════


-- ─── 1. Tabela de leads (formulário + WhatsApp) ──────────
CREATE TABLE IF NOT EXISTS public.leads (
  id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  nome         TEXT        NOT NULL,
  whatsapp     TEXT        NOT NULL,
  tipo_movel   TEXT        NOT NULL,
  mensagem     TEXT,
  origem       TEXT        DEFAULT 'formulario',
  utm_source   TEXT,
  utm_medium   TEXT,
  utm_campaign TEXT,
  page_url     TEXT,
  user_agent   TEXT
);

-- ─── 2. Tabela de leads do chatbot ───────────────────────
CREATE TABLE IF NOT EXISTS public.chatbot_leads (
  id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  session_id   TEXT        UNIQUE,
  nome         TEXT,
  tipo_movel   TEXT,
  etapa_final  TEXT,
  converteu    BOOLEAN     DEFAULT FALSE
);

-- ─── 3. Row Level Security ────────────────────────────────
ALTER TABLE public.leads          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chatbot_leads  ENABLE ROW LEVEL SECURITY;

-- Anônimo pode INSERT (formulário público), mas NÃO pode SELECT
CREATE POLICY "anon_insert_leads"
  ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "anon_insert_chatbot"
  ON public.chatbot_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "anon_upsert_chatbot"
  ON public.chatbot_leads
  FOR UPDATE
  TO anon
  USING (true);

-- Service role pode tudo (você acessando pelo dashboard)
CREATE POLICY "service_all_leads"
  ON public.leads
  FOR ALL
  TO service_role
  USING (true);

CREATE POLICY "service_all_chatbot"
  ON public.chatbot_leads
  FOR ALL
  TO service_role
  USING (true);

-- ─── 4. Índices para consulta rápida ─────────────────────
CREATE INDEX IF NOT EXISTS idx_leads_created_at    ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_origem        ON public.leads (origem);
CREATE INDEX IF NOT EXISTS idx_chatbot_session     ON public.chatbot_leads (session_id);

-- ─── 5. Comentários nas tabelas ──────────────────────────
COMMENT ON TABLE public.leads          IS 'Leads capturados via formulário ou chatbot';
COMMENT ON TABLE public.chatbot_leads  IS 'Sessões do chatbot guiado';
