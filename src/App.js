import './App.css';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import useFetchAPI from "../src/useFetchAPI";
import AddEditModal from './components/AddEditModel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';


function App() {

  const [productsList, setProductsList] = useState([]);
  const { data, loading, error } = useFetchAPI('/data.json');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editProductId, setProductId] = useState(null);
  const [editProductData, setEditProductData] = useState(null);


  useEffect(() => {
    if (data) {
      setProductsList(data);
    }
  }, [data]);

  function handleEdit(id) {
    setShowModal(true);
    setProductId(id);
    const productData = productsList.find(product => product.id === id)
    setEditProductData(productData);
  }

  function handleDelete(id) {
    setDeleteLoading(true);
    setTimeout(() => {
      setProductsList(prev =>
        prev.filter(product => product.id !== id)
      );
      setDeleteLoading(false);
    }, 3000)

  }

  function saveProduct(e) {
    e.preventDefault();
    if (editProductId === null) {

      const newProduct = {
        id: productsList.length + 1,
        ...editProductData
      };

      setProductsList(prev => [
        ...prev,
        newProduct
      ]);
    } else {
      const updatedProductsList = productsList.map((product) =>
        product.id === editProductId
          ? editProductData
          : product
      );
      setProductsList(updatedProductsList);
    }
    setShowModal(false);
    setProductId(null);
    setEditProductData(null);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEditProductData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleAdd() {
    setShowModal(true);
    setProductId(null);
    setEditProductData({
      name: "",
      price: ""
    });
  }

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Header handleAdd={handleAdd} />}>
          <Route index element={<Home />} />
          <Route path='/products' element={
            <Products
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              deleteLoading={deleteLoading}
              productsList={productsList}
              error={error}
              loading={loading}
            />
          } >
            <Route path=':id' element={<ProductDetails />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      {showModal &&
        <AddEditModal
          modalVisible={showModal}
          setModalVisible={setShowModal}
          saveProduct={saveProduct}
          editProductId={editProductId}
          editProductData={editProductData}
          handleChange={handleChange}
        />
      }
    </BrowserRouter>
  );
}

export default App;
