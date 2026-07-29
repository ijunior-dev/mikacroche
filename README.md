# LANDING PAGE TEMPLATE — One-Page Lead Generation
> Molde estrutural para criação de landing pages de qualquer nicho.
> Desenvolvido e validado no projeto Fábrica de Móveis (2025).

---

## COMO USAR ESTE TEMPLATE

### Fluxo completo (3 passos)

```
1. Preencha o CONFIG.md  →  2. Envie para o Claude  →  3. Receba a página pronta
```

---

### PASSO 1 — Preencha o CONFIG.md

Abra o arquivo `CONFIG.md` e preencha todas as seções:
- Dados da empresa (nome, WhatsApp, cidade...)
- Identidade visual (cores, ícone)
- Conteúdo (hero, diferenciais, produtos, depoimentos, FAQ...)
- Integrações (Supabase, Typebot)

Quanto mais detalhes, mais fiel ao projeto real será o resultado.
Campos em branco → Claude sugere conteúdo adequado ao nicho.

---

### PASSO 2 — Envie para o Claude

**Opção A — Claude Code (recomendado):**
```
1. Abra o Claude Code nesta pasta
2. Digite: "Customize este template com base no CONFIG.md"
3. Claude lê todos os arquivos e faz as substituições
```

**Opção B — Claude Web (claude.ai):**
```
1. Abra o arquivo PROMPT-PARA-CLAUDE.md
2. Copie o conteúdo inteiro
3. Cole no Claude Web
4. Em seguida, cole o conteúdo do CONFIG.md preenchido
5. Envie — Claude gera os arquivos customizados
```

---

### PASSO 3 — Receba e use

Claude vai gerar:
- `js/config.js` — configurações customizadas
- `index.html` — página completa com todo o conteúdo

Salve os arquivos na pasta do novo projeto e abra o `index.html` no navegador.

---

## ESTRUTURA DO TEMPLATE

```
landing-template/
│
├── CONFIG.md              ← ✏️  VOCÊ PREENCHE ESTE
├── PROMPT-PARA-CLAUDE.md  ← 🤖  COLA NO CLAUDE
├── README.md              ← 📖  Este arquivo
│
├── index.html             ← 🌐  Template da página ({{PLACEHOLDERS}})
├── js/
│   ├── config.js          ← ⚙️  Config ({{PLACEHOLDERS}})
│   └── main.js            ← 🔧  JavaScript (NÃO EDITAR — genérico)
├── css/
│   └── custom.css         ← 🎨  CSS base (NÃO EDITAR — genérico)
└── supabase/
    └── setup.sql          ← 🗄️  SQL do banco (NÃO EDITAR — genérico)
```

**Arquivos que o Claude customiza:** `index.html` + `js/config.js`
**Arquivos reutilizados sem alteração:** `main.js`, `custom.css`, `setup.sql`

---

## NICHOS COMPATÍVEIS (exemplos)

| Nicho | Schema.org | Ícone sugerido |
|---|---|---|
| Fábrica de Móveis | LocalBusiness | fa-couch |
| Clínica Odontológica | MedicalBusiness | fa-tooth |
| Clínica Estética | MedicalBusiness | fa-spa |
| Imobiliária | RealEstateAgent | fa-house |
| Academia / Fitness | FitnessCenter | fa-dumbbell |
| Advocacia | LegalService | fa-scale-balanced |
| Pet Shop / Veterinário | LocalBusiness | fa-paw |
| Restaurante / Food | FoodEstablishment | fa-utensils |
| Salão de Beleza | BeautySalon | fa-scissors |
| Escola / Curso | EducationalOrganization | fa-graduation-cap |
| Construtora | LocalBusiness | fa-helmet-safety |
| Marmoraria | LocalBusiness | fa-gem |
| Auto Center | AutomotiveBusiness | fa-car |
| Psicólogo | MedicalBusiness | fa-brain |

---

## FUNCIONALIDADES JÁ INCLUSAS

- [x] Navbar sticky com scroll transition e menu mobile
- [x] Hero com imagem de fundo, overlay e 2 CTAs
- [x] Seção de diferenciais (4 cards responsivos)
- [x] Portfólio/Serviços com filtro por categoria
- [x] Carrossel horizontal no mobile (CSS scroll snap)
- [x] Como Funciona (4 passos com linha conectora)
- [x] Depoimentos com Swiper + autoplay
- [x] Estatísticas animadas (CountUp ao scroll)
- [x] Galeria masonry com lightbox
- [x] FAQ accordion (Schema.org FAQPage)
- [x] Formulário de captação → Supabase (com validação)
- [x] Chatbot guiado builtin (5 steps)
- [x] Slot Typebot (descomentar para ativar)
- [x] Botão WhatsApp fixo com pulse animation
- [x] Scroll reveal em todas as seções
- [x] Schema.org LocalBusiness + FAQPage
- [x] Acessibilidade: skip link, aria-labels, focus visible
- [x] Mobile-first, responsivo (xs → xl)

---

## APÓS RECEBER OS ARQUIVOS DO CLAUDE

### Para ativar o Supabase (banco de leads):
→ Siga `INSTRUCOES-SUPABASE.md` do projeto original

### Para ativar o Typebot (chatbot profissional):
→ Siga `TYPEBOT-SETUP.md` do projeto original

### Para publicar online:
1. **Netlify Drop** (mais fácil): arraste a pasta em netlify.com/drop
2. **Vercel**: `npx vercel` na pasta do projeto
3. **GitHub Pages**: push para um repositório público

---

## ESTIMATIVA DE TEMPO POR PROJETO

| Tarefa | Tempo estimado |
|---|---|
| Preencher CONFIG.md | 20–40 min |
| Claude gerar os arquivos | 2–5 min |
| Revisar e ajustar | 15–30 min |
| Configurar Supabase | 15 min |
| Configurar Typebot | 30–60 min |
| Publicar (Netlify) | 5 min |
| **TOTAL** | **~2 horas** |
