import React, { useContext } from "react";
import playIcon from "../../assets/play-btn.svg";
import editIcon from "../../assets/pencil.svg";
import deleteIcon from "../../assets/trash.svg";

import { PostContext } from "../../contexts/PostContext";

const ActionButtons = ({ url, _id, setIsShowUpdateModal }) => {
  const { deletePost, findPost } = useContext(PostContext);

  const handleUpdate = () => {
    setIsShowUpdateModal(true);
    findPost(_id);
  };

  return (
    <>
      <a href={url} target="_blank" className="px-[10px] pb-2">
        <img src={playIcon} className="w-8 h-8" alt="" />
      </a>
      <button onClick={handleUpdate} className="px-[10px] pb-2">
        <img src={editIcon} className="w-6 h-6" alt="" />
      </button>
      <button onClick={() => deletePost(_id)} className="px-[10px] pb-2">
        <img src={deleteIcon} className="w-6 h-6" alt="" />
      </button>
    </>
  );
};

export default ActionButtons;
