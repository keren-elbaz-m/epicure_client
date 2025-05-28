import style from '@/components/Filter/Filter.module.scss';
import { TabLabelToFilterMap,TabLabel } from "@/types";


type Props = {
  activeTab: TabLabel;
  onTabClick: (tab: TabLabel) => void;
};

export default function TabsFilterBar({activeTab, onTabClick}: Props) {
    const tabs = Object.entries(TabLabelToFilterMap);

    return(
        <div className={style.tabsBar}>
            {tabs.map(([label, filterValue])=>(
                <span 
                    key={label} 
                    className={`${style.tab} ${activeTab === label ? style.active : ''}`}
                    onClick={() => onTabClick(label as TabLabel)}
                >
                    {label}
                </span>
            ))}
        </div>
    )
}