'use client';

import React from "react";
import useEmblaCarousel from 'embla-carousel-react';
import styles from './Carousel.module.scss';

interface CarouselProps {
    children: React.ReactNode;
    loop?: boolean;
}

export default function Carousel({ children, loop = false }: CarouselProps) {
    const [emblaRef] = useEmblaCarousel({
        align: 'start',
        slidesToScroll: 1,
        containScroll: 'trimSnaps',
        loop: loop ?? false
    });

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carousel} ref={emblaRef}>
                <div className={styles.slideContainer}>
                    {children}
                </div>
            </div>
        </div>
    );
}