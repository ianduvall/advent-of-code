function findMaxIndex(ints: ReadonlyArray<number>, startIndex: number, endIndex: number): number {
	let max = -1;
	let maxIndex = -1;

	for (let i = startIndex; i < endIndex; ++i) {
		const int = ints[i];
		if (int <= max) {
			continue;
		}

		max = int;
		maxIndex = i;
	}

	return maxIndex;
}

function harness(input: string, numDigits: number) {
	let result = 0;

	for (const line of input.split("\n")) {
		const ints = line.split("").map(Number);

		const indices = Array.from<number>({ length: numDigits }).fill(0);
		indices[0] = findMaxIndex(ints, 0, ints.length - numDigits + 1);
		for (let i = 1; i < numDigits; ++i) {
			const startIndex = indices[i - 1] + 1;
			const endIndex = ints.length - numDigits + 1 + i;
			indices[i] = findMaxIndex(ints, startIndex, endIndex);
		}

		const max = indices.reduce((acc, i) => {
			return acc + ints[i];
		}, "");
		result += Number(max);
	}

	return result;
}

export function part1(input: string): number {
	return harness(input, 2);
}

export function part2(input: string): number {
	return harness(input, 12);
}
