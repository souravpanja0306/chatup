import React from 'react'

const BodyLayout = ({ children }) => {
    return (
        <>
            <div className='min-h-screen bg-white'>
                {children}
            </div>
        </>
    )
}

export default BodyLayout