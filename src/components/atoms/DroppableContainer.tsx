import React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface DroppableContainerProps {
  children?: React.ReactNode;
}

const DroppableContainer: React.FC<DroppableContainerProps> = ({ children }) => {
  const { setNodeRef } = useDroppable({ id: 'droppable' });

  return (
    <div ref={setNodeRef} className="flex-grow p-4 bg-gray-100 rounded">
      {children}
    </div>
  );
};

export default DroppableContainer;