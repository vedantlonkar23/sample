# Girlfriend's Day 💌

An interactive React page: password gate, a love slider, flip-to-reveal notes,
a photo gallery, a two-question quiz, an open "wish" question that emails her
answer to you, and a flower-confetti button.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build a static production copy:

```bash
npm run build
```

This outputs a `dist/` folder you can host anywhere (Netlify, Vercel, GitHub
Pages, etc.).

## Customize

- **Password** — `src/components/PasswordGate.jsx`, the `PASSWORD` constant.
- **Photos** — `src/assets/photos/photo1.jpg` … `photo7.jpg`. Swap in your own
  files (keep the same names, or update the imports in
  `src/components/PhotoGallery.jsx`) and edit the captions there too.
- **Notes** — `src/components/Notes.jsx`, the `noteTexts` array.
- **Quiz questions** — `src/components/Quiz.jsx`, the `quiz` array (includes the
  "what wish could I fulfill this year" question with 4 options).
- **Names / wording** — `src/components/Hero.jsx` and `src/components/FinalNote.jsx`.

