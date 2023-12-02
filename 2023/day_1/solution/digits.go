package solution

import (
	"strconv"
)

var digits = map[string]uint{
	"one":   1,
	"two":   2,
	"three": 3,
	"four":  4,
	"five":  5,
	"six":   6,
	"seven": 7,
	"eight": 8,
	"nine":  9,
}

func toDigit(str string) uint {
	if _, ok := digits[str]; ok {
		return digits[str]
	}

	digit, _ := strconv.Atoi(str)

	return uint(digit)
}

func getDigitsAndSpellings() []string {
	list := make([]string, 0, 18)

	for spelling, digit := range digits {
		list = append(list, spelling, strconv.Itoa(int(digit)))
	}

	return list
}
