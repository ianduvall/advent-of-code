export function part1(input: string): number {
	let count = 0;
	const ranges: Array<[number, number]> = [];
	let isParsingRanges = true;

	for (const line of input.split("\n")) {
		if (isParsingRanges) {
			if (!line) {
				isParsingRanges = false;
				continue;
			}
			const [lower, upper] = line.split("-").map(Number);
			ranges.push([lower, upper]);
		} else {
			const ingredient = Number.parseInt(line);
			for (const [lower, upper] of ranges) {
				if (ingredient >= lower && ingredient <= upper) {
					++count;
					break;
				}
			}
		}
	}

	return count;
}

export function part2(input: string): number {
	let count = 0;
	const ranges: Array<[number, number]> = [];

	for (const line of input.split("\n")) {
		if (!line) {
			break;
		}
		const [lower, upper] = line.split("-").map(Number);

		ranges.push([lower, upper]);
	}

	const nonOverlappingRanges: Array<[number, number]> = [];

	ranges.sort((a, b) => a[0] - b[0]);

	for (const [lower, upper] of ranges) {
		const lastRange = nonOverlappingRanges.at(-1);
		if (!lastRange || lower > lastRange[1]) {
			nonOverlappingRanges.push([lower, upper]);
			continue;
		}
		if (upper > lastRange[1]) {
			lastRange[1] = upper;
		}
	}

	for (const [lower, upper] of nonOverlappingRanges) {
		count += upper - lower + 1;
	}

	return count;
}
