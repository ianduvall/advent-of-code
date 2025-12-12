import { readFileSync } from "node:fs";
import { describe, it, expect } from "vitest";

import { part1, part2 } from "./solution";

describe("day 05", () => {
	const exampleInput = `
3-5
10-14
16-20
12-18

1
5
8
11
17
32
`.trim();
	const input = readFileSync("./2025/day05/input.txt", "utf-8");

	describe("part 1", () => {
		it("part 1 example", () => {
			expect(part1(exampleInput)).toBe(3);
		});

		it("part 1 input", () => {
			expect(part1(input)).toBe(613);
		});
	});

	describe("part 2", () => {
		it("part 2 example", () => {
			expect(part2(exampleInput)).toBe(14);
		});

		it("part 2 input", () => {
			expect(part2(input)).toBe(336495597913098);
		});
	});
});
