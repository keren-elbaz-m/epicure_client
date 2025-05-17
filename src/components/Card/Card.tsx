import Image from 'next/image';
import styles from './Card.module.scss';
import { Restaurant } from '@/types';

type CardProps = {
    item: {
      name: string;
      imageUrl: string;
      [key: string]: any; 
    };
    children?: React.ReactNode;
};

export default function Card({item, children}: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                    <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                    />
                </div>
            <div className={styles.content}>
                <h1 className={styles.name}>{item.name}</h1>  
                <div className={styles.children}>
                    {children}
                </div>         
            </div>
        </div>
    );
}