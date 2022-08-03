import React, { Children } from 'react';

function TodoHeader({children}) {
    return(
        <header>
            {children}
        </header>
    );
}

export {TodoHeader};