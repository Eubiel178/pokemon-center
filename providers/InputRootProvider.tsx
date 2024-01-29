import { ReactNode, createContext, useContext } from "react";

interface InputRootProviderProps {
  children: ReactNode;
  sharedProps?: {
    error?: string;
  };
}

type SharedProps = Pick<InputRootProviderProps, "sharedProps">;

const InputRootContext = createContext({} as SharedProps);

const InputRootProvider = ({
  children,
  sharedProps,
}: InputRootProviderProps) => {
  return (
    <InputRootContext.Provider value={{ sharedProps }}>
      {children}
    </InputRootContext.Provider>
  );
};

const useInputRootContext = () => {
  return useContext(InputRootContext);
};

export { type SharedProps, InputRootProvider, useInputRootContext };
