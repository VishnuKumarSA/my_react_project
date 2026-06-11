import { useProduct } from './store/ProductContext';

const AddEditModal = () => {
    const { setShowModal, saveProduct, editProductId, editProductData, handleChange } = useProduct();

    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-500 flex items-center justify-center">

                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <span onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-white text-2xl cursor-pointer">&times;</span>
                    {editProductId ? <h2 className="text-xl font-bold mb-4">Edit Product</h2> : <h2 className="text-xl font-bold mb-4">Add Product</h2>}
                    <form onSubmit={saveProduct}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={editProductData?.name || ""}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={editProductData?.price || ""}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEditModal;