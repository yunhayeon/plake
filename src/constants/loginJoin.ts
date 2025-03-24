export const MATCH_TITLE = {
  login: {
    title: "로그인",
    linkMsg: "플레이크가 처음이신가요?",
    linkTitle: "회원가입",
    link: "/join",
  },
  join: {
    title: "회원가입",
    linkMsg: "이미 회원이신가요?",
    linkTitle: "로그인",
    link: "/login",
  },
} as const;

export const JOIN_INPUTS = [
  {
    id: "name",
    type: "text",
    label: "이름",
    placeholder: "이름을 입력해주세요.",
  },
  {
    id: "email",
    type: "email",
    label: "아이디",
    placeholder: "이메일을 입력해주세요.",
  },
  {
    id: "companyName",
    type: "text",
    label: "회사명",
    placeholder: "회사명을 입력해주세요.",
  },
  {
    id: "password",
    type: "password",
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요.",
  },
  {
    id: "passwordConfirm",
    type: "password",
    label: "비밀번호 확인",
    placeholder: "비밀번호를 다시 한 번 입력해주세요.",
  },
] as const;

export const LOGIN_INPUTS = [
  {
    id: "email",
    type: "email",
    label: "아이디",
    placeholder: "이메일을 입력해주세요.",
  },
  {
    id: "password",
    type: "password",
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요.",
  },
] as const;
