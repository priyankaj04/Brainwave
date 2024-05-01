import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div style={{display:'flex', alignItems:'center', justifyContent:'center', height: '100vh'}} className="flex items-center justify-center h-full">{children}</div>;
};

export default AuthLayout;
