# Rotina da Caneta 🖊️

Companheiro de organização para quem está em tratamento com caneta GLP-1.

Organiza o dia da aplicação, hidratação, movimento e gera um resumo para levar ao médico — sem obsessão e sem pressão.

---

## Como usar

Acesse via GitHub Pages: `https://<seu-usuario>.github.io/rotina-da-caneta/`

No celular, após abrir o link, escolha **"Adicionar à tela inicial"** para instalar como app.

---

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `rotina-da-caneta`)
2. Faça upload dos arquivos ou use git:

```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/rotina-da-caneta.git
git push -u origin main
```

3. No repositório → **Settings → Pages**
4. Em **Source**, selecione `main` e pasta `/root`
5. Clique em **Save**

Em alguns minutos o link estará ativo.

---

## Estrutura

```
rotina-da-caneta/
├── index.html      # App principal
├── manifest.json   # Configuração PWA (instalável no celular)
├── sw.js           # Service Worker (cache e modo offline)
├── icons/          # Ícones do app (adicionar icon-192.png e icon-512.png)
└── README.md
```

### Ícones (opcional mas recomendado)

Adicione na pasta `icons/`:
- `icon-192.png` — 192×192px
- `icon-512.png` — 512×512px

Você pode gerar os ícones em [realfavicongenerator.net](https://realfavicongenerator.net) ou [pwabuilder.com](https://www.pwabuilder.com/imageGenerator).

---

## Aviso

Este app organiza rotinas. Não substitui orientação médica.
