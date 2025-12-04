---
description: Scaffold a new day folder
argument-hint: <year> <day-number>
---

Scaffold the boilerplate for day $2 in year $1. Zero-pad the day number to 2 digits (e.g., 3 becomes 03, 12 stays 12).

Create these files:

1. `$1/dayXX/solution.ts` (where XX is the zero-padded day):
```ts
export function part1(input: string): number {
	return 0;
}

export function part2(input: string): number {
	return 0;
}
```

2. `$1/dayXX/solution.test.ts`:
```ts
import { readFileSync } from "node:fs";
import { describe, it, expect } from "vitest";

import { part1, part2 } from "./solution";

describe("day XX", () => {
	const exampleInput = ``;
	const input = readFileSync("./$1/dayXX/input.txt", "utf-8");

	describe("part 1", () => {
		it("part 1 example", () => {
			expect(part1(exampleInput.trim())).toBe(0);
		});

		it("part 1 input", () => {
			expect(part1(input)).toBe(0);
		});
	});

	describe("part 2", () => {
		it("part 2 example", () => {
			expect(part2(exampleInput.trim())).toBe(0);
		});

		it("part 2 input", () => {
			expect(part2(input)).toBe(0);
		});
	});
});
```

3. `$1/dayXX/input.txt`: Empty file for puzzle input
