import type { MetaFunction } from "@remix-run/node";
import { Menu } from '../components/menu';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <h1>Home</h1>
      <Menu />
    </main>
  );
}
