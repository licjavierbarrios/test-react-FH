import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Test en <CounterApp />", () => {
  const initialValue = 10;
  const { container, getAllByText } = render(
    <CounterApp value={initialValue} />
  );

  test("Debe hacer match con el snapshot", () => {
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor inicial de 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
    // expect(screen.getByRole('heading',{level: 2}).innerHTML).toContain('100')
  });

  test("Debe de incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("Debe de decrementar con el botón -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("debe funcionar el botón reset", () => {
    render(<CounterApp value={500} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("500")).toBeTruthy();

  });

  test("debe funcionar el botón reset 2", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("10")).toBeTruthy();
  });

  test("debe funcionar el botón reset 3", () => {
    render(<CounterApp value={500} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText("500")).toBeTruthy();

  });
});
