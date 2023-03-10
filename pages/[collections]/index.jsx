import Head from "next/head";
import CollectionMasonry from "../../components/collections/collection-masonry";

import { getCollectionByName, getNavOptions } from "../../helpers/api-utils";

const Collections = (props) => {
  return (
    <div>
      <Head>
        <title>Pak Jiwoo</title>
        <meta name="description" content="Jiwoo Park is a Korean American photographer based in Seoul Korea." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.collection && <CollectionMasonry collection={props.collection} />}
    </div>
  );
};

export default Collections;

export const getStaticProps = async (context) => {
  const collection = context.params.collections;
  const selectedCollection = await getCollectionByName(collection);

  return {
    props: { collection: selectedCollection },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const collections = getNavOptions();

  const paths = collections.map((collection) => ({
    params: { collections: collection.category },
  }));

  return {
    paths,
    fallback: false,
  };
};
