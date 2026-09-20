export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-6 py-2 font-medium hover:bg-primary/90 transition-colors"
        >
          Return home
        </a>
      </div>
    </div>
  );
}
