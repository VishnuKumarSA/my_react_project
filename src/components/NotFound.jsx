import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/');
    }
    return (
        <div className="not-found">
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <span>
                <button onClick={handleGoBack} className="bg-blue-500 text-white mx-2 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
                    Go back home
                </button>
            </span>
        </div>
    );
}

export default NotFound;