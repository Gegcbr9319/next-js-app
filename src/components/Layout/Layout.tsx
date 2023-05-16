import React, { FC } from 'react';
import { Header, Footer } from '../index';

export const Layout: FC<React.PropsWithChildren> = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);
