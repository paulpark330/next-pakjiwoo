import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Image from "next/image";

import { getCollectionByName, getNavOptions } from "../../helpers/api-utils";

const Collections = (props) => {
  const theme = useTheme();
  const isXlarge = useMediaQuery(theme.breakpoints.up("xl"));
  const isLarge = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isMedium = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isSmall = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const size = () => {
    if (isXlarge || isLarge) return "medium";
    else return "small";
  };

  const columns = () => {
    if (isXlarge) return 4;
    else if (isLarge || isMedium) return 3;
    else if (isSmall) return 2;
    else if (isMobile) return 1;
  };

  return (
    <div>
      {props.collection && (
        <Box sx={{ width: "100%", height: "100%" }}>
          <Masonry columns={columns()} spacing={1} sx={{ margin: 0 }}>
            {props.collection.map((item) => (
              <Image
                width={item.cover.attributes.formats[size()].width}
                height={item.cover.attributes.formats[size()].width}
                key={item.id}
                src={item.cover.attributes.formats.large.url}
                alt={item.name}
                style={{ objectFit: "cover" }}
              />
            ))}
          </Masonry>
        </Box>
      )}
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
