import React from "react";
import { IconType } from "react-icons";

type Props = {
  onClick: () => void;
  label: string;
  icon?: IconType;
};

function MenuItem({ onClick, label, icon: Icon }: Props) {
  // This component represents a single item in a menu.
  // It receives a 'label' to display, an 'icon' to show next to the label,
  // and an 'onClick' function to call when the item is clicked.
  return (
    <div
      className="flex justify-between items-center space-between px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      onClick={onClick}
    >
      {/* If an icon is provided, it is rendered here. */}
      {Icon && <Icon size={20} className="order-last" />}
      {label}
    </div>
  );
}

export default MenuItem;