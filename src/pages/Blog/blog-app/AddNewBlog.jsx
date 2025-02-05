import { useDispatch, useSelector } from "react-redux";
import {
  handleAddTodo,
  handleEditBlog,
  handleInputChange,
  setCurrentEditedBlogId,
} from "../../../store/redux/slices/blogSlice";
import { styles } from "../../../styles/BlogAddPageStyle";

function AddNewBlog() {
  const { blog } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { currentEditedBlogId } = blog;

  function onChangeInput(event) {
    dispatch(
      handleInputChange({
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleTodoSubmit(event) {
    event.preventDefault();
    if (currentEditedBlogId !== null) dispatch(handleEditBlog());
    else dispatch(handleAddTodo());

    if (currentEditedBlogId !== null)
      dispatch(
        setCurrentEditedBlogId({
          currentBlogId: null,
        })
      );
    dispatch(
      handleInputChange({
        description: "",
        title: "",
      })
    );
  }

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.header}>
        {blog?.currentEditedBlogId ? "Edit Blog" : "Add New Blog"}
      </h2>
      <form onSubmit={handleTodoSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="title">
            Enter Blog Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Blog Title"
            id="title"
            onChange={onChangeInput}
            value={blog?.formData?.title}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="description">
            Enter Blog Description
          </label>
          <textarea
            name="description"
            placeholder="Enter Blog Description"
            id="description"
            onChange={onChangeInput}
            value={blog?.formData?.description}
            style={styles.textarea}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          {blog?.currentEditedBlogId ? "Edit Blog" : "Add New Blog"}
        </button>
      </form>
    </div>
  );
}

export default AddNewBlog;
