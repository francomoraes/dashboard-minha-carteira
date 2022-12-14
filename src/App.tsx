import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes/appRoutes';

import { useTheme } from './hooks/themes';

const App: React.FC = () => {
    const { theme } = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AppRoutes/>
        </ThemeProvider>
    );
};

export default App;
