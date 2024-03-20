import { useState } from "react";
import SearchBar from "./SearchBar";
import Job from "@/models/Job";
import InfiniteScroll from "react-infinite-scroll-component";
import { searchJob } from "@/api/jobs";
import JobCard from "./JobCard";

function Home() {
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [radius, setRadius] = useState(70);
  const [query, setQuery] = useState("");

  async function searchJobs(query: string = "", page: number = 1) {
    const res = await searchJob(query, (page + 1).toString(), radius);
    setPage((page) => page + 1);

    if (res.length < 10) {
      setHasMore(false);
    }
    setJobs((jobs) => [...jobs, ...res]);
  }

  async function searchJobsPageOne(query: string = "") {
    const res = await searchJob(query, "1", radius);
    setPage(1);
    if (res.length < 10) {
      setHasMore(false);
    }

    setJobs(res);
  }
  return (
    <div className="w-[80%] mx-auto">
      <SearchBar
        searchJobs={searchJobsPageOne}
        setRadius={setRadius}
        radius={radius}
        setQuery={setQuery}
      />
      {jobs.length > 0 ? (
        <InfiniteScroll
          dataLength={jobs.length}
          next={() => searchJobs(query, page)}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
          endMessage={<p>No more data to load.</p>}
        >
          {jobs && jobs.map((job) => <JobCard job={job} key={job.job_id} />)}
        </InfiniteScroll>
      ) : (
        <p>Search for jobs</p>
      )}
    </div>
  );
}

export default Home;
