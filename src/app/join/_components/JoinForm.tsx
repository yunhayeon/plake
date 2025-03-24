"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";

import userSignUpAction from "@/actions/user-signup-action";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { JOIN_INPUTS } from "@/constants/loginJoin";
import useDebounce from "@/hooks/useDebounce";
import { JoinFormSchema } from "@/schemas/loginJoinSchema";
import useModalStore from "@/stores/useModalStore";

export type TJoinForm = z.infer<typeof JoinFormSchema>;
export type TErrorMsg = {
  code: string;
  message: string;
  parameter?: string;
};
export interface IRegisterWithValidation {
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const JoinForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setError,
  } = useForm<TJoinForm>({
    resolver: zodResolver(JoinFormSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const router = useRouter();

  const [state, formAction] = useFormState(userSignUpAction, null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { openAlert } = useModalStore();

  useEffect(() => {
    if (state && !state.status) {
      const error: TErrorMsg = JSON.parse(state.error);
      const errorField = error.parameter
        ? (error.code as keyof TJoinForm)
        : "email";

      setError(
        errorField,
        {
          type: "validate",
          message: error.message,
        },
        { shouldFocus: true },
      );

      setIsSubmitting(false);
    } else if (state && state.status) {
      openAlert("회원가입이 완료되었습니다.");
      router.replace("/login");
    }
  }, [state, setError, router, openAlert]);

  const registerWithValidation = (
    name: keyof TJoinForm,
  ): IRegisterWithValidation => {
    const baseRegister = register(name);

    return {
      ...baseRegister,
      onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
        baseRegister.onBlur(e);
        trigger(name);
      },
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        baseRegister.onChange(e);
        debouncedValidation(name);
      },
    };
  };

  const debouncedValidation = useDebounce(fieldName => {
    trigger(fieldName);
  }, 1000);

  const onSubmit = handleSubmit(data => {
    setIsSubmitting(true);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    formAction(formData);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      {JOIN_INPUTS.map(input => (
        <Input
          {...registerWithValidation(input.id as keyof TJoinForm)}
          key={input.id}
          id={input.id}
          type={input.type}
          label={input.label}
          disabled={isSubmitting}
          placeholder={input.placeholder}
          errorMsg={errors[input.id as keyof TJoinForm]?.message}
        />
      ))}
      <Button
        variant={"purple"}
        type="submit"
        className="mb-6 mt-10 h-[40px] text-sm font-semibold md:text-base"
        aria-label="join-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? <LoadingSpinner size="xs" /> : "회원가입"}
      </Button>
    </form>
  );
};

export default JoinForm;
