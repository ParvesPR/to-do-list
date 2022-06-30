import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#888] py-5 text-white text-center mt-[360px]'>
            <p>&copy; Copyright ToDo {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;