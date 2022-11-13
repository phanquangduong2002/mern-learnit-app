import React from "react";

const AlertMessage = ({ info }) => {
  return info === null ? null : (
    <div className="w-full p-2">{info.message}</div>
  );
};

export default AlertMessage;
