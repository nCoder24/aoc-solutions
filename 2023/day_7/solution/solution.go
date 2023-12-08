package solution

import (
	"fmt"
	"log"
	"slices"
	"strconv"
	"strings"
)

var CardStrengths = map[Card]int{
	"A": 12,
	"K": 11,
	"Q": 10,
	"T": 9,
	"9": 8,
	"8": 7,
	"7": 6,
	"6": 5,
	"5": 4,
	"4": 3,
	"3": 2,
	"2": 1,
	"J": 0,
}

type Card string

func (c Card) strength() int {
	return CardStrengths[c]
}

func (c Card) compare(o Card) int {
	return c.strength() - o.strength()
}

type Hand struct {
	Bid   int
	Cards []Card
}

func (h Hand) strength() int {
	fq := map[string]int{}
	jokers := 0

	for _, card := range h.Cards {
		if card == "J" {
			jokers++
			continue
		}

		fq[string(card)] += 1
	}

	occurrences := make([]int, 0, len(fq))

	for _, n := range fq {
		occurrences = append(occurrences, n)
	}

	slices.SortFunc(occurrences, func(a, b int) int {
		return b - a
	})

	if len(occurrences) == 0 {
		occurrences = append(occurrences, 0)
	}

	occurrences[0] += jokers
	return 20 - multiplyRankAndAdd(occurrences)
}

func (h Hand) compareStrength(o Hand) int {
	return h.strength() - o.strength()
}

func (h Hand) compareCardStrengths(o Hand) int {
	for i, card := range h.Cards {
		diff := card.compare(o.Cards[i])
		if diff != 0 {
			return diff
		}
	}

	return 0
}

func (h Hand) compare(o Hand) int {
	diff := h.compareStrength(o)

	if diff == 0 {
		return h.compareCardStrengths(o)
	}

	return diff
}

type Hands []Hand

func (h Hands) bids() []int {
	bids := make([]int, 0, len(h))

	for _, hand := range h {
		bids = append(bids, hand.Bid)
	}

	return bids
}

func multiplyRankAndAdd(numbers []int) int {
	result := 0

	for i, num := range numbers {
		result += num * (i + 1)
	}

	return result
}

func SolvePartTwo(input Hands) int {
	hands := make(Hands, len(input))
	copy(hands, input)

	slices.SortFunc(hands, func(a, b Hand) int {
		return a.compare(b)
	})

	for _, hand := range hands {
		fmt.Println(hand)
	}

	return multiplyRankAndAdd(hands.bids())
}

func ParseHands(raw string) Hands {
	rawHands := strings.Split(raw, "\n")
	hands := make(Hands, 0, len(rawHands))

	for _, rawHand := range rawHands {
		hands = append(hands, parseHand(rawHand))
	}

	return hands
}

func parseHand(raw string) Hand {
	rawHand := strings.Split(raw, " ")

	return Hand{
		Bid:   toInt(rawHand[1]),
		Cards: parseCards(rawHand[0]),
	}
}

func parseCards(raw string) []Card {
	cards := make([]Card, 0, len(raw))

	for _, rawCard := range raw {
		cards = append(cards, Card(rawCard))
	}

	return cards
}

func toInt(s string) int {
	i, err := strconv.Atoi(s)

	if err != nil {
		log.Fatal(err)
	}

	return i
}
