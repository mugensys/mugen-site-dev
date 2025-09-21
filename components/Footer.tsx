export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-sm">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
        <p>&copy; {new Date().getFullYear()} Mugen Systems. All rights reserved.</p>
        <nav aria-label="Footer">
          <a href="#home" className="hover:underline">Back to top</a>
        </nav>
      </div>
    </footer>
  );
}
