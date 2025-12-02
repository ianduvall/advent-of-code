export function part1(input: string): number {
	let count = 0;
	let dial = 50;

	const lines = input.split("\n");

	for (const line of lines) {
		const direction = line[0] === "R" ? 1 : -1;
		const steps = Number.parseInt(line.slice(1), 10);

		dial += direction * (steps % 100);

		if (dial > 99) {
			dial %= 100;
		} else if (dial < 0) {
			dial += 100;
		}

		if (dial === 0) {
			++count;
		}
	}

	return count;
}

export function part2(input: string): number {
	let count = 0;
	let dial = 50;

	const lines = input.split("\n");

	for (const line of lines) {
		const direction = line[0] === "R" ? 1 : -1;
		const steps = Number.parseInt(line.slice(1), 10);

		for (let step = 0; step < steps; ++step) {
			dial += direction;

			if (dial === 100) {
				dial = 0;
			} else if (dial === -1) {
				dial = 99;
			}

			if (dial === 0) {
				++count;
			}
		}
	}

	return count;
}
