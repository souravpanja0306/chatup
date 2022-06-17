import React from 'react'

const BodyLayout = ({ children }) => {
    return (
        <>
            <div className='min-h-screen'>
                {children}
            </div>
        </>
    )
}

export default BodyLayout