import React from 'react';
import DraggableItem from '../atoms/DraggableItem';

const Sidebar: React.FC = () => {
  const items = ['Resistor', 'DC Power', 'AC Power', 'Wire'];

  return (
    <div className="w-1/4 p-4 bg-gray-200">
      {items.map((item) => (
        <DraggableItem key={item} id={item} />
      ))}
    </div>
  );
};

export default Sidebar;