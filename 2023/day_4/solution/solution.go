package solution

import (
	"math"
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
		qty:       1,
	}
}

func ParseCards(raw string) []Card {
	cards := make([]Card, 0)

	for _, line := range strings.Split(raw, "\n") {
		cards = append(cards, parseCard(line))
	}

	return cards
}

func (card Card) matches() int {
	matches := 0

	for _, number := range card.win.all() {
		if card.available.has(number) {
			matches++
		}
	}

	return matches
}

func (card Card) point() int {
	matches := card.matches()

	if matches == 0 {
		return 0
	}

	return int(math.Pow(2, float64(matches-1)))
}

func CalculatePoints(cards []Card) int {
	point := 0

	for _, card := range cards {
		point += card.point()
	}

	return point
}

func process(cards []Card) {
	for i, card := range cards {
		for id := i + 1; id <= i+card.matches(); id++ {
			if id >= len(cards) {
				return
			}

			cards[id].qty += card.qty
		}
	}
}

func CalculateTotalCards(cards []Card) int {
	total := 0
	process(cards)

	for _, card := range cards {
		total += card.qty
	}

	return total
}
