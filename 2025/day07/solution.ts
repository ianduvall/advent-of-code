type LocationTuple = readonly [number, number];
type LocationKey = ReturnType<typeof serializeLocation>;
const serializeLocation = (row: number, col: number) => `${row},${col}` as const;

export function part1(input: string): number {
	const grid = input.split("\n").map((line) => line.split(""));

	let startLocationRowIndex = 0;
	let startLocationColIndex = grid[0].findIndex((char) => char === "S");
	if (startLocationColIndex === -1) throw new Error("start location not found in first row");

	const beams: Array<LocationTuple> = [[startLocationRowIndex + 1, startLocationColIndex]];
	const beamsCreated = new Set<LocationKey>();
	let splitCount = 0;

	while (beams.length) {
		const [row, col] = beams.pop()!;
		const locationKey = serializeLocation(row, col);
		if (beamsCreated.has(locationKey)) {
			continue;
		}

		beamsCreated.add(locationKey);
		const nextRow = row + 1;

		const nextChar = grid?.[nextRow]?.[col];
		if (!nextChar) {
			continue;
		}
		if (nextChar === ".") {
			beams.push([nextRow, col]);
			continue;
		}

		const left = col - 1;
		const right = col + 1;
		(
			[
				[nextRow, left],
				[nextRow, right],
			] as const
		).forEach((split) => beams.push(split));
		++splitCount;
	}

	return splitCount;
}

export function part2(input: string): number {
	const grid = input.split("\n").map((line) => line.split(""));

	const startLocationColIndex = grid[0].findIndex((char) => char === "S");
	if (startLocationColIndex === -1) throw new Error("start location not found in first row");

	let currentRow = new Map<number, number>();
	currentRow.set(startLocationColIndex, 1);

	let pathsCount = 0;

	for (let row = 1; row <= grid.length; row++) {
		const nextRow = new Map<number, number>();

		for (const [col, count] of currentRow) {
			if (col < 0 || col >= grid[0].length) {
				continue;
			} else if (row === grid.length) {
				pathsCount += count;
				continue;
			}

			const char = grid[row][col];

			if (char === ".") {
				nextRow.set(col, (nextRow.get(col) ?? 0) + count);
			} else if (char === "^") {
				nextRow.set(col - 1, (nextRow.get(col - 1) ?? 0) + count);
				nextRow.set(col + 1, (nextRow.get(col + 1) ?? 0) + count);
			}
		}

		currentRow = nextRow;
	}

	return pathsCount;
}
