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
    CART = "cart",
    PERSON = "person"
}

export type DropdownBehavior = {
    hideIcons: boolean;
    hideLogo: boolean;
    toggleBurgerToClose: boolean;
};

export const dropdownBehaviors: Record<DropDownType, DropdownBehavior> = {
    [DropDownType.BURGER]: {
        hideIcons: true,
        hideLogo: true,
        toggleBurgerToClose: true,
    },
    [DropDownType.SEARCH]: {
        hideIcons: true,
        hideLogo: true,
        toggleBurgerToClose: true,
    },
    [DropDownType.CART]: {
        hideIcons: false,
        hideLogo: false,
        toggleBurgerToClose: false,
    },
    [DropDownType.PERSON]: {
        hideIcons: false,
        hideLogo: false,
        toggleBurgerToClose: false,
    },
};