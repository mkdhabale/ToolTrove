import React, { useState } from "react";
import { styles } from "../../styles/ProductPageStyle";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleShowMoreClick = () => {
    setShowModal(true); // Show the modal when "Show More" is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div style={styles.card}>
      <img src={product.thumbnail} alt={product.title} style={styles.image} />
      <h3 style={styles.title}>{product.title}</h3>
      <p style={styles.price}>{product.price} USD</p>
      <p style={styles.availability}>
        <span
          style={{
            color: product.stock === 0 ? "red" : "green",
          }}
        >
          {product.availabilityStatus}
        </span>
      </p>
      <p style={styles.rating}>
        Rating: {product.rating}{" "}
        <span style={styles.stars}>
          {"★".repeat(Math.round(product.rating))}
          {"☆".repeat(5 - Math.round(product.rating))}
        </span>
      </p>
      <button onClick={handleShowMoreClick} style={styles.button}>
        Show More
      </button>

      {/* Modal */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button onClick={handleCloseModal} style={styles.closeButton}>
              &times;
            </button>
            <h2>{product.title}</h2>
            <img
              src={product.images[0]}
              alt={product.title}
              style={styles.modalImage}
            />
            <div style={styles.modalContent}>
              <p>
                <strong>Description:</strong> {product.description}
              </p>
              <p>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </p>
              <p>
                <strong>Shipping Info:</strong> {product.shippingInformation}
              </p>
              <p>
                <strong>Return Policy:</strong> {product.returnPolicy}
              </p>
              <p>
                <strong>Reviews:</strong>
              </p>
              {product.reviews.map((review, index) => (
                <div key={index} style={styles.review}>
                  <p>
                    <strong>{review.reviewerName}</strong> (Rating:{" "}
                    {review.rating} ★)
                  </p>
                  <p>{review.comment}</p>
                  <p>
                    <small>{new Date(review.date).toLocaleDateString()}</small>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductPage = (productData) => {
  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        <ProductCard product={productData.product} />
      </div>
    </div>
  );
};

export default ProductPage;
