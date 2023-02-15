export const getAllCollections = async () => {
  const response = await fetch(
    "https://strapi-pakjiwoo.herokuapp.com/api/photos?populate=*"
  );
  const data = await response.json();

  const collections = [];

  data.data.forEach((collection) => {
    collections.push({
      id: collection.id,
      name: collection.attributes.collectionName,
      categories: collection.attributes.categories,
      cover: collection.attributes.cover.data,
      photos: collection.attributes.album.data,
    });
  });

  return collections;
};

export const getCollectionByName = async (name) => {
  const response = await fetch(
    `https://strapi-pakjiwoo.herokuapp.com/api/photos?populate=*`
  );
  const data = await response.json();

  const collection = data.data.find((collection) => {
    return collection.attributes.categories === name;
  });


  return {
    id: collection.id,
    name: collection.attributes.collectionName,
    categories: collection.attributes.categories,
    cover: collection.attributes.cover.data,
    photos: collection.attributes.album.data,
  }
};
