import React from "react";
import ActionButtons from "./ActionButtons";

const SinglePost = ({
  post: { _id, status, title, description, url },
  setIsShowUpdateModal,
}) => {
  return (
    <div
      className={`w-full py-5 px-3 border-[2px] ${
        status === "TO LEARN"
          ? "border-[#ff7851]"
          : status === "LEARNING"
          ? "border-[#ffce67]"
          : "border-[#56cc9d]"
      } rounded-md shadow-boxShadow`}
    >
      <div className="mb-3 flex items-start">
        <div className="w-[60%] flex flex-col items-start justify-start">
          <p className="text-xl text-textColor mb-2">{title}</p>
          <span
            className={`py-[2px] px-[10px] text-white text-base font-semibold uppercase rounded-xl ${
              status === "TO LEARN"
                ? "bg-[#ff7851]"
                : status === "LEARNING"
                ? "bg-[#ffce67]"
                : "bg-[#56cc9d]"
            }`}
          >
            {status}
          </span>
        </div>
        <div className="w-[40%] flex items-center justify-center">
          <ActionButtons
            url={url}
            _id={_id}
            setIsShowUpdateModal={setIsShowUpdateModal}
          />
        </div>
      </div>
      <p className="text-[#888]">{description}</p>
    </div>
  );
};

export default SinglePost;
