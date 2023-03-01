// const API_URL = "http://localhost:1337";

const API_URL = "https://strapi-pakjiwoo-production.up.railway.app";

export const getAllCollections = async () => {
  const response = await fetch(
    `${API_URL}/api/photos?populate[0]=cover&sort[0]=category%3Adesc&pagination[pageSize]=100`
  );
  const data = await response.json();

  if (data.data && data.data.length > 0) {
    const collections = [];

    data.data.forEach((collection) => {
      collections.push({
        id: collection.id,
        name: collection.attributes.collectionName,
        category: collection.attributes.category,
        cover: collection.attributes.cover.data,
      });
    });

    return collections;
  } else {
    return null;
  }
};

export const getCollectionByName = async (name) => {
  const response = await fetch(
    `${API_URL}/api/photos?filters[category][$eq]=${name}&populate[0]=cover&sort[0]=id`
  );
  const data = await response.json();

  if (data.data && data.data.length > 0) {
    const collections = [];
    data.data.forEach((collection) => {
      collections.push({
        id: collection.id,
        name: collection.attributes.collectionName,
        category: collection.attributes.category,
        cover: collection.attributes.cover.data,
      });
    });
    return collections;
  } else {
    return null;
  }
};

export const getAlbumById = async (category, id) => {
  const response = await fetch(
    `${API_URL}/api/photos?populate[0]=album&filters[category][$eq]=${category}&filters[id][$eq]=${id}`
  );
  const data = await response.json();

  if (data.data && data.data.length > 0) {
    return data.data[0].attributes.album.data;
  } else {
    return null;
  }
};

export const getNavOptions = () => {
  // const response = await fetch(`${API_URL}/api/nav-options`);
  // const data = await response.json();

  // const navOptions = [];

  // data.data.forEach((option) => {
  //   navOptions.push({
  //     name: option.attributes.name,
  //     category: option.attributes.category,
  //     sort: option.attributes.sort,
  //   });
  // });

  const navOptions = [
    { name: "Clients", category: "clients", sort: 1 },
    { name: "Personal", category: "personal", sort: 2 },
    { name: "Actor/Actress", category: "actor", sort: 3 },
    { name: "Music", category: "music", sort: 4 },
    { name: "Sihogonsa", category: "sihogonsa", sort: 5 },
    { name: "Wedding", category: "wedding", sort: 6 },
    { name: "Musical", category: "musical", sort: 7 },
  ];

  return navOptions;

  // return navOptions.sort((a, b) => a.sort - b.sort);
};
