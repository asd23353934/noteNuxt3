export const useParams = () => {
  const route = useRoute();
  const idParams = computed(() => route.params.id as string);
  const tagParams = computed(() => route.params.tag as string);

  return { route, idParams, tagParams };
};
