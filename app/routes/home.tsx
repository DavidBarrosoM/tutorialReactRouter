import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title:"Busca Libros - Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>hola</>;
}
