import { getAllCollections, getCollectionByName } from "../../helpers/api-utils";

const Collections = (props) => {
  return (
    <div>
      <h1>{props.collection.name}</h1>
    </div>
  );
};

export default Collections;

export const getStaticProps = async (context) => {
  const collection = context.params.collections;
  const selectedCollection = await getCollectionByName(collection);

  console.log("selectedCollection : ", selectedCollection)

  return {
    props: { collection: selectedCollection },
  };
};

export const getStaticPaths = async () => {
  const collections = await getAllCollections();
  const paths = collections.map((collection) => ({
    params: { collections: collection.categories },
  }));

  return {
    paths,
    fallback: false,
  };
};
