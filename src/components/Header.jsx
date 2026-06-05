import { Link, Outlet } from 'react-router-dom';

const Header = ({ handleAdd }) => {
  return (
    <>
    <nav className='flex justify-between items-center px-6 py-4 bg-gray-100 shadow'>
      <ul className='flex gap-6 text-gray-700 font-medium'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
      <span onClick={handleAdd} className='bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600'>
        Add Product
      </span>
    </nav>
    <Outlet />
    </>
  );
};

export default Header;