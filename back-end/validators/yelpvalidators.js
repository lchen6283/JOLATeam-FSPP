const formatted = (data) => {
  const cuisines = [
    "mediterranean",
    "italian",
    "spanish",
    "french",
    "vietnamese",
    "newamerican",
    "korean",
    "mexican",
    "japanese",
    "thai",
    "seafood",
    "chinese",
    "cocktailbars",
    "latin",
    "other",
  ];

  let catMatcher = (cuisines, apiCats) => {
    for (let cuisine of cuisines) {
      for (let cat of apiCats) {
        if (cat === cuisine) {
          return cuisine;
        }
      }
    }
    if (
      apiCats.includes("szechuan") ||
      apiCats.includes("shanghainese") ||
      apiCats.includes("shanghainese")
    ) {
      return "chinese";
    } else if (
      apiCats.includes("tradamerican") ||
      apiCats.includes("comfort")
    ) {
      return "newamerican";
    } else {
      console.log(apiCats, "HERE IS API CATS NOW");
      return "other";
    }
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
      originalcategories: catReducer(e.categories),
      matchedcategory: catMatcher(cuisines, catReducer(e.categories)),
    };
  });
};

module.exports = { formatted };
