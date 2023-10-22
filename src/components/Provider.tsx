import React from "react";

type ProviderProps = {
  children: React.ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  return <>{children}</>;
};

export default Provider;
