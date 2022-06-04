import React, {FC, ReactNode} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Filters from "../Filters/Filters";

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className='layout'>
            <Navbar className='layout__navbar navbar'/>
            <main className='layout__main'>
                <div className='layout__container'>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;