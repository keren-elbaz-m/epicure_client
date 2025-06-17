import React, { useState } from "react";
import style from "@/components/DishModal/DishModal.module.scss";
import close_icon from "../../../public/images/icons/close.svg"; 
import { Dish, DishSideOption, DishChangeOption, DishCustomization } from "@/types";
import Image from "next/image";

type Props = {
  dish: Dish;
  onClose: () => void;
};

export default function DishModal({ dish, onClose }: Props) {

    const [customization, setCustomization] = useState<DishCustomization>({
        side:null, 
        changes:[], 
        quantity:1, 
    })

    const handleSideChange = (side: DishSideOption)=>{
        setCustomization(prev => ({...prev, side}));
    }
    
    const handleToggleChange = (change: DishChangeOption) =>{
        setCustomization(prev => {
            const isActive = prev.changes.includes(change);
            const changes = isActive ? prev.changes.filter(c=> c!== change) : [...prev.changes, change];
            return {...prev, changes};
        });
    }

    const increment = () => setCustomization(prev => ({
        ...prev,
        quantity: prev.quantity + 1,
    }));

    const decrement = () => setCustomization(prev => ({
        ...prev,
        quantity: Math.max(1, prev.quantity - 1),
    }));

    return (
        <>
            <div className={style.overlay} >
                <div className={style.closeWrapper}>
                    <button className={style.closeButton} onClick={onClose}>
                        <Image src={close_icon} alt="close icon" />
                    </button>
                </div>
                <div className={style.modal}>
                    {/* <button className={style.closeButton} onClick={onClose}>×</button> */}

                    <Image className={style.image} src={dish.imageUrl} alt={dish.name} width={576} height={292}/>

                    <div className={style.content}>
                    <h2>{dish.name}</h2>
                    <p className={style.description}>{dish.ingredients}</p>
                    <p className={style.price}>{dish.price} ₪</p>

                    <div className={style.sectionTitle}>Choose a side</div>
                    {Object.values(DishSideOption).map((option) => (
                        <label key={option}>
                        <input
                            type="radio"
                            name="side"
                            checked={customization.side === option}
                            onChange={() => handleSideChange(option)}
                        />
                        {option}
                        </label>
                    ))}

                    <div className={style.sectionTitle}>Changes</div>
                    {Object.values(DishChangeOption).map((option) => (
                        <label key={option}>
                        <input
                            type="checkbox"
                            checked={customization.changes.includes(option)}
                            onChange={() => handleToggleChange(option)}
                        />
                        {option}
                        </label>
                    ))}

                    <div className={style.sectionTitle}>Quantity</div>
                    <div className={style.quantityControl}>
                        <button onClick={decrement}>−</button>
                        <span>{customization.quantity}</span>
                        <button onClick={increment}>+</button>
                    </div>

                    <button className={style.addButton}>
                        ADD TO BAG
                    </button>
                    </div>
                </div>
            </div>
        </>
    );
}