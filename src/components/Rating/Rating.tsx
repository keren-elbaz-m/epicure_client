import style from "@/components/Card/Card.module.scss";

export type RatingStarsProps = {
    rating: number;  
    max: 5;
};

export default function RatingStars({rating, max}: RatingStarsProps){
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = max - fullStars - (halfStar ? 1 : 0);

    return (
        // <div style={{ fontSize: '40px', color: '#DE9200' }}>
        <div className={style.starRatingStyle}>
          {'★'.repeat(fullStars)}
          {halfStar && '½'}
          {'☆'.repeat(emptyStars)}
        </div>
    );
}