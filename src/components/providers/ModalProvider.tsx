"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import ConfirmAlertModal from "@/components/modals/confirm-alert-modal/ConfirmAlertModal";

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <ConfirmAlertModal />,
    document.getElementById("modal-root")!,
  );
};

export default ModalProvider;
