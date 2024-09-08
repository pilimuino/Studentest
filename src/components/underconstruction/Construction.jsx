import React from 'react';
import UnderConstruction from '@/assets/images/UnderConstruction.png'

const Construction = () => {

    return (
        <div data-testid="construction-background" 
                    style={{ 
                        backgroundImage: `url(${UnderConstruction})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        width: 'calc(100vw - 60px)',   
                        height: 'calc(100vh - 60px)',
                        borderRadius: '10px',
                        border: '1px solid #a6a6a6',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        paddingTop: '50px', 
                        paddingBottom: '55px', 
                        paddingLeft: '20px',  
                        paddingRight: '20px',
                        margin: '30px' 
                    }} >
        </div>
    )
};

export default Construction;