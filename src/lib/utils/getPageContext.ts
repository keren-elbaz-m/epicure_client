export function getPageContext(pathname:string){
    return{
        isRestaurants : pathname.startsWith("/restaurants"),
        isChefs : pathname.startsWith("/chefs")
    };
}