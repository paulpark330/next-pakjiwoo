import { useRouter } from "next/router";

const Album = (props) => {
  const router = useRouter();
  const album = router.query.album;
  return <div>{album}</div>;
};

export default Album;
