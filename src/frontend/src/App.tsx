import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";
import { NotFound } from "./pages/NotFound";

// Lazy-loaded pages
const Home = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.Home })),
);
const Portfolio = lazy(() =>
  import("./pages/Portfolio").then((m) => ({ default: m.Portfolio })),
);
const BrandDetail = lazy(() =>
  import("./pages/BrandDetail").then((m) => ({ default: m.BrandDetail })),
);
const Board = lazy(() =>
  import("./pages/Board").then((m) => ({ default: m.Board })),
);
const About = lazy(() =>
  import("./pages/About").then((m) => ({ default: m.About })),
);
const Contact = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.Contact })),
);
const Jobs = lazy(() =>
  import("./pages/Jobs").then((m) => ({ default: m.Jobs })),
);

function PageLoader() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    </Layout>
  );
}

// Route tree
const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Home />
    </Suspense>
  ),
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Portfolio />
    </Suspense>
  ),
});

const brandDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio/$brandId",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <BrandDetail />
    </Suspense>
  ),
});

const boardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/board",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Board />
    </Suspense>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <About />
    </Suspense>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Contact />
    </Suspense>
  ),
});

const jobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jobs",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Jobs />
    </Suspense>
  ),
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  portfolioRoute,
  brandDetailRoute,
  boardRoute,
  aboutRoute,
  contactRoute,
  jobsRoute,
  notFoundRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
