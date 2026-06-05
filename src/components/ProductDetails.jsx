import { useParams, useLocation } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const location = useLocation();

    const product = location.state || {};

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">

                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Product Details
                </h1>

                <div className="space-y-4">

                    <div className="border rounded-lg p-4">
                        <p className="text-sm text-gray-500">
                            Product ID
                        </p>
                        <p className="text-lg font-semibold">
                            {id}
                        </p>
                    </div>

                    <div className="border rounded-lg p-4">
                        <p className="text-sm text-gray-500">
                            Product Name
                        </p>
                        <p className="text-lg font-semibold">
                            {product.name || 'No Product Name'}
                        </p>
                    </div>

                    <div className="border rounded-lg p-4">
                        <p className="text-sm text-gray-500">
                            Price
                        </p>
                        <p className="text-xl font-bold text-green-600">
                            ₹ {product.price || 0}
                        </p>
                    </div>

                </div>

                <button
                    className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Buy Now
                </button>

            </div>
        </div>
    );
};

export default ProductDetails;