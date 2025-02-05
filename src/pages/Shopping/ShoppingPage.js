import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProductPage from "./ProductPage";
import "../../styles/loading.css";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ShoppingPage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]); // State for categories
  const [products, setProducts] = useState([]); // State for products
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category (slug)
  const [loadingCategories, setLoadingCategories] = useState(true); // Loading state for categories
  const [loadingProducts, setLoadingProducts] = useState(false); // Loading state for products
  const [error, setError] = useState(null); // Error state for handling API errors

  // Fetch categories from dummy API
  const fetchCategories = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(response.data); // Set the categories in the state
      if (response.data.length > 0) {
        setSelectedCategory(response.data[0].slug); // Set the slug of the first category by default
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoadingCategories(false);
    }
  }, []);

  // Fetch products based on selected category (slug)
  const fetchProducts = useCallback(async (categorySlug) => {
    if (!categorySlug) return; // Don't fetch if categorySlug is empty

    setLoadingProducts(true);
    setError(null); // Reset error on each fetch attempt

    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${categorySlug}`
      );
      setProducts(response.data.products); // Set the products in the state
    } catch (error) {
      setError("Error fetching products. Please try again later.");
      console.error("Error fetching products:", error);
    } finally {
      setLoadingProducts(false);
    }
  }, []);

  // Fetch categories once on component mount
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Fetch products when the selected category (slug) changes
  useEffect(() => {
    if (selectedCategory) {
      fetchProducts(selectedCategory);
    }
  }, [selectedCategory, fetchProducts]); // Only fetch products when selectedCategory changes

  // Handle category click and fetch products for that category
  const handleCategoryClick = (slug) => {
    setSelectedCategory(slug); // Update selected category slug
  };

  const handleAllProductsClick = (slug) => {
    navigate("/products");
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* Left Panel: Categories */}
      <div
        style={{ width: "30%", padding: "10px", borderRight: "2px solid #ccc" }}
      >
        <h2>Categories</h2>
        {loadingCategories ? (
          <div className="loading-container">
            <Spinner animation="border" variant="primary" />
            <p>Loading...</p>
          </div>
        ) : (
          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
            {categories.map((category) => (
              <li
                key={category.slug}
                style={{
                  cursor: "pointer",
                  padding: "8px",
                  backgroundColor: "#f4f4f4",
                  margin: "5px 0",
                  fontWeight:
                    category.slug === selectedCategory ? "bold" : "normal",
                }}
                onClick={() => handleCategoryClick(category.slug)} // Pass the slug of the category
              >
                {category.name} {/* Display the category name */}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right Panel: Products */}
      <div style={{ width: "65%", padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h2 style={{ margin: 0, textAlign: "center", flex: 1 }}>Products</h2>
          <button
            onClick={handleAllProductsClick}
            style={{
              padding: "8px 15px",
              fontSize: "1rem",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            All Products
          </button>
        </div>
        {loadingProducts ? (
          <div className="loading-container">
            <Spinner animation="border" variant="primary" />
            <p>Loading...</p>
          </div>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <div>
            {products.length === 0 ? (
              <p>No products found for this category.</p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "10px",
                }}
              >
                {products.map((product) => (
                  <div key={product.id}>
                    <ProductPage product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingPage;
