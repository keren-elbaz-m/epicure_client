'use client';

import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
    children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
}