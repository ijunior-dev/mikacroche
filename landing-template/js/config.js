// ═══════════════════════════════════════════════════
//  CONFIGURAÇÕES DO SITE — gerado pelo template
//  Edite aqui ou deixe o Claude preencher via CONFIG.md
// ═══════════════════════════════════════════════════
const SITE_CONFIG = {
  company: {
    name:    '{{COMPANY_NAME}}',
    tagline: '{{COMPANY_TAGLINE}}',
    niche:   '{{NICHE}}',
    city:    '{{CITY}}',
    state:   '{{STATE}}',
    cnpj:    '{{CNPJ}}',
    address: '{{ADDRESS}}',
    email:   '{{EMAIL}}',
    phone:   '{{PHONE_DISPLAY}}',
  },

  whatsapp: {
    number:         '{{WHATSAPP_NUMBER}}',
    defaultMessage: '{{WHATSAPP_DEFAULT_MSG}}',
  },

  social: {
    instagram: '{{INSTAGRAM_URL}}',
    facebook:  '{{FACEBOOK_URL}}',
    youtube:   '{{YOUTUBE_URL}}',
  },

  // ─── Supabase ───────────────────────────────────────
  supabase: {
    url:     '{{SUPABASE_URL}}',
    anonKey: '{{SUPABASE_ANON_KEY}}',
  },

  // ─── Chatbot ────────────────────────────────────────
  chatbot: {
    provider:  'builtin',       // 'builtin' | 'typebot'
    typebotId: '{{TYPEBOT_ID}}',
  },

  // ─── Analytics ──────────────────────────────────────
  gtm: { id: '{{GTM_ID}}' },
};
