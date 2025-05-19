'use client'; 

import { useEffect, useState } from "react";
import styles from "@/components/dropDown/DropDown.module.scss";
import useIsDesktop from "@/hooks/useIsDesktop";
import { DropDownType } from "@/types";

interface DropDownProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  type?: DropDownType;
}

const DropDown = ({ isOpen, onClose, children, type }: DropDownProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isOpen || !isHydrated) return null;

  const dropDownClassName =
    type === DropDownType.CART
      ? isDesktop
        ? styles.cartDropDownDesktop
        : styles.cartDropDownMobile
      : styles.dropdownContainer;

  return (
    <div className={dropDownClassName} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default DropDown;