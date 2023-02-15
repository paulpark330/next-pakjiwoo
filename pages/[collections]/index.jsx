import { Box, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { getCollectionByName, getNavOptions } from "../../helpers/api-utils";
import styles from "../../styles/Collections.module.scss";

const Collections = (props) => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={10}>
          {props.collection.map((item) => (
            <ImageListItem className={styles["image-list-item"]} key={item.id}>
              <Image
                fill
                src={item.cover.attributes.formats.large.url}
                alt={item.name}
                style={{ objectFit: "cover" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
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
