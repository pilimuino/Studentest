import ContactForm from '@/components/contact/ContactForm';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'; 
import {Link} from 'react-router-dom';

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-strech ml-4 md:ml-8 md:gap-12 mb-6 md:mb-10 md:mt-10">
        <div className="md:w-1/2 flex flex-col md:mt-20 mr-4 md:mr-10">
            <p className='text-l font-semibold ml-4 md:ml-8 text-lg mr-4 md:mr-6 text-[#a6a6a6]'>
                Do you want to know how Studentest has revolutionized the creation of multiple choice tests?
            </p>
            <p className='text-l font-bold ml-4 md:ml-8 md:mt-4 text-xl text-[#a6a6a6]'>
                Join the change!
            </p>
            <p className='text-l font-semibold ml-4 md:ml-8  md:mt-4 mr-4 md:mr-6 text-lg text-[#a6a6a6]'>
                Send us an email to Studentest@studentest.com or contact us through the enquiry form and we will give you a response shortly.
            </p>
        <h2 className="text-[#a6a6a6] font-bold ml-4 md:ml-8 md:mt-12 text-lg mb-2">Follow us</h2>    
        <div className="flex space-x-4 ml-4 md:ml-8 md:mt-2 mb-4">
                            <Link to="/facebook" aria-label="Facebook" className="text-[#a6a6a6] hover:text-[#068ca4]">
                                <FaFacebook size={20} />
                            </Link>
                            <Link to="/instagram" aria-label="Instagram" className="text-[#a6a6a6] hover:text-[#068ca4]">
                                <FaInstagram size={20} />
                            </Link>
                            <Link to="x" aria-label="X" className="text-[#a6a6a6] hover:text-[#068ca4]">
                                <FiX size={20} /> 
                            </Link>
                            <Link to="/linkedin" aria-label="LinkedIn" className="text-[#a6a6a6] hover:text-[#068ca4]">
                                <FaLinkedin size={20} />
                            </Link>
                            <Link to="/youtube" aria-label="YouTube" className="text-[#a6a6a6] hover:text-[#068ca4]">
                                <FaYoutube size={20} />
                            </Link>
                        </div>
        </div>
        <div className="md:w-1/2">
            <ContactForm />
        </div>
    </div>
    
    )
}

export default Contact;