import React from 'react';
import Footer from '../Footer/Footer';
import CreateToDo from './CreateToDo/CreateToDo';
import ToDo from './ToDo/ToDo';

const Home = () => {
    return (
        <section>
           <CreateToDo></CreateToDo>
            <ToDo></ToDo>
            <Footer></Footer>
        </section>
    );
};

export default Home;