import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    console.error("Error fetching repositories:", error);
  }

  return {
    repositories: data?.repositories ?? { edges: [] },
    loading,
    refetch,
  };
};

export default useRepositories;
