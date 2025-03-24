import Image from "next/image";
import Link from "next/link";

import { MATCH_TITLE } from "@/constants/loginJoin";

type TLoginJoinLayoutProps = {
  page: "login" | "join";
};

const LoginJoinLayout = ({
  children,
  page,
}: React.PropsWithChildren<TLoginJoinLayoutProps>) => {
  return (
    <div className="base-wrap flex w-full flex-col items-center justify-center gap-1 py-9 md:px-16 lg:flex-row lg:justify-between lg:gap-24 xl:px-0">
      <div className="flex min-h-[240px] w-full max-w-[250px] flex-col text-center lg:max-w-[400px]">
        <h1 className="text-xl font-semibold text-gray-800 md:text-2xl">
          Welcome to Plake!
        </h1>
        <p className="mb-6 mt-2 text-sm text-gray-800 md:text-base">
          바쁜 일상 속 잠깐의 휴식,
          <br />
          이제는 플레이크와 함께 해보세요
        </p>
        <figure>
          <Image
            src="/images/login_join_img.png"
            alt="login-join-image"
            width={0}
            height={0}
            sizes="(max-width: 588px) 100vw"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </figure>
      </div>
      <div className="w-full max-w-[510px] rounded-3xl bg-white px-4 py-8">
        <h1 className="mb-8 text-center text-xl font-semibold md:text-2xl">
          {MATCH_TITLE[page].title}
        </h1>
        {children}
        <div className="text-center text-sm md:text-base">
          <span className="mr-1 text-gray-800">
            {MATCH_TITLE[page].linkMsg}
          </span>
          <Link
            href={MATCH_TITLE[page].link}
            className="text-purple-600 underline"
          >
            {MATCH_TITLE[page].linkTitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginJoinLayout;
