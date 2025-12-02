import { readFileSync } from "node:fs";
import { describe, it, expect } from "vitest";

import { part1, part2 } from "./solution";

describe("day 01", () => {
	const exampleInput = `
L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`.trim();
	const input = readFileSync("./2025/day01/input.txt", "utf-8");

	describe("part 1", () => {
		it("part 1 example", () => {
			expect(part1(exampleInput.trim())).toBe(3);
		});

		it("part 1 input", () => {
			expect(part1(input)).toBe(1147);
		});
	});

	describe("part 2", () => {
		it("part 2 example", () => {
			expect(part2(exampleInput.trim())).toBe(6);
		});

		it("part 2 input", () => {
			expect(part2(input)).toBe(6789);
		});
	});
});
