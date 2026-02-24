export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerBrand">Banff Hikes</div>
        <nav className="footerNav" aria-label="Footer">
          <a href="/" className="footerLink">Home</a>
          <a href="/browse-hikes" className="footerLink">Browse Hikes</a>
          <a href="/contact" className="footerLink">Contact</a>
        </nav>
        <div className="footerCopy">&copy; {new Date().getFullYear()} Banff Hikes. All rights reserved.</div>
      </div>
    </footer>
  );
}
