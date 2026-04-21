import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="font-serif text-6xl font-semibold text-primary">404</p>
      <h1 className="mt-2 font-serif text-2xl">This page is not on the path.</h1>
      <p className="mt-2 text-muted-foreground">The page you're looking for doesn't exist.</p>
      <Button asChild className="mt-6 rounded-full">
        <Link to="/">Back to Discover</Link>
      </Button>
    </div>
  );
}
