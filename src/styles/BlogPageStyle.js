// Styles for the blog list and cards
export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    maxWidth: "1200px", // To avoid too wide a container
    margin: "0 auto",
  },
  blogList: {
    display: "flex",
    flexWrap: "wrap", // Allows wrapping of items when necessary
    gap: "20px", // Space between blog cards
    justifyContent: "space-between", // To have some space between items
  },
  blogCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    border: "1px solid #ddd",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "48%", // Each card takes up 48% of the container width
    boxSizing: "border-box", // To include padding and border in the width calculation
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
  },
  noBlogsMessage: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: "#e74c3c",
  },
};
