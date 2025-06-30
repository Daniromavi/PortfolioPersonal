import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());



export function useHello() {
    return useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`, fetcher);
}
