package solution

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
)

var star = regexp.MustCompile("[*]")
var numberRegexp = regexp.MustCompile(`\d+`)

type Position struct {
	row, start, end int
}

type Number struct {
	val int
	pos Position
}

func newNumber(number int, row int, start int, end int) Number {
	return Number{
		val: number,
		pos: Position{
			row:   row,
			start: start,
			end:   end,
		},
	}
}

func (n Number) checkPoints() [][2]int {
	points := [][2]int{
		{n.pos.row, n.pos.start - 1},
		{n.pos.row, n.pos.end},
	}

	for col := n.pos.start - 1; col < n.pos.end+1; col++ {
		points = append(points, [2]int{n.pos.row + 1, col}, [2]int{n.pos.row + -1, col})
	}

	return points
}

type Engine []string

func (engine Engine) isSymbolAt(point [2]int) bool {
	row, col := point[0], point[1]

	if row < 0 || row >= len(engine) || col < 0 || col >= len(engine[0]) {
		return false
	}

	char := string(engine[row][col])
	return !numberRegexp.Match([]byte(char)) && char != "."
}

func (engine Engine) isPartNumber(number Number) bool {
	for _, point := range number.checkPoints() {
		if engine.isSymbolAt(point) {
			return true
		}
	}

	return false
}

func FindAllNumbersWithIndices(engine Engine) []Number {
	numbers := make([]Number, 0)

	for i, row := range engine {
		for _, index := range numberRegexp.FindAllStringIndex(row, -1) {
			start, end := index[0], index[1]
			number, _ := strconv.Atoi(row[start:end])
			numbers = append(numbers, newNumber(number, i, start, end))
		}
	}

	return numbers
}

func AddPartNumbers(engine Engine, numbers []Number) int {
	sum := 0

	for _, number := range numbers {
		if engine.isPartNumber(number) {
			fmt.Println(number)
			sum += number.val
		}
	}

	return sum
}

func FindAllStarPositions(engine Engine) [][2]int {
	points := make([][2]int, 0)

	for i, row := range engine {
		for _, index := range star.FindAllStringIndex(row, -1) {
			points = append(points, [2]int{i, index[0]})
		}
	}

	return points
}

func ParseEngine(rawDiagram string) Engine {
	return strings.Split(rawDiagram, "\n")
}
