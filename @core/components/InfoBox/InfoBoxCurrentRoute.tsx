import { useRouter } from "next/router";

export const InfoBoxCurrentRoute = ({
  children,
}: React.ComponentProps<"p">) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  console.log(router);
  console.log(currentRoute);

  return <p>{children}</p>;
};
