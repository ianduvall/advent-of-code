import { readFileSync } from "node:fs";
import { describe, it, expect } from "vitest";

import { part1, part2 } from "./solution";

describe("day 03", () => {
	const exampleInput = `
987654321111111
811111111111119
234234234234278
818181911112111
`.trim();
	const input = readFileSync("./2025/day03/input.txt", "utf-8");

	describe("part 1", () => {
		it("part 1 example", () => {
			expect(part1(exampleInput.trim())).toBe(357);
		});

		it("part 1 input", () => {
			expect(part1(input)).toBe(17443);
		});
	});

	describe("part 2", () => {
		it("part 2 example", () => {
			expect(part2(exampleInput.trim())).toBe(3121910778619);
		});

		it("part 2 input", () => {
			expect(part2(input)).toBe(172167155440541);
		});
	});
});
