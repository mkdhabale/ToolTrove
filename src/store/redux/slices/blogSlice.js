import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
  currentEditedBlogId: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      let cpyFormData = { ...state.formData };
      cpyFormData = {
        ...cpyFormData,
        ...action.payload,
      };

      state.formData = cpyFormData;
    },
    handleAddTodo: (state, action) => {
      state.blogList.push({
        id: nanoid(),
        ...state.formData,
      });

      state.formData = {
        title: "",
        description: "",
      };

      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },

    setBlogListOnInitialLoad: (state, action) => {
      state.blogList = action.payload.blogList;
    },

    handleDeleteBlog: (state, action) => {
      const { payload } = action;
      const { currentBlogId } = payload;

      let cpyBlogList = [...state.blogList];

      cpyBlogList = cpyBlogList.filter(
        (singleBlogItem) => singleBlogItem.id !== currentBlogId
      );

      state.blogList = cpyBlogList;
      localStorage.setItem("blogList", JSON.stringify(cpyBlogList));
    },

    setCurrentEditedBlogId: (state, action) => {
      const { payload } = action;
      const { currentBlogId } = payload;

      state.currentEditedBlogId = currentBlogId;
    },

    handleEditBlog: (state, action) => {
      let cpyBlogList = [...state.blogList];
      const findIndexOfCurrentBlogItem = cpyBlogList.findIndex(
        (singleBlogItem) => singleBlogItem.id === state.currentEditedBlogId
      );

      cpyBlogList[findIndexOfCurrentBlogItem] = {
        ...cpyBlogList[findIndexOfCurrentBlogItem],
        ...state.formData,
      };

      state.blogList = cpyBlogList;
      localStorage.setItem("blogList", JSON.stringify(cpyBlogList));
    },
  },
});

export const {
  handleInputChange,
  handleAddTodo,
  setBlogListOnInitialLoad,
  handleDeleteBlog,
  setCurrentEditedBlogId,
  handleEditBlog,
} = blogSlice.actions;

export default blogSlice.reducer;
