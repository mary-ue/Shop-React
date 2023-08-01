function Footer() {
  return (
    <footer className="page-footer blue darken-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/mary-ue">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
