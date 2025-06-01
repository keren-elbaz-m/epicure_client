import style from '@/components/Filter/Filter.module.scss';

type TabsFilterBarProps<TTab extends string> = {
  activeTab: TTab;
  tabLabels: TTab[];
  setActiveTab: (tab: TTab) => void;
};

export default function TabsFilterBar<TTab extends string>({
  activeTab,
  tabLabels,
  setActiveTab,
}: TabsFilterBarProps<TTab>) {
  return (
    <div className={style.tabsBar}>
      {tabLabels.map((label) => (
        <span
          key={label}
          onClick={() => setActiveTab(label)}
            className={`${style.tab} ${activeTab === label ? style.active : ''}`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}