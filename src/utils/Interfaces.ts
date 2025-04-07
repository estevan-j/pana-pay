
import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  path: string;
}

export interface MenuSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  items: MenuItem[];
  activeMenuItem: string;
  handleMenuClick: (route: string, menuItem: string) => void;
}

// Actualizando o añadiendo interfaces para la autenticación
export interface HeaderProps {
  user: string | null;
  onHomeClick: () => void;
  onLogout: () => void;
}

export interface MobileHeaderProps {
  onToggleMenu: () => void;
  onHomeClick: () => void;
  onLogout: () => void;
  isMenuOpen: boolean;
}

export interface MobileSidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

// Añadiendo interfaces para formularios de entrada y salida
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
  [key: string]: string;
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
  [key: string]: string;
}
