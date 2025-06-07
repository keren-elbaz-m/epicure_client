import Image from 'next/image';
import styles from './Card.module.scss';
import { SectionPart } from '@/types';
import { RestaurantItem, DishItem, ChefItem } from '@/types';

type CardProps =
  | { 
        variant: SectionPart.RESTAURANT | SectionPart.RESTAURANT_WIDE; 
        item: RestaurantItem; children?: React.ReactNode 
    }
  | { 
    variant: SectionPart.DISH; 
    item: DishItem; children?: React.ReactNode 
    } 
  | { 
    variant: SectionPart.CHEF | SectionPart.CHEF_RESTAURANT; 
    item: ChefItem; children?: React.ReactNode 
};

const getClassName = (
  base: string,
  variant?: SectionPart,
  additionalClasses: string[] = []
): string => {
  return [styles[base], variant && styles[`${base}--${variant}`], ...additionalClasses]
    .filter(Boolean)
    .join(" ");
};

export default function Card({item, children, variant}: CardProps) {
    const isChefVariant = variant === SectionPart.CHEF;

    return (
    <article className={getClassName("cardWrapper", variant)} aria-label={`${variant} card for ${item.name}`}>
      <div className={getClassName("card", variant)}>
        <div className={getClassName("imageContainer", variant)}>
          <Image
            src={item.imageUrl}
            alt={`${variant === SectionPart.CHEF ? "Portrait of" : "Image of"} ${item.name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {!isChefVariant ? (
          <div className={getClassName("content", variant)}>
            <h2 className={getClassName("name", variant)}>{item.name}</h2>
            {children && (
              <div className={getClassName("children", variant)}>
                {children}
              </div>
            )}
          </div>
        ) : (
          <h2 className={getClassName("name", variant)}>{item.name}</h2>
        )}
      </div>

      {isChefVariant && children && (
        <div className={getClassName("children", variant)}>
          {children}
        </div>
      )}
    </article>
  );

}