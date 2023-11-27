import { Link, useLoaderData } from "@remix-run/react";
import { useState } from 'react';
import { Menu } from '../components/menu';
import {
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { json } from "@remix-run/node";

const getPosts = async ({ pageParam = 1 }) => {
  const res = await fetch(`https://api.github.com/users/syuji-higa/repos?per_page=10&page=${pageParam}`, {
    headers: {
      "Content-Type": "application/json",
    }
  });

  console.log(res);
  
  return await res.json() as Array<{ id: number, name: string }>;
};

export const loader = async () => {
  const posts = await getPosts({ pageParam: 1 });
  return json({ posts });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam }) => await getPosts({ pageParam }),
    initialData: {
      pageParams: [1],
      pages: [posts],
    },
    getNextPageParam: (_lastPage, _pages, lastPageParam) => {
      console.log(lastPageParam);
      return lastPageParam + 1;
    },
    initialPageParam: 1,
  });

  const queryClient = useQueryClient();

  const handleClickReload = () => {
    queryClient.resetQueries({ queryKey: ['posts'] });
  }

  const handleClickMore = () => {
    fetchNextPage();
  }

  return (
    <main>
      <h1>Posts</h1>
      <Menu />
      <button type="button" onClick={handleClickReload}>Reload</button>
      <ul>
        {data.pages.map((items) => (
          items.map(({ id, name }) => (
            <li key={id}>
              <Link
                to={String(id)}
                className="text-blue-600 underline"
              >
                {name}
              </Link>
            </li>
          ))
        ))}
      </ul>
      <button type="button" onClick={handleClickMore}>More</button>
    </main>
  );
}
