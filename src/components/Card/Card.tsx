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
    variant: SectionPart.RESTAURANT | SectionPart.DISH | SectionPart.CHEF;
};

export default function Card({item, children, variant}: CardProps) {
    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            <div className={`${styles.imageContainer} ${styles[`imageContainer--${variant}`]}`}>
                <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                />
            </div>
            <div className={`${styles.content} ${styles[`content--${variant}`]}`}>
                <h1 className={`${styles.name} ${styles[`name--${variant}`]}`}>{item.name}</h1>
                <div className={`${styles.children} ${styles[`children--${variant}`]}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}