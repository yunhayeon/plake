import { z } from "zod";

export const nameRegex = z
  .string()
  .regex(/^[가-힣a-zA-Z0-9]+$/, "한글, 영문, 숫자만 입력 가능합니다.");

const emailRegex = z.string().email({
  message: "유효한 이메일 주소를 입력해주세요.",
});

const passwordRegex = z
  .string()
  .min(8, { message: "8글자 이상 입력해주세요." })
  .max(20, { message: "20자 이하로 입력해주세요." })
  .regex(
    /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]+$/,
    "영문, 숫자 조합 필수, 특수문자(!@#$%^&*)는 선택사항입니다.",
  );

export const LoginFormSchema = z.object({
  email: emailRegex,
  password: passwordRegex,
});

export const JoinFormSchema = z
  .object({
    name: nameRegex
      .min(2, { message: "2글자 이상 입력해주세요." })
      .max(10, { message: "10자 이하로 입력해주세요." }),

    email: emailRegex,
    companyName: nameRegex
      .min(1, { message: "회사명을 입력해주세요." })
      .max(20, { message: "20자 이하로 입력해주세요." }),
    password: passwordRegex,
    passwordConfirm: passwordRegex,
  })
  .refine(data => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });
