import React from 'react';
import Button from '@/components/button/Button';
import fotoportada from '@/assets/images/fotoportada.jpeg';

const Home = () => {
    return (
        <>
            <div 
                style={{ 
                    backgroundImage: `url(${fotoportada})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    width: '1380px', 
                    height: '668px', 
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
                    marginLeft: '30px',
                    marginTop: '40px',
                    marginBottom: '20px', 
                    marginRight: '30px' 
                }}
            >
                <div className="container mx-auto px-10 py-48">
                    <div className="relative z-10 text-center">
                        <h1 className="text-5xl font-bold text-white mb-12">
                            Create tests with AI
                        </h1>
                        <Button />
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Home;
