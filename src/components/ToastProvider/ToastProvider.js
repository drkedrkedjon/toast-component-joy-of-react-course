import React, { createContext, useState } from "react";
const ToastsContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  return (
    < ToastsContext.Provider value={{ toasts, setToasts }} >
      {children}
    </ToastsContext.Provider >
  )
}
export { ToastProvider, ToastsContext };
