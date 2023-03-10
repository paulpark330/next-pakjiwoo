import Head from "next/head";
import { getAlbumById, getAllCollections } from "../../../helpers/api-utils";
import AlbumMasonry from "../../../components/album/album-masonry";

const Album = (props) => {
  return (
    <>
      <div>
        <Head>
          <title>Pak Jiwoo</title>
          <meta name="description" content="Jiwoo Park is a Korean American photographer based in Seoul Korea." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {props.album && <AlbumMasonry album={props.album} />}
      </div>
    </>
  );
};

export default Album;

export const getStaticProps = async (context) => {
  const category = context.params.collections;
  const id = context.params.album;
  const album = await getAlbumById(category, id);
  return {
    props: { album },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const albums = await getAllCollections();

  const paths = albums.map((album) => ({
    params: { collections: album.category, album: album.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
