import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';


const About: FC = () => {
    const history = useHistory();
    return (
        <div className="container">
            <h1 className="center">О нас</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo esse pariatur officia quaerat quae eius fugiat voluptates, nam praesentium eos nobis odit qui ipsa est laborum dignissimos tempore autem quidem?</p>
            <button className="btn"onClick={()=>history.push('/')}>К списку дел</button>
        </div>
    )
}

export default About;