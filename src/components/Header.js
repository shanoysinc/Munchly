import React from 'react';

const Header = () => {
    console.log('header rendering')
    return (
        <>
            <h1>Munch.ly<span role="img" aria-label="heart">❤️</span></h1>
        </>
    );
};

export default React.memo(Header);