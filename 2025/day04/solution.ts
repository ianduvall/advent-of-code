function countAccessibleCells(grid: string[][]): number {
	const inaccessibleCount = 4;
	const blockerChar = "@";
	const directions = {
		up: { row: -1, col: 0 },
		upLeft: { row: -1, col: -1 },
		upRight: { row: -1, col: 1 },
		down: { row: 1, col: 0 },
		downLeft: { row: 1, col: -1 },
		downRight: { row: 1, col: 1 },
		left: { row: 0, col: -1 },
		right: { row: 0, col: 1 },
	};

	function isBlocked(row: number, col: number) {
		const char = grid[row]?.[col];
		return char === blockerChar;
	}
	function isAccessible(row: number, col: number) {
		let blockedCount = 0;

		for (const dir of Object.values(directions)) {
			const newRow = row + dir.row;
			const newCol = col + dir.col;
			if (isBlocked(newRow, newCol)) {
				++blockedCount;
			}
		}

		return blockedCount < inaccessibleCount;
	}

	const accessibleCoordinates: Array<{ row: number; col: number }> = [];

	for (let row = 0, width = grid[0].length; row < width; row++) {
		for (let col = 0, height = grid.length; col < height; col++) {
			const char = grid[row][col];
			if (char !== blockerChar) {
				continue;
			}
			if (isAccessible(row, col)) {
				accessibleCoordinates.push({ row, col });
			}
		}
	}

	accessibleCoordinates.forEach(({ row, col }) => {
		grid[row][col] = ".";
	});
	return accessibleCoordinates.length;
}

export function part1(input: string): number {
	const grid = input.split("\n").map((line) => line.split(""));

	return countAccessibleCells(grid);
}

export function part2(input: string): number {
	const grid = input.split("\n").map((line) => line.split(""));

	let result = 0;
	let removedThisPass = 0;
	do {
		removedThisPass = countAccessibleCells(grid);
		result += removedThisPass;
	} while (removedThisPass > 0);

	return result;
}
