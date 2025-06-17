export const API_ROUTES = {
    BASE_URL: 'http://localhost:3000/api',
    RESTAURANTS: '/restaurants',
    DISHES: '/dish',
    CHEFS: '/chef',
    RESTAURANT_DETAILS: (id:string | number) => `/restaurants/${id}/details`,
    DISH_BY_ID: (id: string | number) => `/dish/${id}`,
}

export const API_CHEF_BY_ID = (id: number | string) => `/chef/${id}`; 


export const DISHES_BY_RESTAURANT= (restaurantId: string | number, type: DishTabLabel) =>
  `/dish/by-restaurant?restaurantId=${restaurantId}&type=${type}`;
 