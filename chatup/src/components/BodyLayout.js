import React from 'react'

const BodyLayout = ({ children }) => {
    return (
        <>
            <div className='min-h-screen bg-green-100'>
                {children}
            </div>
        </>
    )
}

export default BodyLayout