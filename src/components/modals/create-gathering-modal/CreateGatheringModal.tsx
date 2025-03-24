"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Dropdown from "@/components/common/Dropdown";
import DateTimeAndEndTimePicker from "@/components/modals/create-gathering-modal/DateTimeAndEndTimePicker";
import ImageUploader from "@/components/modals/create-gathering-modal/ImageUploader";
import ServiceSelector from "@/components/modals/create-gathering-modal/ServiceSelector";
import Modal from "@/components/modals/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { GATHERING_FORM } from "@/constants/gathering";
import { useCreateGathering } from "@/hooks/gathering/useCreateGathering";
import {
  CreateGatheringFormSchema,
  CreateGatheringFormType,
} from "@/schemas/gatheringSchema";

const labelTitleStyle = "text-base font-semibold text-gray-800";

const CreateGatheringModal = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateGatheringFormType>({
    mode: "onChange",
    defaultValues: GATHERING_FORM,
    resolver: zodResolver(CreateGatheringFormSchema),
  });

  const dateTimeValue = watch("dateTime");
  const registrationEndValue = watch("registrationEnd");

  const { handleCreateGathering, isPending } = useCreateGathering();

  const onSubmit = (data: CreateGatheringFormType) => {
    handleCreateGathering(data);
  };

  return (
    <Modal
      variant="mobileFull"
      isOpen={false}
      onClose={() => {}}
      title="모임 만들기"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between gap-10"
      >
        <div className="flex flex-col gap-4">
          <Input
            label="모임 이름"
            type="text"
            id="gathering-name"
            placeholder="모임 이름을 입력해주세요."
            {...register("name")}
            errorMsg={errors.name?.message}
          />

          <div className="flex flex-col gap-2">
            <Label className={labelTitleStyle}>장소</Label>
            <Dropdown
              type="form"
              placeholder="장소를 선택해주세요."
              onSelect={value => setValue("location", value)}
            />
            {errors.location && (
              <span className="text-sm text-red-500">
                {errors.location.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label className={labelTitleStyle}>이미지</Label>
            <ImageUploader setValue={value => setValue("image", value)} />
            {errors.image && (
              <span className="text-sm text-red-500">
                {errors.image.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label className={labelTitleStyle}>선택 서비스</Label>
            <ServiceSelector setTypeValue={value => setValue("type", value)} />
            {errors.type && (
              <span className="text-sm text-red-500">
                {errors.type.message}
              </span>
            )}
          </div>
          <DateTimeAndEndTimePicker
            setDateTimeValue={value => setValue("dateTime", value)}
            setRegistrationEndValue={value =>
              setValue("registrationEnd", value)
            }
            dateTimeValue={dateTimeValue}
            registrationEndValue={registrationEndValue}
          />
          {(errors.dateTime || errors.registrationEnd) && (
            <span className="text-sm text-red-500">
              {errors?.dateTime?.message || errors?.registrationEnd?.message}
            </span>
          )}
          <div>
            <Input
              type="number"
              id="gathering-capacity"
              label="모임 정원"
              placeholder="모임 정원을 입력해주세요. (5~20)"
              {...register("capacity", { valueAsNumber: true })}
              errorMsg={errors.capacity?.message}
            />
          </div>
        </div>
        <Button variant="purple" className="w-full" type="submit">
          {isPending ? "생성중..." : "확인"}
        </Button>
      </form>
    </Modal>
  );
};

export default CreateGatheringModal;
