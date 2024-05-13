import React, { useState } from 'react';
import Arrow from "../../assets/arrow.png";
import "../Collapse/Collapse.scss";

const Collapse = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div class="contentDivCollapse" >
      <div className="clickableDiv" onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
        <h2>{title}</h2>
        <img className={`arrow ${!collapsed ? 'active' : ''}`} src={Arrow} alt="" />
      </div>
      {!collapsed && <div className="content">{children}</div>}
    </div>
  );
};

export default Collapse;
