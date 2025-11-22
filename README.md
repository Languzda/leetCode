# LeetCode Solutions

Moja kolekcja rozwiązań zadań z LeetCode napisana w TypeScript.

## 📊 Statystyki

- **Rozwiązane problemy**: 1
- **Easy**: 1
- **Medium**: 0
- **Hard**: 0

## 📝 Lista Problemów

| # | Problem | Difficulty | Tags | Solution | Tests |
|---|---------|------------|------|----------|-------|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | 🟢 Easy | `Array`, `Hash Table` | [📄](TS/problems/0001-two-sum/solution.ts) | [🧪](TS/problems/0001-two-sum/solution.test.ts) |


## 🏗️ Struktura Projektu

```
leetCode/
├── TS/                          # TypeScript setup
│   ├── problems/                # Wszystkie zadania
│   │   ├── 0001-two-sum/
│   │   │   ├── solution.ts      # Rozwiązanie
│   │   │   ├── solution.test.ts # Testy
│   │   │   └── README.md        # Opis problemu
│   │
│   ├── scripts/                 # Narzędzia
│   ├── package.json             # Konfiguracja projektu
│   └── README.md                # Dokumentacja setupu
└── README.md                    # Ten plik
```

## 🚀 Quick Start

```bash
# Przejdź do folderu TypeScript
cd TS

# Zainstaluj zależności
npm install

# Stwórz nowe zadanie
npm run new-problem <number> <name>

# Uruchom rozwiązanie
npm run dev problems/0001-two-sum/solution.ts

# Uruchom testy
npm test
```

## 📂 Jak dodać nowy problem?

1. **Użyj skryptu** (w folderze TS):

   ```bash
   cd TS
   npm run new-problem 121 best-time-to-buy-and-sell-stock
   ```

2. **Uzupełnij metadane** w `solution.ts`:

   ```typescript
   /**
    * Problem 121: Best Time To Buy And Sell Stock
    *
    * Difficulty: Easy
    * Tags: Array, Dynamic Programming
    *
    * Description: [opis problemu]
    */
   ```

3. **Napisz rozwiązanie** i **dodaj testy**

4. **Automatycznie zaktualizuj README**:

   ```bash
   node scripts/update-readme.js
   ```

   > 💡 Skrypt automatycznie znajdzie wszystkie problemy i zaktualizuje tabelę oraz statystyki!

## ⚡ Szybkie aktualizowanie

Możesz używać komend z głównego folderu projektu:

```bash
# Automatycznie zaktualizuj README
npm run update-readme

# Stwórz nowy problem (przekieruje do folderu TS)
npm run new-problem 125 valid-palindrome

# Usuń problem (z potwierdzeniem bezpieczeństwa)
npm run remove-problem 121
npm run remove-problem 121 -- --confirm

# Uruchom testy (z głównego folderu)
npm test

# Uruchom konkretne rozwiązanie
npm run dev problems/0001-two-sum/solution.ts
```

Lub bezpośrednio:

```bash
# Z głównego folderu projektu
node scripts/update-readme.js
node scripts/remove-problem.js 121 --confirm
```

Skrypt automatycznie:

- 🔍 **Skanuje** wszystkie problemy w `TS/problems/`
- 📊 **Liczy statystyki** (Easy/Medium/Hard)
- 📝 **Generuje tabelę** z linkami do rozwiązań
- ➕ **Wykrywa nowe problemy** i je dodaje
- ➖ **Wykrywa usunięte problemy** i je usuwa
- 🔄 **Aktualizuje README** jednym kliknięciem

## 🛠️ Narzędzia

- **TypeScript** - główny język
- **Vitest** - framework testowy
- **TSX** - bezpośrednie uruchamianie TS
- **VS Code** - IDE z rozszerzeniem Vitest Explorer

## 💡 Tips

- Każde zadanie ma własny folder z kompletną dokumentacją
- Używaj `npm run test:watch` dla live testowania
- `npm run test:ui` otwiera graficzny interfejs testów
- VS Code automatycznie rozpoznaje testy w panelu Testing

---

_Ostatnia aktualizacja: Listopad 2025_
