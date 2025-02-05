import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Table,
  Alert,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify's CSS

const UserForm = () => {
  const [error, setError] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    age: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("success"); // success or danger

  let [userData, setUserData] = useState([]);

  // State for controlled form fields
  let [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    address: "",
    age: "",
  });

  // Handle focus out (onBlur) for validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      }));
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate formData
    let formErrors = {};
    let isValid = true;

    // Validate required fields
    if (!formData.firstName) {
      formErrors.firstName = "First Name is required";
      isValid = false;
    }
    if (!formData.lastName) {
      formErrors.lastName = "Last Name is required";
      isValid = false;
    }
    if (!formData.address) {
      formErrors.address = "Address is required";
      isValid = false;
    }
    if (!formData.age) {
      formErrors.age = "Age is required";
      isValid = false;
    }

    if (!isValid) {
      setErrors(formErrors);
      return; // Prevent form submission if there are errors
    }

    const isUpdate = formData.id === "" ? false : true;
    // Check if the user already exists by comparing firstName and lastName
    const isDuplicate = userData.some(
      (user) =>
        user.id !== formData.id &&
        user.firstName.toLowerCase() === formData.firstName.toLowerCase() &&
        user.lastName.toLowerCase() === formData.lastName.toLowerCase(),
    );

    if (isDuplicate) {
      setError("A user with this name already exists.");
      toast.success("A user with this name already exists.");
      return; // Do not add the user if duplicate found
    }

    // Process form data (for example, send to an API or log to console)
    if (!isUpdate) {
      formData.id =
        (userData.length === 0
          ? 0
          : Math.max(...userData.map((user) => user.id))) + 1;
      setUserData([...userData, formData]);
      showAlert("User added successfully!", "success");
      toast.success("User submitted successfully!", {
        position: "top-right", // Position of the toast
        autoClose: 3000, // Auto close after 3 seconds
        hideProgressBar: false, // Optionally hide progress bar
        closeOnClick: true, // Close toast on click
        pauseOnHover: true, // Pause on hover
        draggable: true, // Enable drag for toast
      });
      //toast.success('Operation successful!', { autoClose: 2000 });
      //toast.success('User edited successfully!');
    } else {
      const updatedUserData = userData.map((user) =>
        user.id === formData.id ? { ...user, ...formData } : user,
      );
      setUserData(updatedUserData);
      showAlert("User edited successfully!", "success");
    }
    clearFormData();
  };

  const clearFormData = () => {
    setError("");
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      address: "",
      age: "",
    });
  };

  const handleEdit = (id) => {
    setError("");
    setFormData(userData.find((user) => user.id === id));
  };

  // Handle Delete button click
  const handleDelete = (id) => {
    let userToDelete = userData.find((user) => user.id === id);
    setUserData(userData.filter((user) => user.id !== id));
    showAlert(
      `User [${userToDelete.firstName} ${userToDelete.lastName}] deleted successfully!`,
      "success",
    );
  };

  // Function to show the alert message
  const showAlert = (message, variant) => {
    setAlertMessage(message);
    setAlertVariant(variant);

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };

  return (
    <Container>
      <ToastContainer />
      <Row className="justify-content-center">
        <Col lg={3}>
          <Button
            variant="success"
            size="sm"
            onClick={() => clearFormData()}
            className="mr-2"
          >
            Add New
          </Button>

          {/* Show the alert message if there is one */}
          {alertMessage && <Alert variant={alertVariant}>{alertMessage}</Alert>}

          {/* Error Alert for duplicate name */}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            {/* First Name Field */}
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                isInvalid={!!errors.firstName} // Add validation feedback
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName} {/* Show error message */}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Last Name Field */}
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                isInvalid={!!errors.lastName} // Add validation feedback
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName} {/* Show error message */}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Address Field */}
            {/* <label className="form-label">Address</label>
            <input
                type="text"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className='form-control'
                required
                isInvalid={!!errors.address} // Add validation feedback
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback> */}
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                isInvalid={!!errors.address} // Add validation feedback
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Age Field */}
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                name="age"
                value={formData.age}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                isInvalid={!!errors.age} // Add validation feedback
              />
              <Form.Control.Feedback type="invalid">
                {errors.age}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit">
              {formData.id !== "" ? "Update" : "Save"}
            </Button>
          </Form>
        </Col>
        <Col lg={9}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    No Data Found
                  </td>
                </tr>
              ) : (
                userData.map((user, i) => (
                  <tr key={i}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.address}</td>
                    <td>{user.age}</td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEdit(user.id)}
                        className="mr-2"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default UserForm;
