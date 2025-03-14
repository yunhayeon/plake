import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "../Button";

describe("Button 컴포넌트 테스트", () => {
  describe("기본 렌더링 테스트", () => {
    it("버튼이 정상적으로 렌더링된다.", () => {
      render(<Button>테스트 버튼</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveTextContent("테스트 버튼");
    });

    it("기본 variant와 size가 적용된다.", () => {
      render(<Button>테스트 버튼</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-9", "px-4", "py-2");
    });
  });

  describe("variant 테스트", () => {
    it("purple variant가 올바르게 적용된다.", () => {
      render(<Button variant="purple">테스트 버튼</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "bg-purple-600",
        "text-white",
        "hover:bg-purple-700",
        "rounded-xl",
        "text-base",
        "font-semibold",
      );
    });

    it("purple-outline variant가 올바르게 적용된다.", () => {
      render(<Button variant="purple-outline">테스트 버튼</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "border-purple-600",
        "text-purple-600",
        "rounded-xl",
        "text-base",
        "font-semibold",
        "hover:bg-gray-100",
      );
    });

    it("gray variant가 올바르게 적용된다.", () => {
      render(<Button variant="gray">테스트 버튼</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "bg-gray-400",
        "text-white",
        "hover:bg-gray-500",
        "rounded-xl",
        "text-base",
        "font-semibold",
      );
    });

    it("gray-outline variant가 올바르게 적용된다.", () => {
      render(<Button variant="gray-outline">테스트 버튼</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "border-gray-400",
        "text-gray-400",
        "rounded-xl",
        "text-base",
        "font-semibold",
        "hover:bg-gray-100",
      );
    });
  });

  describe("Size 테스트", () => {
    it("sm size가 올바르게 적용된다.", () => {
      render(<Button size="sm">테스트 버튼</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-8", "rounded-md", "px-3", "text-xs");
    });

    it("lg size가 올바르게 적용된다.", () => {
      render(<Button size="lg">테스트 버튼</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-10", "rounded-md", "px-8");
    });
  });

  describe("ARIA 속성 테스트", () => {
    it("aria-label이 올바르게 적용된다.", () => {
      render(<Button aria-label="테스트 버튼">테스트 버튼</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-label", "테스트 버튼");
    });

    it("aria-disabled가 올바르게 적용된다.", () => {
      render(<Button aria-disabled>테스트 버튼</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-disabled", "true");
    });
  });

  describe("이벤트 핸들링 테스트", () => {
    it("클릭 이벤트가 정상적으로 동작한다.", async () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>테스트 버튼</Button>);
      const button = screen.getByRole("button");
      await userEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("disabled 상태에서는 클릭이 동작하지 않는다.", async () => {
      const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} disabled>
          테스트 버튼
        </Button>,
      );
      const button = screen.getByRole("button");
      await userEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("asChild 테스트", () => {
    it("asChild prop이 올바르게 적용된다.", () => {
      render(
        <Button asChild>
          <a href="/test">링크</a>
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("href", "/test");
    });
  });
});
