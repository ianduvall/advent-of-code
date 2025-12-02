function harness(input: string, isInvalidId: (id: number) => boolean): number {
	let sum = 0;

	const ranges = input.split(",").map((range) => {
		const [start, end] = range.split("-").map(Number);
		return { start, end };
	});

	for (const { start, end } of ranges) {
		for (let n = start; n <= end; n++) {
			if (isInvalidId(n)) {
				sum += n;
			}
		}
	}

	return sum;
}

export function part1(input: string): number {
	const isInvalidId = (id: number): boolean => {
		const string = id.toString();
		const digits = string.split("");

		if (digits.length % 2) {
			return false;
		}

		const half = digits.length / 2;
		if (string.slice(0, half) === string.slice(half)) {
			return true;
		}

		return false;
	};
	return harness(input, isInvalidId);
}

export function part2(input: string): number {
	const isInvalidId = (id: number): boolean => {
		const string = id.toString();
		const digits = string.split("");

		for (
			let sequenceLength = 1;
			sequenceLength <= Math.floor(digits.length / 2);
			sequenceLength++
		) {
			let sequence = string.slice(0, sequenceLength);
			let isRepeated = true;
			for (let index = sequenceLength; index < digits.length; index += sequenceLength) {
				const nextSequence = string.slice(index, index + sequenceLength);
				if (sequence !== nextSequence) {
					isRepeated = false;
					break;
				}
			}
			if (isRepeated) {
				return true;
			}
		}

		return false;
	};
	return harness(input, isInvalidId);
}
