export default function Budget({ budget, handleChange }) {
  return (
    <div class="mt-4 space-y-4">
      <div class="px-4 sm:px-0">
        <h2 class="text-lg font-medium leading-6 text-gray-900">
          Select A Budget
        </h2>
      </div>
      <div class="col-span-6 sm:col-span-3">
        <select
          value={budget}
          id="budget"
          name="budget"
          onChange={handleChange}
        >
          <option value="">Select An Option</option>
          <option value="100">100 $</option>
          <option value="150">150 $</option>
          <option value="200">200 $</option>
        </select>
      </div>
    </div>
  );
}
