const ContactForm = () => {
    return (
        <div className="max-w-xl min-h-[450px] p-10 border border-gray-400 rounded-md shadow-md flex-grow">
            <form className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="w-full p-5 border border-gray-400 rounded focus:outline-none focus:border-gray-400" 
                    />
                    <input 
                        type="text" 
                        placeholder="Last name" 
                        className="w-full p-5 border border-gray-400 rounded focus:outline-none focus:border-gray-400" 
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full p-5 border border-gray-400 rounded focus:outline-none focus:border-gray-400" 
                    />
                    <input 
                        type="tel" 
                        placeholder="Phone" 
                        className="w-full p-5 border border-gray-400 rounded focus:outline-none focus:border-gray-400" 
                    />
                </div>
                <textarea 
                    placeholder="Message" 
                    className="w-full p-5 border border-gray-400 rounded focus:outline-none focus:border-gray-400" 
                    rows="4"
                ></textarea>
                <button 
                    type="submit" 
                    className="w-full p-5 mt-4 text-gray-400 border border-gray-400 rounded shadow-xl hover:text-secondary focus:outline-none"
                >
                    SEND
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

