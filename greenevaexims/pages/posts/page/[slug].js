import Pagination from "@components/Pagination";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Banner from "@layouts/components/Banner";
import Cta from "@layouts/components/Cta";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { gsap } from "@lib/gsap";
import Post from "@partials/Post";
import { useEffect, useRef } from "react";
const { blog_folder } = config.settings;
import postData from "@config/products.json";
import { markdownify } from "@lib/utils/textConverter";

// blog pagination
const BlogPagination = ({
  postIndex,
  posts,
  authors,
  currentPage,
  pagination,
}) => {
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const { frontmatter } = postIndex;
  const { title } = frontmatter;
  const chipsRef = useRef(null); // Create separate ref for chips
  const frenchFriesRef = useRef(null); // Create separate ref for french fries
  const tableRef = useRef(null); // Create separate ref for table

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to([chipsRef.current, frenchFriesRef.current, tableRef.current], { // Use all refs in animation
        opacity: 1,
        duration: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Base title='Product'>
      <section className="section pt-0">
        <div className="container">
          <div className="animate lg:col-5 lg:order-1">
            <h2 className="mt-6 section-title bar-left">Chips Purpose</h2>
          </div>
          <div
            className="row justify-center pt-10 pb-16 opacity-0"
            ref={chipsRef} // Attach chips ref to div
          >
            {postData.products.chips.map((post, i) => (
              <div key={`key-${i}`} className="mb-8 lg:col-3">
                <Post post={post} />
              </div>
            ))}
          </div>
          <div className="animate lg:col-5 lg:order-1">
            <h2 className="mt-6 section-title bar-left">French Fries Purpose</h2>
          </div>
          <div
            className="row justify-center pt-10 pb-16 opacity-0"
            ref={frenchFriesRef} // Attach french fries ref to div
          >
            {postData.products.french_fries.map((post, i) => (
              <div key={`key-${i}`} className="mb-8 lg:col-3">
                <Post post={post} />
              </div>
            ))}
          </div>
          <div className="animate lg:col-5 lg:order-1">
            <h2 className="mt-6 section-title bar-left">Table Purpose</h2>
          </div>
          <div
            className="row justify-center pt-10 pb-16 opacity-0"
            ref={tableRef} // Attach table ref to div
          >
            {postData.products.table.map((post, i) => (
              <div key={`key-${i}`} className="mb-8 lg:col-3">
                <Post post={post} />
              </div>
            ))}
          </div>
          {/* <Pagination
            section={blog_folder}
            totalPages={totalPages}
            currentPage={currentPage}
          /> */}
        </div>
      </section>
      {/* CTA */}
      <Cta />
    </Base>
  );
};


export default BlogPagination;

// get blog pagination slug
export const getStaticPaths = () => {
  const getAllSlug = getSinglePage(`content/${blog_folder}`);
  const allSlug = getAllSlug.map((item) => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

// get blog pagination content
export const getStaticProps = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = getSinglePage(`content/${blog_folder}`);
  const postIndex = await getListPage(`content/${blog_folder}/_index.md`);

  return {
    props: {
      pagination: pagination,
      posts: posts,
      currentPage: currentPage,
      postIndex: postIndex,
    },
  };
};
