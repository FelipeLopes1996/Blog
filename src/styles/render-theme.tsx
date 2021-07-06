import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { BlogThemeProvider } from '../context/changeThema';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<BlogThemeProvider>{children}</BlogThemeProvider>);
};
