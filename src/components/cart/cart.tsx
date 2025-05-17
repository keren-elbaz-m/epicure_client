'use client';

import Image from "next/image";
import empty_bag_icon from "@/assets/icons/cart_big_icon.svg";
import styles from "@/components/cart/cart.module.scss";
import { useScreenType } from "@/hooks/useScreenType";
import { screenType } from "@/types";

export default function Cart() {
  const screen = useScreenType();
  const isDesktop=screen===screenType.DESKTOP;

  return (
    <div
      className={isDesktop ? styles.cartDropDownDesktop : styles.cartDropDownMobile}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.wrapper}>
        <Image src={empty_bag_icon} alt="empty bag icon"   className={isDesktop ? styles.iconDesktop : styles.iconMobile} />
        <p className={styles.text}>YOUR BAG IS EMPTY</p>
      </div>
      <button
        className={`${styles.orderHistoryButton} ${!isDesktop ? styles.hidden : ""}`}
      >
        ORDER HISTORY
      </button>
    </div>
  );
}