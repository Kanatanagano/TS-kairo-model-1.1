import React from 'react';
import { useDraggable } from '@dnd-kit/core';

interface DraggableItemProps {
  id: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
    
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-4 bg-blue-500 text-white rounded mb-2 cursor-grab">
      {id}
    </div>
  );
};

export default DraggableItem;