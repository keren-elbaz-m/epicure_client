import { Restaurant } from '@/types/index'

export const restaurants: Restaurant[] = [
    {
        id: 1,
        imageUrl: "/images/restaurants/claro.png",
        name: "claro",
        chefName: "Ran Shmueli",
        isOpen: true,
        rating: 4,
        location: { lat: 32.071, lng: 34.769 },
        isNew: false,
        isPopular: true,
        priceRange: { min: 100, max: 300 },
        distance: 2.5,
        menu: {
            breakfast: [1,5,6,9], lunch: [7,8], dinner: [2,3,5,7]
        },
        dishIds: [1, 2, 3, 5, 6, 7, 8, 9],
    },
    {
        id: 2,
        imageUrl: "/images/restaurants/lumina.png",
        name: "lumina",
        chefName: "Meir Adoni",
        isOpen: true,
        rating: 3,
        location: { lat: 32.071, lng: 34.769 },
        isNew: true,
        isPopular: true,
        priceRange: { min: 100, max: 300 },
        distance: 2.5,
        menu: {
            breakfast: [1,2,3], lunch: [2,3], dinner: [1]
        },
        dishIds: [1, 2,3],
    },
    {
        id: 3,
        imageUrl: "/images/restaurants/tiger_lily.png",
        name: "Tiger Lily",
        chefName: "Yanir Green",
        isOpen: true,
        rating: 4,
        location: { lat: 32.071, lng: 34.769 },
        isNew: false,
        isPopular: true,
        priceRange: { min: 100, max: 300 },
        distance: 2.5,
        menu: {
            breakfast: [4,7], lunch: [3], dinner: [7]
        },
        dishIds: [3,4,7],
    },
    {
        id: 4,
        imageUrl: "/images/restaurants/kab_kem.png",
        name: "Kab Kam",
        chefName: "Yariv Malili",
        isOpen: true,
        rating: 1,
        location: { lat: 32.071, lng: 34.769 },
        isNew: false,
        isPopular: false,
        priceRange: { min: 100, max: 300 },
        distance: 2.5,
        menu: {
            breakfast: [3,7], lunch: [1,9], dinner: [1,3,7]
        },
        dishIds: [1, 3,7,9],
    },
    {
        id: 5,
        imageUrl: "/images/restaurants/messa.png",
        name: "Messa",
        chefName: "Aviv Moshe",
        isOpen: false,
        rating: 3,
        location: { lat: 32.071, lng: 34.769 },
        isNew: false,
        isPopular: false,
        priceRange: { min: 100, max: 300 },
        distance: 2.5,
        dishIds: [1, 6,7],
        menu: {
            breakfast: [1,6], lunch: [6], dinner: [7]
        },
        
    },
    {
        id: 6,
        imageUrl: "/images/restaurants/nithan_thai.png",
        name: "Nithan Thai",
        chefName: "Shahaf Shabtay",
        isOpen: true,
        rating: 5,
        location: { lat: 32.071, lng: 34.769 },
        isNew: false,
        isPopular: true,
        priceRange: { min: 100, max: 300 },
        distance: 2.5,
        menu: {
            breakfast: [1,4,5], lunch: [2,3], dinner: [6,7,8]
        },
        dishIds: [1, 2, 3, 4, 5, 6, 7, 8],
    },

    {
        id: 7,
        imageUrl: "/images/restaurants/yapan.png",
        name: "Yapan",
        chefName: "Yuval Ben Moshe",
        isOpen: true,
        rating: 2,
        location: { lat: 32.071, lng: 34.769 },
        isNew: false,
        isPopular: false,
        priceRange: { min: 100, max: 300 },
        distance: 2.5,
        menu: {
            breakfast: [1,2], lunch: [1,5], dinner: [3,5,9]
        },
        dishIds: [1, 2, 3, 5,9],
    },

]