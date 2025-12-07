import { readFileSync } from "node:fs";
import { describe, it, expect } from "vitest";

import { part1, part2 } from "./solution";

describe("day 04", () => {
	const exampleInput = `
..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.
`.trim();
	const input = readFileSync("./2025/day04/input.txt", "utf-8");

	describe("part 1", () => {
		it("part 1 example", () => {
			expect(part1(exampleInput.trim())).toBe(13);
		});

		it("part 1 input", () => {
			expect(part1(input)).toBe(1356);
		});
	});

	describe("part 2", () => {
		it("part 2 example", () => {
			expect(part2(exampleInput.trim())).toBe(43);
		});

		it("part 2 input", () => {
			expect(part2(input)).toBe(8713);
		});
	});
});
