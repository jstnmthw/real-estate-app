const host = process.env.NEXT_PUBLIC_API_HOST;
export default function fetcher<TResponse>(
  url: string,
  config: RequestInit = {},
) {
  return fetch(host + url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}
