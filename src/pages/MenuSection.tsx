import React from 'react';
import { ChevronDown } from 'lucide-react';

interface MenuSectionProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    items: { id: string; label: string; route: string }[];
    activeMenuItem: string;
    handleMenuClick: (route: string, menuItem: string) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, isOpen, onToggle, items, activeMenuItem, handleMenuClick }) => (
    <div className="mb-4">
        <button
            className="w-full flex items-center justify-between p-2 text-menu font-bold hover:bg-gray-100 rounded"
            onClick={onToggle}
        >
            {title}
            <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
            <div className="ml-2 space-y-1">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`menu-item ${activeMenuItem === item.id ? 'active' : ''}`}
                        onClick={() => handleMenuClick(item.route, item.id)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        )}
    </div>
);

export default MenuSection;