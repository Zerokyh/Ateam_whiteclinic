import React from 'react';

export type IconProps = {
  component: React.ElementType;
};

const RIcon: React.FC<IconProps> = ({ component: Component }) => {
  return <Component />;
};

export default RIcon;
