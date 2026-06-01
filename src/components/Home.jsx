import AddEditModal from "./AddEditModel";
import { useState } from 'react';

const Home = () => {

    const [productsList, setProductsList] = useState([
        { id: 1, name: 'Product 1', price: 999 },
        { id: 2, name: 'Product 2', price: 1499 },
        { id: 3, name: 'Product 3', price: 1999 }
    ]);

    function handleEdit(id) {
        setShowModal(true);
        setProductId(id);
        const productData = productsList.find(product => product.id === id)
        setEditProductData(productData);
    }

    function handleDelete(id) {
        alert(`delete product with id: ${id}`)
    }

    function saveProduct(e) {
        e.preventDefault();

        const updatedProductsList = productsList.map((product) =>
            product.id === editProductId
                ? editProductData
                : product
        );

        setProductsList(updatedProductsList);

        setShowModal(false);
        setProductId(null);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setEditProductData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const [showModal, setShowModal] = useState(false);
    const [editProductId, setProductId] = useState(null);
    const [editProductData, setEditProductData] = useState(null);

    return (
        <>
            <div className="grid grid-cols-3 gap-5 p-5">
                {
                    productsList.map(product => (
                        <div key={product.id} className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <p className="text-gray-600">₹{product.price}</p>
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(product.id)} className="edit-btn bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600 mt-2 ml-2">Edit</button>
                                <button onClick={() => handleDelete(product.id)} className="delete-btn bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-600 mt-2">Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            {showModal && <AddEditModal modalVisible={showModal} setModalVisible={setShowModal} saveProduct={saveProduct} editProductId={editProductId} editProductData={editProductData} handleChange={handleChange} />}

        </>
    )
}

export default Home;