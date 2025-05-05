export type Restaurant = {
    id: number;
    imageUrl: string;
    name: string;
    chefName: string;
    isOpen: boolean;
    rating: number;
    location: {
        lat: number;
        lng: number;
    };
    isNew: boolean;
    isPopular: boolean;
    priceRange: {
        min: number;
        max: number;
    };
    distance: number;
    menu: {
        breakfast: string[];
        lunch: string[];
        dinner: string[];
    };
};