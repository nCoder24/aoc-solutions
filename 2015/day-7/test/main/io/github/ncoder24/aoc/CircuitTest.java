package main.io.github.ncoder24.aoc;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

class CircuitTest {

  @Nested
  class EvaluateSignal {
    @Test
    void evaluatesSignalOfDirectlyConnectedWires() {
      Map<String, Connection> wiring = new HashMap<>();
      wiring.put("a", new DirectConnection(100));
      Circuit circuit = new Circuit(wiring);

      int signal = circuit.evaluateSignal("a");

      assertEquals(100, signal);
    }
  }
}