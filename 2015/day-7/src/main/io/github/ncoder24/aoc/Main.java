package main.io.github.ncoder24.aoc;

import java.util.HashMap;
import java.util.Map;

public class Main {
  public static void main(String[] args) {
    Map<String, Connection> wiring = new HashMap<>();
    wiring.put("a", new DirectConnection(100));
    Circuit circuit = new Circuit(wiring);

    System.out.println(circuit.evaluateSignal("a"));
  }
}
