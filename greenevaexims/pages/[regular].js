import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import Default from "@layouts/Default";
import { getRegularPage, getSinglePage } from "@lib/contentParser";

// for all regular pages
const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {layout === "404" ? (
        <NotFound data={data} />
      ) : (
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;


// for regular page routes
export const getStaticPaths = async () => {
  const slugs = getSinglePage("content");
  const staticPaths = ['about', 'contact', 'other-static-page']; // Add all your static paths here
const paths = slugs
    .filter((item) => !staticPaths.includes(item.slug)) // Exclude static paths
    .map((item) => ({
      params: {
        regular: item.slug,
      },
    }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const allPages = await getRegularPage(regular);

  return {
    props: {
      slug: regular,
      data: allPages,
    },
  };
};
