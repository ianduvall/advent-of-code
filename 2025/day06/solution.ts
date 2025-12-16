export function part1(input: string): number {
	const lines = input.trim().split("\n");
	const operators: string[] = lines.pop()!.trim().split(/\s+/);
	const nums = lines.map((line) => line.trim().split(/\s+/).map(Number));

	return operators.reduce((sum, op, opIndex) => {
		let indexTotal = nums[0][opIndex];
		for (let i = 1; i < nums.length; i++) {
			const num = nums[i][opIndex];
			if (op === "+") {
				indexTotal += num;
			} else if (op === "*") {
				indexTotal *= num;
			}
		}
		sum += indexTotal;

		return sum;
	}, 0);
}

export function part2(input: string): number {
	const lines = input.split("\n");
	const operators: string = lines.pop()!;

	let total = 0;

	let op = "";
	let opTotal: number | null = null;
	for (let i = 0; i < operators.length; i++) {
		if (operators[i] !== " ") {
			total += opTotal ?? 0;
			opTotal = null;

			op = operators[i];
		}

		let numStr = "";
		for (let row = 0; row < lines.length; row++) {
			numStr += lines[row][i];
		}
		if (numStr.trim() === "") {
			continue;
		}

		const num = Number(numStr.trim());
		if (opTotal === null) {
			opTotal = num;
		} else if (op === "+") {
			opTotal += num;
		} else if (op === "*") {
			opTotal *= num;
		}
	}
	total += opTotal ?? 0;

	return total;
}
