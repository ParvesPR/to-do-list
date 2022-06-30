import React from 'react';
import Footer from '../Footer/Footer';
import ToDo from './ToDo/ToDo';

const Home = () => {
    return (
        <section>
            <div className='flex justify-center py-10'>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>
            <ToDo></ToDo>
            <Footer></Footer>
        </section>
    );
};

export default Home;