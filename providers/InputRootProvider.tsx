import { ReactNode, createContext, useContext } from "react";

type SharedProps = {
  sharedProps?: {
    error?: string;
  };
};

interface InputRootProviderProps extends SharedProps {
  children: ReactNode;
}

const Context = createContext({} as SharedProps);

const InputRootProvider = ({
  children,
  sharedProps,
}: InputRootProviderProps) => {
  return (
    <Context.Provider value={{ sharedProps }}>{children}</Context.Provider>
  );
};

const useInputRootContext = () => {
  return useContext(Context);
};

export { type SharedProps, InputRootProvider, useInputRootContext };
