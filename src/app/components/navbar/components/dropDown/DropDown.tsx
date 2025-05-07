import React from "react";
import style from "@/app/components/navbar/styles/DropDown.module.scss"

type DropDownType = "burger" | "search" | "cart";

interface DropDownProps{
    isOpen: boolean;
    onClose: ()=>void;
    children: React.ReactNode;
    type?: DropDownType;
}

const DropDown: React.FunctionComponent<DropDownProps> = ({ isOpen, onClose, children, type }) => {
    if (!isOpen) return null;
  
    return (
        <div onClick={onClose}>
            <div
                className={`${type === "burger" ? style.burger : ""} ${type === "search" ? style.search : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
  
  export default DropDown;