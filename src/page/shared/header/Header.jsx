import React from 'react';
import Top from './component/Top';
import Bottom from './component/Bottom';
import Middle from './component/Middle';

const Header = () => {
    return (
        <div>
            <Top></Top>
            <Middle/>
            <Bottom/>
        </div>
    );
};

export default Header;