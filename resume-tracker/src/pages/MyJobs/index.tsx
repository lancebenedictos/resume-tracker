import { getUserJobs } from "@/api/jobs";
import UserJobs from "@/models/UserJobs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import JobCard from "./JobCard";
import Loader from "@/components/ui/Loader";
function MyJobs() {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { data: jobs, isLoading } = useQuery({
    queryKey: ["userJobs"],
    queryFn: () => getUserJobs(1),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: getUserJobs,
    onSuccess: (newData, _, context: UserJobs[]) => {
      if (newData.length < 10) setHasMore(false);
      setPage((page) => page + 1);
      queryClient.setQueryData(["userJobs"], [...context, ...newData]);
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div className="sm:w-[90%] md:w-[80%] mx-auto">
      {jobs && jobs.length > 0 ? (
        <InfiniteScroll
          dataLength={jobs!.length}
          next={() => mutation.mutate(page)}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
          endMessage={<p>No more data to load.</p>}
        >
          {jobs &&
            jobs.map((job: UserJobs) => <JobCard job={job} key={job._id} />)}
        </InfiniteScroll>
      ) : (
        <p>No jobs saved</p>
      )}
    </div>
  );
}

export default MyJobs;
