import { Outlet, NavLink } from 'react-router-dom';

const Header = ({ handleAdd }) => {
  return (
    <>
      <nav className='flex justify-between items-center px-6 py-4 bg-gray-100 shadow'>
        <ul className='flex gap-6 text-gray-700 font-medium'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
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