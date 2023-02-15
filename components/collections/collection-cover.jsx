import Image from "next/image";

const CollectionCover = ({ imageUrl, width, height }) => {
  return (
    
    <Image
      width={width}
      height={height}
      src={imageUrl ? imageUrl : "/images/placeholder.png"}
      // unoptimized={true}
      // quality={100}
      priority
      alt={imageUrl ? imageUrl : "/images/placeholder.png"}
    />
  );
};

export default CollectionCover;
