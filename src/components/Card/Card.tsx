import Image from 'next/image';
import styles from './Card.module.scss';
import { Restaurant } from '@/types';
import { SectionPart } from '@/types';

type CardProps = {
    item: {
      name: string;
      imageUrl: string;
      [key: string]: any; 
    };
    children?: React.ReactNode;
    variant: SectionPart.RESTAURANT | SectionPart.DISH | SectionPart.CHEF | SectionPart.CHEF_RESTAURANT;
};

export default function Card({item, children, variant}: CardProps) {
    return (
        <div className={`${styles.cardWrapper} ${styles[`cardWrapper--${variant}`]}`}>
            <div className={`${styles.card} ${styles[variant]}`}>
                <div className={`${styles.imageContainer} ${styles[`imageContainer--${variant}`]}`}>
                    <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                    />
                </div>

                {variant !== SectionPart.CHEF && (
                    <div className={`${styles.content} ${styles[`content--${variant}`]}`}>
                        <h2 className={`${styles.name} ${styles[`name--${variant}`]}`}>{item.name}</h2>
                        <div className={`${styles.children} ${styles[`children--${variant}`]}`}>
                            {children}
                        </div>
                    </div>
                )}

                {variant === SectionPart.CHEF && (
                    <h2 className={`${styles.name} ${styles[`name--${variant}`]}`}>{item.name}</h2>
                )}
            </div>

            {variant === SectionPart.CHEF && (
                <div className={`${styles.children} ${styles[`children--${variant}`]}`}>
                    {children}
                </div>
            )}
        </div>
    );
}