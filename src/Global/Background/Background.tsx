import React from "react";

interface BackgroundProps {
  children: React.ReactNode;
}

export default ({ children }: BackgroundProps) => {
  return (
    <div style={{ background: "#dae0e2", position: "relative" }}>
      {children}
    </div>
  );
};
