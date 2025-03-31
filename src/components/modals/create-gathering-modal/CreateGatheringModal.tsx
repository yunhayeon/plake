"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";

import Dropdown from "@/components/common/Dropdown";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import DateTimeAndEndTimePicker from "@/components/modals/create-gathering-modal/DateTimeAndEndTimePicker";
import ImageUploader from "@/components/modals/create-gathering-modal/ImageUploader";
import ServiceSelector from "@/components/modals/create-gathering-modal/ServiceSelector";
import Modal from "@/components/modals/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { GATHERING_FORM, SERVICE_LIST } from "@/constants/gathering";
import { useCreateGathering } from "@/hooks/gathering/useCreateGathering";
import {
  CreateGatheringFormSchema,
  CreateGatheringFormType,
} from "@/schemas/gatheringSchema";
import { createFormDataFromObject } from "@/utils/form";

const labelTitleStyle = "text-base font-semibold text-gray-800";
const errorMsgStyle = "text-sm font-semibold text-red-600";

interface CreateGatheringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateGatheringModal = ({
  isOpen,
  onClose,
}: CreateGatheringModalProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: GATHERING_FORM,
    resolver: zodResolver(CreateGatheringFormSchema),
  });

  const location = useWatch({
    control,
    name: "location",
    defaultValue: GATHERING_FORM.location,
  });

  const { handleCreateGathering, isPending } = useCreateGathering();

  const onSubmit = (data: CreateGatheringFormType) => {
    const formData = createFormDataFromObject(data);
    handleCreateGathering(formData);

    onClose();
  };

  return (
    <Modal
      variant="mobileFull"
      isOpen={isOpen}
      onClose={onClose}
      title="모임 만들기"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between gap-10"
      >
        <div className="relative flex flex-col gap-4">
          <Input
            label="모임 이름"
            type="text"
            id="gathering-name"
            placeholder="모임 이름을 입력해주세요."
            {...register("name")}
            errorMsg={errors.name?.message}
          />

          <section className="flex flex-col gap-2">
            <Label className={labelTitleStyle}>선택 서비스</Label>
            <ServiceSelector
              setTypeValue={value => setValue("type", value)}
              setLocationValue={value => setValue("location", value)}
            />
            {errors.type && (
              <span className={errorMsgStyle}>{errors.type.message}</span>
            )}
          </section>
          {location !== SERVICE_LIST.ONLINE.location && (
            <section className="flex flex-col gap-2">
              <Label className={labelTitleStyle}>장소</Label>
              <Dropdown
                type="form"
                placeholder="장소를 선택해주세요."
                onSelect={value =>
                  setValue("location", value, { shouldValidate: true })
                }
              />
              {errors.location && (
                <span className={errorMsgStyle}>{errors.location.message}</span>
              )}
            </section>
          )}
          <section className="flex flex-col gap-2">
            <Label className={labelTitleStyle}>이미지</Label>
            <ImageUploader
              setValue={value =>
                setValue("image", value, { shouldValidate: true })
              }
            />
            {errors.image && (
              <span className={errorMsgStyle}>{errors.image.message}</span>
            )}
          </section>

          <DateTimeAndEndTimePicker
            setDateTimeValue={value =>
              setValue("dateTime", value, { shouldValidate: true })
            }
            setRegistrationEndValue={value =>
              setValue("registrationEnd", value, { shouldValidate: true })
            }
            dateTimeValue={getValues("dateTime")}
            registrationEndValue={getValues("registrationEnd")}
          />
          {(errors.dateTime || errors.registrationEnd) && (
            <span className={errorMsgStyle}>
              {errors?.dateTime?.message || errors?.registrationEnd?.message}
            </span>
          )}
          <section>
            <Input
              type="number"
              id="gathering-capacity"
              label="모임 정원"
              placeholder="모임 정원을 입력해주세요. (5~20)"
              {...register("capacity", { valueAsNumber: true })}
              errorMsg={errors.capacity?.message}
            />
          </section>
        </div>
        <Button variant="purple" className="w-full" type="submit">
          {isPending ? <LoadingSpinner size="xs" /> : "확인"}
        </Button>
      </form>
    </Modal>
  );
};

export default CreateGatheringModal;
