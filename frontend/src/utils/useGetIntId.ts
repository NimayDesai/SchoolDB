import { useRouter } from "next/router";

export const useGetIntegerId = (): number => {
  // Get the router
  const router = useRouter();
  // Create a variable that gets the id from the url
  const intrgerId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  return intrgerId;
};
