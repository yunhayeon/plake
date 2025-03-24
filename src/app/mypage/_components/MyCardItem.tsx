import clsx from "clsx";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaUser } from "react-icons/fa6";

import { Button } from "@/components/ui/Button";
import { MyCardItemProps } from "@/types/gathering/my-card";

const MyCardItem = ({
  gathering,
  statusProps,
  buttonProps,
}: MyCardItemProps) => {
  return (
    <Link href={"/mypage"} className="flex w-full flex-col gap-4 sm:flex-row">
      <div className="relative h-[156px] w-full min-w-[280px] sm:w-[280px]">
        <Image
          src={gathering.image || "/images/gathering_default.png"}
          alt={gathering.name}
          className="h-full w-full rounded-3xl object-cover"
          fill
          sizes="(max-width: 640px) 100%"
        />
      </div>

      <div
        className={clsx(
          "flex min-w-0 flex-col justify-between sm:h-auto sm:flex-1",
          buttonProps && "h-[152px]",
        )}
      >
        <div>
          {statusProps && (
            <div className="mb-2.5 flex gap-2">
              {statusProps.map((status, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium",
                    status.className,
                  )}
                >
                  {status.label === "개설 확정" && <FaCheck size={12} />}
                  {status.label}
                </div>
              ))}
            </div>
          )}

          <div
            className={clsx(
              "mb-1.5 flex flex-wrap truncate",
              statusProps ? "items-center" : "flex-col gap-2",
            )}
          >
            <p
              className={clsx(
                "truncate text-lg font-semibold text-gray-900",
                statusProps && "after:px-2 after:content-['|']",
              )}
            >
              {gathering.name}
            </p>
            <p className="text-sm text-gray-700">{gathering.location}</p>
          </div>
          <div className="flex gap-3 text-sm font-medium text-gray-700">
            <p>{dayjs(gathering.dateTime).format("M월 DD일 · HH:mm")}</p>
            <div className="flex items-center">
              <FaUser size={12} />
              <p>
                {gathering.participantCount}/{gathering.capacity}
              </p>
            </div>
          </div>
        </div>

        {buttonProps && (
          <Button
            variant={buttonProps.variant}
            className="h-10 w-[120px]"
            onClick={buttonProps.onClick}
          >
            {buttonProps.label}
          </Button>
        )}
      </div>
    </Link>
  );
};

export default MyCardItem;
