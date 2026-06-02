import { Link } from "@tanstack/react-router";
import { Layout } from "../components/Layout";

export function NotFound() {
  return (
    <Layout>
      <section
        className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center"
        data-ocid="not-found"
      >
        <p className="text-xs tracking-widest uppercase text-accent font-semibold mb-4">
          404
        </p>
        <h1 className="font-display text-4xl lg:text-6xl text-foreground mb-6">
          Page Not Found
        </h1>
        <p className="text-muted-foreground max-w-md mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let us
          help you find your way.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors duration-200"
          data-ocid="not-found-cta"
        >
          Return to Home
        </Link>
      </section>
    </Layout>
  );
}
