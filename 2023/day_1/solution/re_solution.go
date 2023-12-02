package solution

import (
	"fmt"
	"regexp"
	"strings"
)

var firstDigitRE, lastDigitRE *regexp.Regexp

var digitLookup = map[string]uint{
	"1":     1,
	"2":     2,
	"3":     3,
	"4":     4,
	"5":     5,
	"6":     6,
	"7":     7,
	"8":     8,
	"9":     9,
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

func ParseLines(calibrationDoc string) (lines []Line) {
	rawLines := strings.Split(calibrationDoc, "\n")
	for _, rawLine := range rawLines {
		lines = append(lines, Line(rawLine))
	}

	return
}

func getStrDigits() []string {
	strDigits := make([]string, 0, len(digitLookup))

	for strDigit := range digitLookup {
		strDigits = append(strDigits, strDigit)
	}

	return strDigits
}

func init() {
	anyDigit := strings.Join(getStrDigits(), "|")
	firstDigitRE = regexp.MustCompile(anyDigit)
	lastDigitRE = regexp.MustCompile(fmt.Sprintf(".*(%s)", anyDigit))
}

type Line string

func (line Line) findFirstDigit() uint {
	return digitLookup[firstDigitRE.FindString(string(line))]
}

func (line Line) findLastDigit() uint {
	return digitLookup[lastDigitRE.FindStringSubmatch(string(line))[1]]
}

func (line Line) calibrationValue() uint {
	return line.findFirstDigit()*10 + line.findLastDigit()
}

func AddCalibrationValues(lines []Line) (sum uint) {
	for _, line := range lines {
		sum += line.calibrationValue()
	}

	return
}
