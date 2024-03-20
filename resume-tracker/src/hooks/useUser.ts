import { checkUser } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["user"],
    queryFn: checkUser,
  });

  return { user: data, isLoading, isError, status };
};

export default useUser;
