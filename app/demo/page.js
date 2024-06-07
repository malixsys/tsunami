import React from 'react';
import { MainCanvas } from '@/components/MainCanvas';
import { UI } from '@/components/UI';
import { UIContextProvider } from '@/components/UIContext';

export default function Demo() {
  return (
    <UIContextProvider>
      <MainCanvas />
      <UI />
    </UIContextProvider>
  );
}
