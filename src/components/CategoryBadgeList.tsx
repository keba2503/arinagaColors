import { PostDataType, TwMainColor } from '@/data/types';
import React, { FC } from 'react';
import Badge from '@/shared/Badge';

export interface CategoryBadgeListProps {
  className?: string;
  itemClass?: string;
  categories: PostDataType['categories'];
}

const validColors: TwMainColor[] = [
  'pink',
  'red',
  'gray',
  'green',
  'purple',
  'indigo',
  'yellow',
  'blue',
];

const isTwMainColor = (color: string): color is TwMainColor => {
  return validColors.includes(color as TwMainColor);
};

const CategoryBadgeList: FC<CategoryBadgeListProps> = ({
  className = 'flex flex-wrap space-x-2',
  itemClass,
  categories,
}) => {
  return (
    <div
      className={`nc-CategoryBadgeList ${className}`}
      data-nc-id="CategoryBadgeList"
    >
      {categories.map((item, index) => (
        <Badge
          className={itemClass}
          key={index}
          name={item.name}
          href={item.href}
          color={
            isTwMainColor(item.color ?? '')
              ? (item.color as TwMainColor)
              : undefined
          }
        />
      ))}
    </div>
  );
};

export default CategoryBadgeList;
