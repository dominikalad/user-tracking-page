import { useNavigate } from 'react-router-dom';

import '../styles/Button.css';


const Button = ({ page, text }) => {
    const navigate = useNavigate();

    return (
        <div className='button'>
            <button onClick={() => navigate(page)}>{text}</button>
        </div>
    );
};

export default Button;