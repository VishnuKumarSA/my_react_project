import React from 'react';

const Products = ({ handleDelete, handleEdit, deleteLoading, productsList, error, loading }) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-5 p-5">
                {error && (
                    <div className="col-span-3  text-center text-red-500">
                        {error}
                    </div>
                )}
                {(loading || deleteLoading) ? (
                    <div className="col-span-3 text-center">
                        Loading...
                    </div>
                ) : productsList?.length > 0 ? (
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
                ) : (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">No Products Available</h1>
                    </div>
                )}
            </div>
        </>
    );
};

export default Products;