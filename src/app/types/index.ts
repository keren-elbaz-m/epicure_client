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

export enum screenType {
    DESKTOP  = "desktop",
    MOBILE = "mobile"
}

export enum DropDownType{
    BURGER = "burger",
    SEARCH = "search", 
}