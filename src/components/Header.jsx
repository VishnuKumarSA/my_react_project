const Header = () => {
    return (
        <div>
            <nav className='flex justify-between items-center px-6 py-4 bg-gray-100 shadow'>
                <ul className='flex gap-6 text-gray-700 font-medium'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <span className='bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600'>Add Product</span>
            </nav>
                    
        </div>
    )
}

export default Header;