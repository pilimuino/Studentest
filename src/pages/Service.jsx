import React from 'react'
import foto2 from '@/assets/images/foto2.jpeg'
import Button from '@/components/button/Button'

const Service = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-strech ml-4 md:ml-8 md:gap-12 mb-6 md:mb-10 md:mt-10">
            <div className="md:w-1/2 flex flex-col md:mt-5 mr-4 md:mr-10">
                <div data-testid="service-background" 
                    style={{ 
                        backgroundImage: `url(${foto2})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        width: '627px',   
                        height: '491px',  
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
                    <div className="container mx-auto px-10 py-48">
                    <div className="relative z-10 text-center">
                        <h1 className="text-3xl font-bold text-white mb-3">
                            Take your first test
                        </h1>
                        <Button /> 
                    </div> 
                    </div>        
                </div>
                
            </div>
            <div className="md:w-1/2 flex flex-col md:mt-20 mr-4 md:mr-10">
                <p className='text-l font-semibold ml-6 md:ml-8 text-xl md:mt-10 mr-4 md:mr-6 text-[#a6a6a6]'>
                    Using Studentest is very intuitive. To create exams, you only need to indicate the desired parameters regarding level of difficulty and type of question, and the algorithm will work automatically and intelligently select the questions that will makep up the tests.
                    Studentest puts Aritificial Intelligencee at your disposal to create reliable online tests automatically.
                </p>    
                <p className='text-l font-bold ml-6 md:ml-8 text-xl md:mt-5 mr-4 md:mr-4 text-[#a6a6a6]'>
                    Take your first test!
                </p>
                <p className='text-l font-bold ml-4 md:ml-8 md:mt-1 text-xl text-[#a6a6a6]'>
                    Join the change!
                </p>   
                
            </div>
        </div>
    )
}

export default Service;