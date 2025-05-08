import Image from "next/image";
import empty_bag_icon from "@/app/assets/icons/cart_big_icon.svg";
import styles from "@/app/components/cart/cart.module.scss";

export default function Cart() {
  return (
    <div className={styles.container}>
      <Image src={empty_bag_icon} alt="empty bag icon" className={styles.icon} />
      <p className={styles.text}>YOUR BAG IS EMPTY</p>
    </div>
  );
}