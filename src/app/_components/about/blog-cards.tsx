import Text from "@/components/ui/text";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { blogPosts } from "./blogs-data";

type Props = {
  length?: number;
  page?: number;
};

const BlogCard = ({ length, page = 1 }: Props) => {
  const postsPerPage = 8;

  const totalPosts = length ? Math.min(length, blogPosts.length) : blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const startIndex = (page - 1) * postsPerPage;
  const endIndex = Math.min(startIndex + postsPerPage, totalPosts);
  const displayedPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <div className="relative mt-10">
      <Text className="mb-4 text-lg font-light text-black dark:text-white">
        Latest About Blogs
      </Text>
      <div>
        <div className="flex flex-col gap-3 transition-all duration-300">
          {displayedPosts.map((post) => (
            <div
              key={post.id}
              className="cursor-pointer rounded-xl border border-neutral-200 bg-violet-100 p-4 outline-4 outline-transparent transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:outline-neutral-400 dark:border-neutral-900 dark:bg-neutral-700/30 dark:hover:border-neutral-800 dark:hover:outline-neutral-600"
            >
              <Text
                variant="h2"
                className="text-lg text-neutral-700 dark:text-white"
              >
                {post.title}
              </Text>
              <Text className="mt-1">{post.excerpt}</Text>
            </div>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href={`?page=${page - 1}`}
            className={`flex items-center ${page === 1 ? 'pointer-events-none opacity-50' : ''}`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
            Previous
          </Link>
          <span>
            Page {page} of {totalPages}
          </span>
          <Link
            href={`?page=${page + 1}`}
            className={`flex items-center ${page === totalPages ? 'pointer-events-none opacity-50' : ''}`}
          >
            Next
            <ChevronRightIcon className="h-5 w-5" />
          </Link>
        </div>
      )}

      {!length && (
        <Link
          href={"/"}
          className="group flex w-fit cursor-pointer place-items-center gap-2 py-2 align-middle transition-all duration-200 ease-in"
        >
          <div className="text-sm transition-all duration-200 ease-in dark:text-neutral-400 dark:group-hover:text-white">
            Read more
          </div>
          <ArrowRightIcon className="-translate-x-4 opacity-0 transition-all duration-200 ease-in group-hover:translate-x-0 group-hover:opacity-100" />
        </Link>
      )}

      <div className="absolute left-1/2 mt-8 h-[0.8px] w-screen -translate-x-1/2 bg-gradient-to-l from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
    </div>
  );
};

export default BlogCard;
