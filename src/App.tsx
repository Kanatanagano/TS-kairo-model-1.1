import React from 'react';
import { DndContext } from '@dnd-kit/core';
import MainLayout from './components/orgamisms/MainLayout';


const App: React.FC = () => {
  return (
    <DndContext>
      <MainLayout />
    </DndContext>
  );
};

export default App;
