export const createFormDataFromObject = <
  T extends Record<string, string | number | File | null | undefined>,
>(
  data: T,
) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, value?.toString());
      }
    }
  });

  return formData;
};
