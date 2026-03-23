# sia-cfs — Landing Page Advocacia

Site institucional desenvolvido em React + Vite.

## Estrutura de Componentes

```
src/
├── index.css                    # Variáveis, fontes, base global
├── App.jsx                      # Composição da página
├── main.jsx                     # Entry point
├── hooks/
│   └── useScrollReveal.js       # Hook de animação por scroll
└── components/
    ├── Header.jsx / .module.css    # Navegação fixa com scroll effect
    ├── Hero.jsx / .module.css      # Seção principal (acima da dobra)
    ├── About.jsx / .module.css     # Sobre a advogada
    ├── Services.jsx / .module.css  # Áreas de atuação (interativo)
    ├── Testimonials.jsx / .module.css # Depoimentos de clientes
    ├── Contact.jsx / .module.css   # Formulário + dados de contato
    └── Footer.jsx / .module.css    # Rodapé completo
```

## Setup

```bash
npm install
npm run dev
```

## Checklist de Personalização

### Dados da advogada
- [ ] Substituir `[Nome]` e `[Nome Completo]` pelo nome real
- [ ] Atualizar número OAB (`[00000]`) e seccional (`[Estado]`)
- [ ] Preencher universidade e especialização
- [ ] Inserir cidade de atuação

### Contato
- [ ] Telefone/WhatsApp: substituir `5513900000000` pelo número real
- [ ] E-mail: atualizar `contato@[nome].adv.br`
- [ ] Endereço completo

### Imagens — colocar em `public/images/`
- [ ] `logo.png` — logotipo do escritório
- [ ] `foto-dra.jpg` — foto principal (Hero, formato retrato)
- [ ] `foto-sobre.jpg` — foto seção Sobre (pode ser a mesma)

### Fontes — confirmar em `public/fonts/`
Estrutura esperada pelo `index.css`:
```
public/fonts/
├── Shallotta/
│   ├── Shallotta.woff2
│   ├── Shallotta.woff
│   └── Shallotta.ttf
└── Sora/
    ├── Sora-Regular.woff2 (e .woff, .ttf)
    ├── Sora-Medium.woff2
    └── Sora-SemiBold.woff2
```
Ajuste os nomes dos arquivos no `index.css` se necessário.

### Áreas de Atuação (`Services.jsx`)
Editar o array `services` com as áreas reais da advogada.

### Depoimentos (`Testimonials.jsx`)
Substituir os depoimentos fictícios por depoimentos reais.

### Formulário de Contato (`Contact.jsx`)
Atualmente mostra uma mensagem de sucesso simulada.
Para envio real, integrar com:
- EmailJS: https://www.emailjs.com
- Formspree: https://formspree.io
- API própria / backend

## Paleta de Cores

| Variável | Hex | Uso |
|---|---|---|
| `--color-bg` | `#F9F8F9` | Fundo principal |
| `--color-gray-light` | `#BEBFC1` | Bordas, detalhes |
| `--color-blue-muted` | `#8FA2BA` | Destaques, ícones |
| `--color-navy` | `#07304F` | Texto principal, fundos escuros |
| `--color-rose` | `#D8B5B2` | Acentos, CTAs secundários |
| `--color-rose-light` | `#EDD2D1` | Fundos suaves, bordas |
