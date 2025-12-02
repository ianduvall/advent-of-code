import { readFileSync } from "node:fs";
import { describe, it, expect } from "vitest";

import { part1, part2 } from "./solution";

describe("day 02", () => {
	const exampleInput = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;
	const input = readFileSync("./2025/day02/input.txt", "utf-8");

	describe("part 1", () => {
		it("part 1 example", () => {
			expect(part1(exampleInput.trim())).toBe(1227775554);
		});

		it("part 1 input", () => {
			expect(part1(input)).toBe(12599655151);
		});
	});

	describe("part 2", () => {
		it("part 2 example", () => {
			expect(part2(exampleInput.trim())).toBe(4174379265);
		});

		it("part 2 input", () => {
			expect(part2(input)).toBe(20942028255);
		});
	});
});
