import React from 'react'
// container is used to definr styling properties

function Container({}) {
    return (
        <div className='w-full max-w-7xl mx-auto
            px-4'>{children}
        </div>

    )
}

export default Container
