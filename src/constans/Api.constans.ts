export const API_ROUTES = {
    BASE_URL: 'http://localhost:3000/api',
    RESTAURANTS: '/restaurants',
    DISHES: '/dish',
    CHEFS: '/chef',
}

export const API_CHEF_BY_ID = (id: number | string) => `/chef/${id}`; 