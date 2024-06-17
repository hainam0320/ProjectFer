import React, { useContext, useState } from 'react';
import { ProductContext } from '../features/ProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const ProductManagement = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useContext(ProductContext);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ id: null, name: '', price: '', image: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCurrentProduct({ ...currentProduct, image: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateProduct(currentProduct);
      Swal.fire({
        icon: 'success',
        title: 'Updated Successfully',
        text: `${currentProduct.name} has been updated!`,
        confirmButtonText: 'OK'
      });
    } else {
      addProduct(currentProduct);
      Swal.fire({
        icon: 'success',
        title: 'Added Successfully',
        text: `${currentProduct.name} has been added!`,
        confirmButtonText: 'OK'
      });
    }
    setIsEditing(false);
    setCurrentProduct({ id: null, name: '', price: '', image: '' });
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
  };

  const handleDelete = (productId) => {
    deleteProduct(productId);
  };

  return (
    <div className="product-management">
      <h2>Product Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={currentProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          name="price"
          value={currentProduct.price}
          onChange={handleInputChange}
          placeholder="Product Price"
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
          required={!isEditing}
        />
        {currentProduct.image && (
          <img src={currentProduct.image} alt={currentProduct.name} width="50" />
        )}
        <br/>
        <button type="submit">{isEditing ? 'Update Product' : 'Add Product'}</button>
      </form>

      <div className="product-list">
        <h3>Product List</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.image} alt={product.name} width="50" /></td>
                <td>
                  <button className="edit-button" onClick={() => handleEdit(product)}>
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(product.id)}>
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
