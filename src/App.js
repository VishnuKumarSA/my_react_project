import './App.css';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import useFetchAPI from "../src/useFetchAPI";
import AddEditModal from './components/AddEditModel';
import Products from './components/Products';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';
import { useRoutes } from 'react-router-dom';
import { ProductContext } from './components/store/ProductContext';

function App() {

  const [productsList, setProductsList] = useState([]);
  const { data, loading, error } = useFetchAPI('/data.json');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editProductId, setProductId] = useState(null);
  const [editProductData, setEditProductData] = useState(null);

  useEffect(() => {
    if (data) setProductsList(data);
  }, [data]);

  function handleEdit(id) {
    setShowModal(true);
    setProductId(id);
    setEditProductData(productsList.find(product => product.id === id));
  }

  function handleDelete(id) {
    setDeleteLoading(true);
    setTimeout(() => {
      setProductsList(prev => prev.filter(product => product.id !== id));
      setDeleteLoading(false);
    }, 3000);
  }

  function saveProduct(e) {
    e.preventDefault();
    if (editProductId === null) {
      setProductsList(prev => [...prev, { id: productsList.length + 1, ...editProductData }]);
    } else {
      setProductsList(prev =>
        prev.map(product => product.id === editProductId ? editProductData : product)
      );
    }
    setShowModal(false);
    setProductId(null);
    setEditProductData(null);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEditProductData(prevData => ({ ...prevData, [name]: value }));
  }

  function handleAdd() {
    setShowModal(true);
    setProductId(null);
    setEditProductData({ name: "", price: "" });
  }

  
  const contextValue = {
    productsList,
    loading,
    error,
    deleteLoading,
    showModal,
    setShowModal,
    editProductId,
    editProductData,
    handleAdd,
    handleEdit,
    handleDelete,
    saveProduct,
    handleChange
  };

  const routesElement = useRoutes([
    {
      path: '/',
      element: <Header />,        
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'products',
          element: <Products />,  
          children: [
            {
              path: ':id',
              element: <ProductDetails />
            }
          ]
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ]);

  return (
    <ProductContext.Provider value={contextValue}>
      <div>
        {routesElement}
        {showModal && <AddEditModal />}  
      </div>
    </ProductContext.Provider>
  );
}

export default App;