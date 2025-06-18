import style from "@/components/Card/Card.module.scss";

export type RatingStarsProps = {
    rating: number;  
    max: 5;
    className?:string;
};

export default function RatingStars({rating, max, className}: RatingStarsProps){
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = max - fullStars - (halfStar ? 1 : 0);

    return (
        <div className={className ?? style.starRatingStyle}>
          {'★'.repeat(fullStars)}
          {halfStar && '½'}
          {'☆'.repeat(emptyStars)}
        </div>
    );
}