import { ReactNode } from 'react';
import * as Icons from '@rsuite/icons';

interface MenuItemProps {
    children?: ReactNode;
    icon?: string;
    text?: string;
}

export const IconTypes = {
    'PieChart' : Icons.PieChart,

}

function ContentMenuItem ({ children }: { children?: ReactNode }) {
    return <div>{ children }</div>
}

export function MenuItem ({ children, text, icon }: MenuItemProps) {
    if (children)
        return <ContentMenuItem>{ children }</ContentMenuItem>

    return <div>{ text }</div>
}
