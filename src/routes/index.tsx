import { createFileRoute } from "@tanstack/react-router";
import { Guide } from "@/components/guide";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Guide />;
}
