const formatted = (data) => {
  const cuisines = [
    { type: "mediterranean", label: "Mediterranean" },
    { type: "italian", label: "Italian" },
    { type: "spanish", label: "Spanish" },
    { type: "french", label: "French" },
    { type: "vietnamese", label: "Vietnamese" },
    { type: "newamerican", label: "New American" },
    { type: "korean", label: "Korean" },
    { type: "mexican", label: "Mexican" },
    { type: "japanese", label: "Japanese" },
    { type: "thai", label: "Thai" },
    { type: "seafood", label: "Seafood" },
    { type: "chinese", label: "Chinese" },
    { type: "cocktailbars", label: "Gastropub" },
    { type: "latin", label: "Latin" },
    { type: "other", label: "Mystery" },
  ];

  let catMatcher = (cuisines, apiCats) => {
    for (let cuisine of cuisines) {
      for (let cat of apiCats) {
        if (cat === cuisine.type) {
          return cuisine;
        }
      }
    }
    if (
      apiCats.includes("szechuan") ||
      apiCats.includes("shanghainese") ||
      apiCats.includes("cantonese") ||
      apiCats.includes("dimsum")
    ) {
      return cuisines.find((e) => e.type === "chinese");
    } else if (
      apiCats.includes("tradamerican") ||
      apiCats.includes("comfort") ||
      apiCats.includes("comfortfood")
    ) {
      return cuisines.find((e) => e.type === "newamerican");
    } else if (apiCats.includes("sushi") || apiCats.includes("ramen")) {
      return cuisines.find((e) => e.type === "japanese");
    } else if (apiCats.includes("pizza")) {
      return cuisines.find((e) => e.type === "italian");
    } else if (apiCats.includes("tacos")) {
      return cuisines.find((e) => e.type === "mexican");
    } else {
      return cuisines.find((e) => e.type === "other");
    }
  };

  let catReducer = (categories) => {
    return categories.map((e) => e.alias);
  };

  return data.map((e) => {
    return {
      name: e.name,
      location: e.location.display_address[0],
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
