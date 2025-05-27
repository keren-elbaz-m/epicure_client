import style from '@/components/Filter/Filter.module.scss';

type Props = {
  activeTab: string;
  onTabClick: (tab: string) => void;
};

export default function TabsFilterBar({activeTab, onTabClick}: Props) {
    const tabs = ['All', 'New', 'Popular', 'Open Now'];

    return(
        <div className={style.tabsBar}>
            {tabs.map((tab)=>(
                <span 
                    key={tab} 
                    className={`${style.tab} ${activeTab === tab ? style.active : ''}`}
                    onClick={() => onTabClick(tab)}
                >
                    {tab}
                </span>
            ))}
        </div>
    )
}