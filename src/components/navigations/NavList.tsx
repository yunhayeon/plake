import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Button } from "../ui/Button";

interface INavListProps {
  onToggle?: () => void;
  activePath?: string;
}

const NavList = ({ onToggle, activePath }: INavListProps) => {
  const pathname = usePathname();
  const currentPath = activePath || pathname;

  const navItems = [
    { name: "모임 찾기", href: "/gathering" },
    { name: "찜한 모임", href: "/favorites" },
    { name: "모든 리뷰", href: "/all-reviews" },
  ];

  const isActive = (path: string) => {
    return currentPath.startsWith(path);
  };

  return (
    <nav>
      <div className="mb-11 mt-4 flex items-center justify-between md:hidden">
        <Button
          variant="outline"
          size="sm"
          className="w-20 border-2 border-purple-600 font-semibold text-purple-600 hover:text-purple-800"
          onClick={onToggle}
        >
          로그인
        </Button>
        <Button
          size="sm"
          className="w-20 bg-purple-600 font-semibold text-white hover:bg-purple-800"
          onClick={onToggle}
        >
          회원가입
        </Button>
      </div>
      <ul className="flex flex-col gap-6 font-semibold md:flex-row md:gap-6">
        {navItems.map(item => (
          <li key={item.href}>
            <Link
              onClick={onToggle}
              href={item.href}
              className={cn(
                "transition-colors hover:text-purple-600",
                isActive(item.href)
                  ? "font-bold text-purple-600"
                  : "text-gray-700",
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
