import React, { FC } from "react";

export interface SaleOffBadgeProps {
  className?: string;
  desc?: string;
}

const SaleOffBadge: FC<SaleOffBadgeProps> = ({
  className = "",
  desc = "",
}) => {
  return (
    <div></div>
  );
};

export default SaleOffBadge;
