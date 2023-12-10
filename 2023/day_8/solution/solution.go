package solution

import (
	"fmt"
	"regexp"
	"strings"
)

var mapRE = regexp.MustCompile(`(.{3}) = \((.{3}), (.{3})\)`)

type Node struct {
	Left, Right string
}

type Map map[string]Node

type Instructions struct {
	i    *int
	coll []byte
}

func CreateInstruction(coll []byte) Instructions {
	start := 0
	return Instructions{
		i:    &start,
		coll: coll,
	}
}

func (insts *Instructions) next() byte {
	inst := insts.coll[*(insts.i)%len(insts.coll)]
	*(insts.i)++

	return inst
}

func CalculateStepsPartTwo(instructions Instructions, m Map) int {
	steps := 0
	current := findStartNodes(m)

	for inst := instructions.next(); !endsWithZ(current); inst = instructions.next() {
		steps++

		for i, node := range current {
			next := m[node].Left

			if inst == 'R' {
				next = m[node].Right
			}

			current[i] = next
		}
	}

	return steps
}

func endsWithZ(nodes []string) bool {
	for _, node := range nodes {
		if node[2] == 'Z' {
			fmt.Println(nodes)
			break
		}
	}

	for _, node := range nodes {
		if node[2] != 'Z' {
			return false
		}
	}

	return true
}

func findStartNodes(m Map) []string {
	nodes := make([]string, 0)

	for node := range m {
		if node[2] == 'A' {
			nodes = append(nodes, node)
		}
	}

	return nodes
}

func CalculateSteps(instructions Instructions, m Map) int {
	steps := 0
	current := m["AAA"]

	for {
		instruction := instructions.next()
		steps++
		next := current.Left

		if instruction == 'R' {
			next = current.Right
		}

		if next == "ZZZ" {
			return steps
		}

		current = m[next]
	}
}

func parseMap(raw string) Map {
	m := Map{}

	for _, line := range strings.Split(raw, "\n") {
		parts := mapRE.FindStringSubmatch(line)
		m[parts[1]] = Node{
			Left:  parts[2],
			Right: parts[3],
		}
	}

	return m
}

func ParseInputs(raw string) (Instructions, Map) {
	sections := strings.Split(raw, "\n\n")
	return CreateInstruction([]byte(sections[0])), parseMap(sections[1])
}
