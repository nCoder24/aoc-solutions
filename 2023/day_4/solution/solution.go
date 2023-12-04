package solution

import (
	"regexp"
	"strconv"
	"strings"
)

var pipeSep = regexp.MustCompile(`\s+\|\s+`)
var colonSep = regexp.MustCompile(`:\s+`)
var spaceSep = regexp.MustCompile(`\s+`)

type Card struct {
	available IntSet
	win       IntSet
	qty       int
}

type Cards map[int]Card

type IntSet struct {
	lookup map[int]bool
}

func (set IntSet) has(val int) bool {
	return set.lookup[val]
}

func (set IntSet) all() []int {
	all := make([]int, 0)

	for number := range set.lookup {
		all = append(all, number)
	}

	return all
}

func (set IntSet) add(val int) {
	set.lookup[val] = true
}

func newIntSet() IntSet {
	return IntSet{map[int]bool{}}
}

func toIntSet(list []string) IntSet {
	set := newIntSet()

	for _, strVal := range list {
		num, _ := strconv.Atoi(strVal)
		set.add(num)
	}

	return set
}

func parseCard(line string) Card {
	cardInfo := pipeSep.Split(colonSep.Split(line, -1)[1], -1)

	return Card{
		available: toIntSet(spaceSep.Split(cardInfo[1], -1)),
		win:       toIntSet(spaceSep.Split(cardInfo[0], -1)),
	}
}

func ParseCards(raw string) Cards {
	cards := Cards{}

	for i, line := range strings.Split(raw, "\n") {
		cards[i+1] = parseCard(line)
	}

	return cards
}

func (card Card) point() int {
	point := 0

	for _, number := range card.win.all() {
		if !card.available.has(number) {
			continue
		}

		if point == 0 {
			point = 1
			continue
		}

		point *= 2
	}

	return point
}

func CalculatePoints(cards Cards) int {
	point := 0

	for _, card := range cards {
		point += card.point()
	}

	return point
}
