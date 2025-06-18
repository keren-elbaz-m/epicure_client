import style from "@/app/restaurants/Restaurants.module.scss";
import Filter from "@/components/Filter/Filter";

export default function RestaurantsPage() {
    return (
        <div className={style.layout}>
            <div className={style.container}>
                <h1 className={style.name}>Restaurants</h1>
                <Filter />
            </div>
        </div>
    );
}
