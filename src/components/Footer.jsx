const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-[var(--border-color)] bg-[var(--bg-color)]">
      <p className="text-sm opacity-60">
        &copy; {new Date().getFullYear()} PriyaPrakasam. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
