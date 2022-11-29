const formatted = (data) => {
  const cuisines = [
    "mediterranean",
    "italian",
    "french",
    "vietnamese",
    "australian",
    "korean",
    "spanish",
    "american",
    "thai",
  ];

  let catMatcher = (cuisines, apiCats) => {
    for (let cuisine of cuisines) {
      for (let cat of apiCats) {
        if (cat === cuisine) {
          return cuisine;
        }
      }
    }
    return "other";
  };

  let catReducer = (categories) => {
    return categories.map((e) => e.alias);
  };

  return data.map((e) => {
    return {
      name: e.name,
      id: e.id,
      price: e.price,
      image_url: e.image_url,
      coordinates: e.coordinates,
      categories: catMatcher(cuisines, catReducer(e.categories)),
    };
  });
};

module.exports = { formatted };
