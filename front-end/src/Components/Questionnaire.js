export default function Questionnaire({
  list,
  apiCategories,
  handleEliminationCheck,
  handleFlavorCheck,
  cuisineType,
  handleNotes,
}) {
  return (
    <>
      <div class="mt-4 space-y-4">
        <div class="px-4 sm:px-0">
          <h2 class="text-lg font-medium leading-6 text-gray-900">
            Eliminate Two Cuisines
          </h2>
        </div>
        <div class="px-4 sm:px-0">
          {apiCategories.map((category, i) => {
            return (
              <div class="flex items-start" key={i}>
                <div class="flex h-5 items-center">
                  <input
                    id={category}
                    name={category}
                    value={category}
                    onChange={handleEliminationCheck}
                    type="checkbox"
                    class=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label htmlFor={category} class="font-medium text-gray-700">
                    {category.toUpperCase()}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* 2ND QUIZ */}
      <div class="mt-4 space-y-4">
        <div class="px-4 sm:px-0">
          <h2 class="text-lg font-medium leading-6 text-gray-900">
            Choose your flavors
          </h2>
        </div>
        {list.map((item, i) => {
          return (
            <div class="flex items-start" key={i}>
              <div class="flex h-5 items-center">
                <input
                  id={item.word}
                  name={item.word}
                  value={item.word}
                  onChange={handleFlavorCheck}
                  type="checkbox"
                  class=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label htmlFor={item.word} class="font-medium text-gray-700">
                  {item.word.toUpperCase()}
                </label>
              </div>
            </div>
          );
        })}
      </div>
      <label
        htmlFor="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        <h2 class="text-lg font-medium leading-6 text-gray-900">
          Notes for your order
        </h2>
      </label>
      <textarea
        id="notes"
        value={cuisineType.notes}
        name="notes"
        rows="4"
        onChange={handleNotes}
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Spicy? Allergies? Customize here."
      ></textarea>
    </>
  );
}
