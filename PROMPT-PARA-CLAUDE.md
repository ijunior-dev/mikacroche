# PROMPT — LANDING PAGE TEMPLATE (One-Page Lead Generation)
> Cole este arquivo no Claude Code ou Claude Web, seguido do seu CONFIG.md preenchido.

---

## CONTEXTO

Você é um desenvolvedor front-end e product designer sênior.

Recebi um **template de landing page one-page** para geração de leads que já foi validado em produção. Ele é responsivo, mobile-first, tem chatbot guiado, formulário integrado ao Supabase, botão WhatsApp fixo e galeria com lightbox.

Preciso que você **customize esse template** para um novo projeto, usando os dados do CONFIG.md que vou fornecer logo abaixo.

---

## ARQUIVOS DO TEMPLATE

O projeto contém estes arquivos (você pode ler cada um pelo path):

```
landing-template/
├── CONFIG.md              ← Briefing do projeto (leia este primeiro)
├── index.html             ← Página principal ({{PLACEHOLDERS}} para substituir)
├── js/
│   ├── config.js          ← Configurações centrais ({{PLACEHOLDERS}})
│   └── main.js            ← JavaScript (genérico, não editar)
├── css/
│   └── custom.css         ← CSS base (editar apenas se mudar cores)
└── supabase/
    └── setup.sql          ← SQL do banco (genérico, não editar)
```

---

## SUA TAREFA

1. **Leia o CONFIG.md** preenchido que vou fornecer abaixo.
2. **Customize os arquivos** `index.html` e `js/config.js` substituindo todos os `{{PLACEHOLDERS}}` pelos valores do CONFIG.
3. **Ajuste as cores** no bloco `tailwind.config` dentro do `index.html` usando as cores do CONFIG.
4. **Adapte o conteúdo** para o nicho específico (tom de voz, vocabulário do setor, ícones Font Awesome adequados).
5. **Gere os arquivos completos** prontos para abrir no navegador.

---

## LISTA DE PLACEHOLDERS

Substitua cada token abaixo com o valor correspondente do CONFIG:

### Empresa e contato
| Placeholder | Mapeamento no CONFIG |
|---|---|
| `{{COMPANY_NAME}}` | 1. Nome da empresa |
| `{{COMPANY_TAGLINE}}` | 1. Slogan/Tagline |
| `{{NICHE}}` | 1. Nicho/Setor |
| `{{NICHE_SHORT}}` | 1. Palavra curta do nicho (ex: "móveis", "estética") |
| `{{CITY}}` | 1. Cidade |
| `{{STATE}}` | 1. Estado (UF) |
| `{{CNPJ}}` | 1. CNPJ |
| `{{ADDRESS}}` | 1. Endereço completo |
| `{{EMAIL}}` | 1. Email de contato |
| `{{PHONE_DISPLAY}}` | 1. Telefone exibido |
| `{{WHATSAPP_NUMBER}}` | 1. WhatsApp para wa.me |
| `{{WHATSAPP_DEFAULT_MSG}}` | Mensagem padrão de contato |

### Redes sociais
| Placeholder | Mapeamento |
|---|---|
| `{{INSTAGRAM_URL}}` | 2. Instagram URL |
| `{{FACEBOOK_URL}}` | 2. Facebook URL |
| `{{YOUTUBE_URL}}` | 2. YouTube URL |

### Visual
| Placeholder | Mapeamento |
|---|---|
| `{{PRIMARY_COLOR}}` | 3. Cor primária (hex) |
| `{{ACCENT_COLOR}}` | 3. Cor de destaque (hex) |
| `{{BRAND_ICON}}` | 3. Ícone Font Awesome (ex: fa-tooth) |

### Hero
| Placeholder | Mapeamento |
|---|---|
| `{{HERO_LABEL}}` | 4. Rótulo do nicho no hero |
| `{{HERO_HEADLINE}}` | 4. Headline principal |
| `{{HERO_HEADLINE_ACCENT}}` | 4. Parte destacada da headline (cor acento) |
| `{{HERO_SUBHEADLINE}}` | 4. Subheadline |
| `{{HERO_IMAGE_URL}}` | 4. Imagem de fundo hero |
| `{{CTA_PRIMARY_TEXT}}` | 4. Texto CTA WhatsApp |
| `{{CTA_PRIMARY_MSG}}` | 4. Mensagem WhatsApp do CTA primário |
| `{{CTA_SECONDARY_TEXT}}` | 4. Texto CTA secundário |
| `{{BADGE_1}}` | 4. Badge 1 |
| `{{BADGE_2}}` | 4. Badge 2 |
| `{{BADGE_3}}` | 4. Badge 3 |

### Diferenciais
| Placeholder | Mapeamento |
|---|---|
| `{{DIFF_SECTION_TITLE}}` | 5. Título da seção |
| `{{DIFF_SECTION_SUB}}` | 5. Subtítulo |
| `{{DIFF_N_ICON}}` | 5. Ícone do diferencial N (1–4) |
| `{{DIFF_N_TITLE}}` | 5. Título do diferencial N |
| `{{DIFF_N_DESC}}` | 5. Descrição do diferencial N |

### Produtos/Serviços (N = 1 a 6)
| Placeholder | Mapeamento |
|---|---|
| `{{PRODUCTS_TITLE}}` | 6. Título da seção |
| `{{PRODUCTS_SUB}}` | 6. Subtítulo |
| `{{FILTER_LABELS}}` | 6. Labels dos filtros |
| `{{PROD_N_NAME}}` | 6. Nome produto/serviço N |
| `{{PROD_N_CATEGORY}}` | 6. Categoria N (valor do data-filter) |
| `{{PROD_N_CATEGORY_LABEL}}` | 6. Label da categoria N |
| `{{PROD_N_DESC}}` | 6. Descrição N |
| `{{PROD_N_IMAGE}}` | 6. Imagem N URL |
| `{{PROD_N_WA_MSG}}` | 6. Mensagem WhatsApp produto N |

### Como Funciona (N = 1 a 4)
| Placeholder | Mapeamento |
|---|---|
| `{{STEPS_TITLE}}` | 7. Título da seção |
| `{{STEPS_SUB}}` | 7. Subtítulo |
| `{{STEP_N_ICON}}` | 7. Ícone do passo N |
| `{{STEP_N_TITLE}}` | 7. Título do passo N |
| `{{STEP_N_DESC}}` | 7. Descrição do passo N |

### Prova Social (N = 1 a 3)
| Placeholder | Mapeamento |
|---|---|
| `{{SOCIAL_TITLE}}` | 8. Título |
| `{{SOCIAL_SUB}}` | 8. Subtítulo |
| `{{TEST_N_TEXT}}` | 8. Texto do depoimento N |
| `{{TEST_N_NAME}}` | 8. Nome do cliente N |
| `{{TEST_N_ROLE}}` | 8. Cargo/cidade N |
| `{{STAT_N_COUNT}}` | 8. Número da stat N |
| `{{STAT_N_SUFFIX}}` | 8. Sufixo da stat N |
| `{{STAT_N_DECIMAL}}` | 8. true/false (número decimal?) |
| `{{STAT_N_LABEL}}` | 8. Label da stat N |

### Galeria (N = 1 a 6)
| Placeholder | Mapeamento |
|---|---|
| `{{GALLERY_TITLE}}` | 9. Título |
| `{{GALLERY_SUB}}` | 9. Subtítulo |
| `{{GAL_N_URL}}` | 9. URL da foto N |
| `{{GAL_N_ALT}}` | 9. Alt text N |
| `{{GAL_N_CAPTION}}` | 9. Legenda N |

### FAQ (N = 1 a 6)
| Placeholder | Mapeamento |
|---|---|
| `{{FAQ_TITLE}}` | 10. Título |
| `{{FAQ_N_Q}}` | 10. Pergunta N |
| `{{FAQ_N_A}}` | 10. Resposta N |

### Formulário
| Placeholder | Mapeamento |
|---|---|
| `{{FORM_TITLE}}` | 11. Título |
| `{{FORM_SUB}}` | 11. Subtítulo |
| `{{FORM_BTN}}` | 11. Texto do botão |
| `{{FORM_SELECT_OPTIONS}}` | 11. Opções do select (HTML `<option>`) |
| `{{FORM_PRIVACY}}` | 11. Nota de privacidade |

### CTA Final
| Placeholder | Mapeamento |
|---|---|
| `{{CTA_FINAL_HEADLINE}}` | 12. Headline |
| `{{CTA_FINAL_SUB}}` | 12. Subtext |
| `{{CTA_SEAL_1}}` | 12. Selo urgência 1 |
| `{{CTA_SEAL_2}}` | 12. Selo urgência 2 |
| `{{CTA_SEAL_3}}` | 12. Selo urgência 3 |
| `{{CTA_FINAL_BTN}}` | 12. Texto botão WhatsApp |

### Footer
| Placeholder | Mapeamento |
|---|---|
| `{{FOOTER_DESC}}` | 13. Descrição |
| `{{FOOTER_COL1_TITLE}}` | 13. Título coluna 1 |
| `{{FOOTER_COL2_TITLE}}` | 13. Título coluna 2 |

### Integrações
| Placeholder | Mapeamento |
|---|---|
| `{{SUPABASE_URL}}` | 14. Supabase URL |
| `{{SUPABASE_ANON_KEY}}` | 14. Supabase Anon Key |
| `{{TYPEBOT_ID}}` | 14. Typebot ID |
| `{{GTM_ID}}` | 14. GTM ID |

### SEO
| Placeholder | Mapeamento |
|---|---|
| `{{META_TITLE}}` | 15. Meta title |
| `{{META_DESC}}` | 15. Meta description |
| `{{SCHEMA_TYPE}}` | 15. Tipo Schema.org |

---

## REGRAS DE CUSTOMIZAÇÃO

1. **Nunca remova a estrutura HTML** — apenas substitua conteúdo e atributos.
2. **Adapte os ícones Font Awesome** ao contexto do nicho (fa-couch → fa-tooth para odontologia, etc.).
3. **Cores**: atualize `primary` e `accent` no bloco `tailwind.config` do `<head>` do index.html.
4. **Imagens**: se o CONFIG não tiver URLs, use `https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=1920&q=80` buscando fotos adequadas ao nicho.
5. **Tom de voz**: adapte o vocabulário ao nicho (ex: "projeto" → "procedimento" para estética; "fabricamos" → "executamos" para serviços).
6. **Não altere** `js/main.js`, `css/custom.css` e `supabase/setup.sql` — são genéricos.
7. **Se algum campo do CONFIG estiver vazio**, crie conteúdo coerente com o nicho.
8. **Produtos/serviços**: se o CONFIG tiver menos de 4, remova os cards excedentes. Se tiver mais de 4, adicione novos seguindo o mesmo padrão HTML.
9. **FAQ**: ajuste o número de itens conforme o CONFIG (mín. 4, máx. 8).
10. **Chatbot builtin**: atualize os steps com o vocabulário do nicho (tipos de serviço, perguntas etc.).

---

## FORMATO DE SAÍDA

Gere **dois arquivos completos**:

### Arquivo 1: `js/config.js`
```javascript
// [conteúdo completo do config.js customizado]
```

### Arquivo 2: `index.html`
```html
<!-- [conteúdo completo do index.html customizado] -->
```

Se precisar ajustar `css/custom.css` (apenas para cores customizadas além das definidas no Tailwind), gere também esse arquivo.

---

## CONFIG.MD DO PROJETO

> Cole aqui o conteúdo do CONFIG.md preenchido:

```
[COLE O CONFIG.MD PREENCHIDO AQUI]
```

---

## OBSERVAÇÃO FINAL

Se estiver usando **Claude Code** (CLI), não precisa colar o CONFIG.md — apenas diga:
> "Customize o template em `landing-template/` usando o `CONFIG.md` que já está na pasta."

Se estiver usando **Claude Web** (claude.ai), cole este prompt inteiro + o CONFIG.md preenchido em uma única mensagem.
