import { render, screen } from "@testing-library/react";

import DateTimeTag from "../DateTimeTag";

describe("DateTimeTag 컴포넌트 테스트", () => {
  const mockDate = new Date("2024-03-10T12:34:56");

  it("date prop에 날짜를 지정하면 날짜와 시간을 표시한다.", () => {
    render(<DateTimeTag date={mockDate} />);

    expect(screen.getByText("3월 10일")).toBeInTheDocument();
    expect(screen.getByText("12:34")).toBeInTheDocument();
  });

  it("size가 small일 때 올바른 크기가 적용된다.", () => {
    render(<DateTimeTag size="small" date={mockDate} />);

    expect(screen.getByText("3월 10일")).toHaveClass("px-[6px] text-xs");
    expect(screen.getByText("12:34")).toHaveClass("px-[6px] text-xs");
  });

  it("size가 medium일 때 올바른 크기가 적용된다. ", () => {
    render(<DateTimeTag size="medium" date={mockDate} />);

    expect(screen.getByText("3월 10일")).toHaveClass("px-2 text-sm");
    expect(screen.getByText("12:34")).toHaveClass("px-2 text-sm");
  });
});
