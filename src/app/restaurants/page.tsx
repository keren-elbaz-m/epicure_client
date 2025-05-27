import TabsFilterBar from "@/components/Filter/TabsFilterBar";
import DropdownFilterBar from "@/components/Filter/DropdownFilterBar";
import style from "@/app/restaurants/Restaurants.module.scss";

export default function RestaurantsPage() {
  
    return (
      <div>
        <h1 className={style.name}>Restaurants</h1>
        <TabsFilterBar activeTab="All" />
        <DropdownFilterBar className={style.desktopOnly}/>
      </div>
    );
  }