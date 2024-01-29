export const InputHelperText = ({
  children,
  ...rest
}: React.ComponentProps<"p">) => {
  return <p {...rest}>{children}</p>;
};
