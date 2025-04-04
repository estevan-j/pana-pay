// Define interface for form entry
export interface EntryForm {
    MsgId: string;
    CreDtTm: string;
    NbOfTxs: string;
    SttlmMtd: string;
    InstgAgt: string;
    InstdAgt: string;
    Type: string;
    ChnlId: string;
    Nm: string;
    DocTp: string;
    DocId: string;
    AcctTp: string;
    AcctId: string;
    Cred1: string;
    Value1: string;
    OperationType: string;
}


export interface OutputForm {
    MsgId: string;
    CreDtTm: string;
    NbOfTxs: string;
    SttlmMtd: string;
    InstgAgt: string;
    InstdAgt: string;
    Type: string;
    ChnlId: string;
    OrgnlMsgId: string;
    OrgnlMgeType: string;
    OrgnlCreDtTm: string;
    TxSts: string;
    RsnCd: string;
    AddtlInf: string;
    IBAN: string;
    Cred1: string;
    Value1: string;
    Cred2: string;
    Value2: string;
    Cred3: string;
    Value3: string;
    SttlmDt: string;
}

// Protected Route Component
export interface ProtectedRouteProps {
    element: React.ReactElement;
    allowedRouteIds: string[];
}
// Header Component
export interface HeaderProps {
    user: string;
    onHomeClick: () => void;
    onLogout: () => void;
}
// Mobile Header Component
export interface MobileHeaderProps {
    onToggleMenu: () => void;
    onHomeClick: () => void;
    onLogout: () => void;
    isMenuOpen: boolean;
}
// Main Dashboard Menu Component
export interface DashboardMenuProps {
    role: string;
    menuState: {
        admin: boolean;
        services: boolean;
        financial: boolean;
    };
    toggleMenu: (menuKey: string) => void;
    activeMenuItem: string;
    handleNavigation: (route: string, menuItem: string) => void;
    menuItems: {
        serviciosItems: any[];
        adminItems: any[];
        financialItems: any[];
    };
}
// Mobile Sidebar Component
export interface MobileSidebarProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}