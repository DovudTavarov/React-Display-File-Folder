import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaRegFile } from "react-icons/fa";

const Helper = ({ data }) => {
  const [openFolders, setOpenFolders] = useState({});

  const handleFolderClick = (name) => {
    setOpenFolders((prevOpenFolders) => ({
      ...prevOpenFolders,
      [name]: !prevOpenFolders[name],
    }));
  };

  return (
    <ul>
      {data.map((item) => {
        if (item.type === "file") {
          return (
            <li key={item.name}>
              <FaRegFile style={{ color: "#848D97" }} /> {item.name}
            </li>
          );
        }

        return (
          <li key={item.name}>
            <span
              onClick={() => handleFolderClick(item.name)}
              style={{ cursor: "pointer" }}
            >
              {openFolders[item.name] ? (
                <FaFolderOpen style={{ color: "#848D97", marginRight: 5 }} />
              ) : (
                <FaFolder style={{ color: "#848D97", marginRight: 5 }} />
              )}
              {item.name}
            </span>
            {openFolders[item.name] && <Helper data={item.children} />}
          </li>
        );
      })}
    </ul>
  );
};

export default Helper;
