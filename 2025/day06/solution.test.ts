import { readFileSync } from "node:fs";
import { describe, it, expect } from "vitest";

import { part1, part2 } from "./solution";

describe("day 06", () => {
	const exampleInput = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `;
	const input = readFileSync("./2025/day06/input.txt", "utf-8");

	describe("part 1", () => {
		it("part 1 example", () => {
			expect(part1(exampleInput)).toBe(4277556);
		});

		it("part 1 input", () => {
			expect(part1(input)).toBe(6503327062445);
		});
	});

	describe("part 2", () => {
		it("part 2 example", () => {
			expect(part2(exampleInput)).toBe(3263827);
		});

		it("part 2 input", () => {
			expect(part2(input)).toBe(9640641878593);
		});
	});
});
