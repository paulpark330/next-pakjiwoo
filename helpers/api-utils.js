// const API_URL = "http://localhost:1337";

const API_URL = "https://strapi-pakjiwoo.herokuapp.com"

export const getAllCollections = async () => {
  const response = await fetch(`${API_URL}/api/photos?populate=*`);
  const data = await response.json();

  const collections = [];

  data.data.forEach((collection) => {
    collections.push({
      id: collection.id,
      name: collection.attributes.collectionName,
      category: collection.attributes.category,
      cover: collection.attributes.cover.data,
      photos: collection.attributes.album.data,
    });
  });

  return collections;
};

export const getCollectionByName = async (name) => {
  const response = await fetch(`${API_URL}/api/photos?populate=*`);
  const data = await response.json();

  const collections = data.data.filter((collection) => {
    return collection.attributes.category === name;
  });

  if (collections) {
    const filteredCollections = [];
    collections.forEach((collection) => {
      filteredCollections.push({
        id: collection.id,
        name: collection.attributes.collectionName,
        category: collection.attributes.category,
        cover: collection.attributes.cover.data,
        photos: collection.attributes.album.data,
      });
    });
    return filteredCollections;
  } else {
    return null;
  }
};

export const getNavOptions = async () => {
  const response = await fetch(`${API_URL}/api/nav-options?populate=*`);
  const data = await response.json();

  const navOptions = [];

  data.data.forEach((option) => {
    navOptions.push({
      name: option.attributes.name,
      category: option.attributes.category,
      sort: option.attributes.sort,
    });
  });

  return navOptions.sort((a, b) => a.sort - b.sort);
};