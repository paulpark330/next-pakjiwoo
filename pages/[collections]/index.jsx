import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";

import Image from "next/image";

import { getCollectionByName, getNavOptions } from "../../helpers/api-utils";

const Collections = (props) => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Masonry columns={3} spacing={1}>
          {props.collection.map((item) => (
            <Image
              width={item.cover.attributes.formats.small.width}
              height={item.cover.attributes.formats.small.height}
              key={item.id}
              src={item.cover.attributes.formats.large.url}
              alt={item.name}
              style={{ objectFit: "cover" }}
            />
          ))}
        </Masonry>
      </Box>
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
  const collections = await getNavOptions();
  const paths = collections.map((collection) => ({
    params: { collections: collection.category },
  }));

  return {
    paths,
    fallback: false,
  };
};
