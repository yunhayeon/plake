import { render, screen } from "@testing-library/react";

import DateTimeTag from "../DateTimeTag";

describe("DateTimeTag 컴포넌트 테스트", () => {
  const mockDate = new Date("2024-03-10T12:34:56");

  it("type이 date일 때 날짜가 올바른 형식으로 표시된다.", () => {
    render(<DateTimeTag type="date" date={mockDate} />);

    expect(screen.getByText("3월 10일")).toBeInTheDocument();
  });

  it("type이 time일 때 시간이 올바른 형식으로 표시된다.", () => {
    render(<DateTimeTag type="time" date={mockDate} />);

    expect(screen.getByText("12:34")).toBeInTheDocument();
  });

  it("size가 small일 때 올바른 크기가 적용된다..", () => {
    render(<DateTimeTag type="date" size="small" date={mockDate} />);

    expect(screen.getByText("3월 10일")).toHaveClass("px-[6px] text-xs");
  });

  it("size가 medium일 때 올바른 크기가 적용된다. ", () => {
    render(<DateTimeTag type="date" size="medium" date={mockDate} />);

    expect(screen.getByText("3월 10일")).toHaveClass("px-2 text-sm");
  });

  it("type이 date일 때 검정색 텍스트가 적용된다.", () => {
    render(<DateTimeTag type="date" date={mockDate} />);

    expect(screen.getByText("3월 10일")).toHaveClass("text-black");
  });

  it("type이 time일 때 보라색 텍스트가 적용된다.", () => {
    render(<DateTimeTag type="time" date={mockDate} />);

    expect(screen.getByText("12:34")).toHaveClass("text-purple-600");
  });
});
