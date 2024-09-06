import React from 'react';


const ContactForm = () => {
    return (
        <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-md shadow-md">
        <form className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4">
            <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400" 
            />
            <input 
                type="text" 
                placeholder="Last name" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400" 
            />
            </div>
            <div className="grid grid-cols-2 gap-4">
            <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400" 
            />
            <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400" 
            />
            </div>
            <textarea 
            placeholder="Message" 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400" 
            rows="4"
            ></textarea>
            <button 
            type="submit" 
            className="w-full p-2 mt-4 text-gray-600 border border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
            >
            SEND
            </button>
        </form>
        </div>
    );
};

export default ContactForm;
