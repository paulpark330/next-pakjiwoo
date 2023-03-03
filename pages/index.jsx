import Head from "next/head";
import { getAllCollections } from "../helpers/api-utils";
import shuffle from "lodash.shuffle";

import CollectionMasonry from "../components/collections/collection-masonry";

const Home = (props) => {
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

export default Home;

export const getStaticProps = async () => {
  const allCollections = await getAllCollections();

  return {
    props: { collection: shuffle(allCollections) },
    revalidate: 60,
  };
};
