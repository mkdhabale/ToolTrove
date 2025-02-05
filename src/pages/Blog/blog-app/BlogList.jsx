import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteBlog,
  handleInputChange,
  setBlogListOnInitialLoad,
  setCurrentEditedBlogId,
} from "../../../store/redux/slices/blogSlice";
import { styles } from "../../../styles/BlogPageStyle";

function BlogList() {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state);
  const { blogList } = blog;

  useEffect(() => {
    dispatch(
      setBlogListOnInitialLoad({
        blogList: JSON.parse(localStorage.getItem("blogList")) || [],
      })
    );
  }, [dispatch]);

  function onDeleteBlog(getCurrentBlogId) {
    dispatch(
      handleDeleteBlog({
        currentBlogId: getCurrentBlogId,
      })
    );
  }

  function onEditBlog(getCurrentBlog) {
    dispatch(
      setCurrentEditedBlogId({
        currentBlogId: getCurrentBlog?.id,
      })
    );

    dispatch(
      handleInputChange({
        title: getCurrentBlog?.title,
        description: getCurrentBlog?.description,
      })
    );
  }

  return (
    <div style={styles.container}>
      {blogList?.length > 0 ? (
        <div style={styles.blogList}>
          {blogList.map((singleBlogItem) => (
            <div style={styles.blogCard} key={singleBlogItem?.id}>
              <h3 style={styles.title}>{singleBlogItem?.title}</h3>
              <p style={styles.description}>{singleBlogItem?.description}</p>
              <div style={styles.buttonGroup}>
                <button
                  style={styles.button}
                  onClick={() => onEditBlog(singleBlogItem)}
                >
                  Edit Blog
                </button>
                <button
                  style={{ ...styles.button, backgroundColor: "#e74c3c" }}
                  onClick={() => onDeleteBlog(singleBlogItem.id)}
                >
                  Delete Blog
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 style={styles.noBlogsMessage}>No blog added! Please add one.</h1>
      )}
    </div>
  );
}

export default BlogList;
