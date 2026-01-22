import { useState, useEffect } from "react";
import React from "react";

const FooterSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setOpen(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <h3
        onClick={() => isMobile && setOpen(!open)}
        className={open ? "iconRotator" : ""}
      >
        {title}
      </h3>

      <ul style={{ display: open || !isMobile ? "block" : "none" }}>
        {React.Children.map(children, (child) => child)}
      </ul>
    </>
  );
};

export default FooterSection;
