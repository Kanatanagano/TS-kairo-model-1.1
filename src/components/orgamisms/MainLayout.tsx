import React from 'react';
import Sidebar from '../molecules/Sidebar';
import DroppableContainer from '../atoms/DroppableContainer';


const MainLayout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <DroppableContainer />
    </div>
  );
};

export default MainLayout;