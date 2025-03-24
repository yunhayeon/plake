export const NAV_ITEMS = [
  { name: "모임 찾기", href: "/gathering/offline" },
  { name: "찜한 모임", href: "/favorites" },
  { name: "모든 리뷰", href: "/all-reviews" },
] as const;

export const NAV_BUTTONS = [
  {
    name: "로그인",
    href: "/login",
    variant: "purple-outline",
    ariaLabel: "login-link-button",
    loggedInShow: false,
  },
  {
    name: "회원가입",
    href: "/join",
    variant: "purple",
    ariaLabel: "join-link-button",
    loggedInShow: false,
  },
  {
    name: "마이페이지",
    href: "/mypage",
    variant: "purple-outline",
    ariaLabel: "mypage-link-button",
    loggedInShow: true,
  },
  {
    name: "로그아웃",
    href: "#",
    variant: "purple",
    ariaLabel: "logout-button",
    loggedInShow: true,
  },
] as const;

export const MYPAGE_NAV_ITEMS = [
  { name: "나의 모임", href: "/mypage" },
  { name: "나의 리뷰", href: "/mypage/reviews" },
  { name: "내가 만든 모임", href: "/mypage/gathering" },
] as const;
