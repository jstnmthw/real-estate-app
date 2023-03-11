const host = process.env.NEXT_PUBLIC_API_HOST;
export default function fetcher(url: string) {
  return fetch(host + url).then((response) => response.json());
}
