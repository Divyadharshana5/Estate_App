export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts" + params.id);
};
