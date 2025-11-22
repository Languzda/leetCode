# LeetCode TypeScript - Instrukcje

## Szybki Start

### 1. Stwórz nowe zadanie

```bash
npm run new-problem <number> <name>
```

Przykłady:

```bash
npm run new-problem 1 two-sum
npm run new-problem 26 remove-duplicates-from-sorted-array
npm run new-problem 121 best-time-to-buy-and-sell-stock
```

### 2. Uruchom rozwiązanie

```bash
npm run dev problems/XXXX-nazwa/solution.ts
```

Przykład:

```bash
npm run dev problems/0001-two-sum/solution.ts
```

### 3. Uruchom testy

```bash
# Wszystkie testy
npm test

# Konkretne zadanie
npm test -- problems/0001-two-sum

# Testy w trybie watch (automatycznie po zmianach)
npm test:watch
```

## Struktura pliku rozwiązania

```typescript
/**
 * Problem X: Nazwa
 *
 * Difficulty: Easy/Medium/Hard
 * Tags: Array, Hash Table, Two Pointers
 *
 * Description:
 * [Opis problemu z LeetCode]
 */

export function nazwaFunkcji(params): returnType {
  // Twoje rozwiązanie
  return result;
}

export function solution() {
  // Przykład użycia
  const input = [2, 7, 11, 15];
  const target = 9;
  return nazwaFunkcji(input, target);
}

// Uruchomienie bezpośrednie
if (require.main === module) {
  console.log("Running solution...");
  console.log("Input:", someInput);
  console.log("Output:", solution());
}
```

## Przykłady testów

```typescript
import { twoSum } from "./solution";

describe("Problem 1: Two Sum", () => {
  test("Example 1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("Edge case: negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });
});
```

## Przydatne komendy

- `npm run dev <file>` - uruchom plik TypeScript
- `npm test` - uruchom wszystkie testy
- `npm test -- <folder>` - uruchom testy konkretnego zadania
- `npm run test:watch` - testy w trybie watch
- `npm run test:ui` - graficzny interfejs testów
- `npm run new-problem <number> <name>` - stwórz nowe zadanie

## Vitest + VS Code Integration

✅ **Rozszerzenie Vitest Explorer jest już zainstalowane!**

### Funkcje w VS Code:

- **Panel Testing** - widoczność wszystkich testów
- **Uruchamianie jednym kliknięciem** - pojedyncze testy lub grupy
- **Debugowanie** - stawiaj breakpointy w testach
- **Live testing** - automatyczne uruchamianie po zmianach
- **Wyniki inline** - zobacz pass/fail bezpośrednio w edytorze

### Jak używać:

1. Otwórz panel **Testing** (ikona kolby laboratoryjnej)
2. Kliknij **Refresh Tests** jeśli nie widzisz testów
3. Uruchom testy klikając ▶️ lub debuguj klikając 🐛

## Tips & Tricks

1. **Szybkie tworzenie**: `npm run new-problem` automatycznie tworzy kompletną strukturę
2. **Bezpośrednie uruchamianie**: Dzięki `tsx` nie musisz kompilować - uruchomisz TS bezpośrednio
