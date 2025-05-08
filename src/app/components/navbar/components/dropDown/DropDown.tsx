import React from "react";
import style from "@/app/components/navbar/styles/DropDown.module.scss"

import { DropDownType } from "@/app/types";

interface DropDownProps{
    isOpen: boolean;
    onClose: ()=>void;
    children: React.ReactNode;
    type?: DropDownType;
}

const DropDown: React.FunctionComponent<DropDownProps> = ({ isOpen, onClose, children, type }) => {
    if (!isOpen) return null;
  
    return (
        <div className={style.dropdownContainer} onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
  
  export default DropDown;