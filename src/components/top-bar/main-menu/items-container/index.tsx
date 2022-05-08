import './style.css';
import { MenuItem } from '../menu-item';

interface ItemsContainerProps {
    activeKey: string;
}

const styles = {
    itemsContainer: 'itemsContainer',
}

export function ItemsContainer ({ activeKey }: ItemsContainerProps) {
    return <MenuItem text={activeKey}></MenuItem>
}
