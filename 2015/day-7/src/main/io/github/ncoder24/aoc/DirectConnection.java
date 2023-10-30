package main.io.github.ncoder24.aoc;

public class DirectConnection implements Connection {
  private final int signal;
  private final String[] wires;
  private final String gate;
  public DirectConnection(int signal) {
    this.signal = signal;
    this.wires = new String[]{};
    this.gate = null;
  }

  @Override
  public boolean isDirect() {
    return true;
  }

  @Override
  public String getGate() {
    return gate;
  }

  @Override
  public int getSignal() {
    return signal;
  }

  public String[] getWires() {
    return wires;
  }
}
