import React, { useContext, useState } from "react";
import { motion } from "framer-motion";

import { PostContext } from "../../contexts/PostContext";
import closeIcon from "../../assets/x.svg";

const AddPostModal = ({ setIsShowAddModal }) => {
  // Contexts
  const {
    postState: { posts, postsLoading },
    addPost,
  } = useContext(PostContext);

  // State
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    url: "",
    status: "TO LEARN",
  });

  const { title, description, url } = newPost;

  const onChangeNewPostForm = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { success, message } = await addPost(newPost);
    setNewPost({ title: "", description: "", url: "", status: "TO LEARN" });
    setIsShowAddModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 right-0 bottom-0 bg-overLay z-10"
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
        className="max-w-[500px] my-10 mx-auto bg-white border-[1px] border-[#00000033] rounded-lg overflow-hidden"
      >
        <div className="p-4 flex items-center justify-between relative border-b-[1px] border-[#eceeef]">
          <h4 className="text-textColor text-2xl tracking-wide">
            What do you want to learn?
          </h4>
          <button
            onClick={() => setIsShowAddModal(false)}
            className="absolute top-0 right-0 p-4 text-xl"
          >
            <img
              src={closeIcon}
              className="w-7 h-7 flex items-center justify-center"
              alt=""
            />
          </button>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-full flex items-center justify-center flex-col"
        >
          <div className="w-full flex items-center justify-center flex-col p-4 border-b-[1px] border-[#eceeef]">
            <div className="w-full flex flex-col mb-4">
              <input
                placeholder="Title"
                name="title"
                required
                type="text"
                value={title}
                onChange={onChangeNewPostForm}
                className="w-full py-[6px] px-3 border-[1px] border-[#ced4da] rounded-md text-textColor placeholder:text-[#888] outline-none"
              />
              <span className="mt-1 text-xs text-[#888]">Required</span>
            </div>
            <div className="w-full flex flex-col mb-4">
              <textarea
                placeholder="Description"
                name="description"
                value={description}
                onChange={onChangeNewPostForm}
                className="min-h-[100px] px-3 py-2 outline-none resize-none border-[1px] border-[#ced4da] rounded-md text-textColor placeholder:text-[#888]"
              />
            </div>
            <div className="w-full flex flex-col mb-4">
              <input
                placeholder="Youtube Tutorial URL"
                name="url"
                type="text"
                value={url}
                onChange={onChangeNewPostForm}
                className="w-full py-[6px] px-3 border-[1px] border-[#ced4da] rounded-md text-textColor placeholder:text-[#888] outline-none"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-end p-3">
            <span
              onClick={() => setIsShowAddModal(false)}
              className="py-[6px] px-3 m-1 text-white border-[1px] border-[#ced4da] rounded-md bg-[#f3969a] hover:bg-[#ef7479] cursor-pointer"
            >
              Cancel
            </span>
            <button className="py-[6px] px-3 m-1 text-white border-[1px] border-[#ced4da] rounded-md bg-[#78c2ad] hover:bg-[#5eb69d]">
              Learn!
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddPostModal;
