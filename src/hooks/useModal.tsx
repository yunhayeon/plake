import { useCallback, useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    onClose,
    onOpen,
  };
}
