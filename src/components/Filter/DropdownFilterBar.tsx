import style from '@/components/Filter/Filter.module.scss';
import Image from 'next/image';

export default function DropdownFilterBar({className}: {className?: string}) {
    const filters = ['Price Range', 'Distance', 'Rating'];

    return(
        <div className={`${className ?? ''} ${style.dropdownBar}`}>
        {filters.map((label) => (
            <span key={label} className={style.dropdownItem}>
                <span className={style.innerContent}>{label}</span>
                <Image src="/images/icons/dropdownArrow.svg" alt="dropdown arrow" className={style.icon} width={24} height={24} />
            </span>
        ))}
        </div>
    )
}