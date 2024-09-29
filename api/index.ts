import type { IHttpOption } from "@hsinhe/nuxtmodule";

export const $BackendAPI = async (option: IHttpOption) => {
  const runtimeConfig = useRuntimeConfig();
  const apiBase =
    runtimeConfig.apiBackend ||
    import.meta.env.VITE_API_BACKEND ||
    "https://www.sohsin.com/v1";
  try {
    const { data, error, execute, refresh } = await useFetch(
      `${apiBase}${option.url}`,
      {
        method: option.method,
        query: option?.query ?? undefined,
        body: option?.body ?? undefined,
        watch: false,
        // initialCache: false
      }
    );
    return { data: data.value as any, error: error.value, execute, refresh };
  } catch (err) {
    throw err;
  }
};
