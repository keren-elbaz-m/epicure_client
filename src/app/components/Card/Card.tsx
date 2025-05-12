'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';
import { Restaurant } from '@/app/types';

interface CardProps {
    restaurant: Restaurant;
    children?: React.ReactNode;
}

export default function Card({ restaurant, children}: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                    <Image
                        src={restaurant.imageUrl}
                        alt={restaurant.name}
                        fill
                        className={styles.image}
                    />
                </div>
            <div className={styles.content}>
                {children || <h3 className={styles.name}>{restaurant.name}</h3>}
            </div>
        </div>
    );
}