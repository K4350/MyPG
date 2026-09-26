import React from 'react';

import {
  Home,
  HomeFill,
  LunchDining,
  LunchDiningFill,
  Groups,
  GroupsFill,
  ShoppingBag,
  ShoppingBagFill,
  Person,
  PersonFill,
} from '@material-symbols-svg/react-native';

type IconName = 'home' | 'meals' | 'community' | 'market' | 'profile';

interface TabIconProps {
  name: IconName;
  color: string;
  size: number;
  focused?: boolean;
}

const TabIcon = ({
  name,
  color,
  size,
  focused = false,
}: TabIconProps) => {
  const props = {
    size,
    color,
  };

  switch (name) {
    case 'home':
      return focused ? <HomeFill {...props} /> : <Home {...props} />;

    case 'meals':
      return focused ? (
        <LunchDiningFill {...props} />
      ) : (
        <LunchDining {...props} />
      );

    case 'community':
      return focused ? (
        <GroupsFill {...props} />
      ) : (
        <Groups {...props} />
      );

    case 'market':
      return focused ? (
        <ShoppingBagFill {...props} />
      ) : (
        <ShoppingBag {...props} />
      );

    case 'profile':
      return focused ? (
        <PersonFill {...props} />
      ) : (
        <Person {...props} />
      );

    default:
      return null;
  }
};

export default TabIcon;
