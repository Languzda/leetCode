# LeetCode TypeScript Solutions

Środowisko do rozwiązywania zadań z LeetCode w TypeScript z bezpośrednim uruchamianiem bez transpilacji.

## Struktura Projektu

```
TS/
├── problems/                 # Folder z zadaniami
│   └── XXXX-problem-name/   # Każde zadanie w osobnym folderze
│       ├── solution.ts      # Rozwiązanie
│       ├── solution.test.ts # Testy
│       └── README.md        # Opis zadania
├── scripts/                 # Skrypty pomocnicze
├── package.json
├── tsconfig.json
└── jest.config.js
```

## Instalacja

```bash
npm install
```

## Jak używać

### 1. Stwórz nowe zadanie

```bash
npm run new-problem <numer> <nazwa>
```

Przykład:

```bash
npm run new-problem 1 two-sum
npm run new-problem 26 remove-duplicates
```

To stworzy folder `problems/0001-two-sum/` z gotową strukturą plików.

### 2. Uruchom rozwiązanie

```bash
npm run dev problems/0001-two-sum/solution.ts
```

### 3. Uruchom testy

```bash
# Wszystkie testy
npm test

# Testy dla konkretnego zadania
npm test -- problems/0001-two-sum

# Testy w trybie watch
npm test:watch
```

## Przykład użycia

1. **Stwórz zadanie:**

   ```bash
   npm run new-problem 1 two-sum
   ```

2. **Edytuj `problems/0001-two-sum/solution.ts`:**

   ```typescript
   export function twoSum(nums: number[], target: number): number[] {
     const map = new Map<number, number>();

     for (let i = 0; i < nums.length; i++) {
       const complement = target - nums[i];
       if (map.has(complement)) {
         return [map.get(complement)!, i];
       }
       map.set(nums[i], i);
     }

     return [];
   }
   ```

3. **Uruchom:**

   ```bash
   npm run dev problems/0001-two-sum/solution.ts
   ```

4. **Dodaj testy w `problems/0001-two-sum/solution.test.ts`:**

   ```typescript
   import { twoSum } from "./solution";

   describe("Problem 1: Two Sum", () => {
     test("Example 1", () => {
       expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
     });
   });
   ```

5. **Uruchom testy:**
   ```bash
   npm test -- problems/0001-two-sum
   ```

## Funkcje

- ✅ **Bezpośrednie uruchamianie TypeScript** - używa `tsx` zamiast transpilacji
- ✅ **Automatyczne tworzenie struktury** - skrypt do generowania nowych zadań
- ✅ **Testy z Vitest** - szybkie i nowoczesne środowisko testowe z VS Code integration
- ✅ **Organizacja** - każde zadanie w osobnym folderze
- ✅ **Szybkie uruchamianie** - proste komendy npm
- ✅ **UI dla testów** - graficzny interfejs do testów

## Dostępne komendy

- `npm run new-problem <number> <name>` - Tworzy nowe zadanie
- `npm run dev <file>` - Uruchamia plik TypeScript
- `npm test` - Uruchamia wszystkie testy
- `npm test -- <folder>` - Uruchamia testy dla konkretnego zadania
- `npm run test:watch` - Uruchamia testy w trybie watch
- `npm run test:ui` - Uruchamia graficzny interfejs testów
