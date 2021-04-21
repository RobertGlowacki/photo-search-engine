# PhotoSearchEngine

Application uses Usplash API to search photos with live hints. After sending a query it returns matching photos which can be expanded in modal.

# Author

Robert Głowacki

[GitLab](https://gitlab.com/r.glowacki) [Linkedin](https://www.linkedin.com/in/glowacki-robert/)


#Live version

[Live version](https://robertglowacki.github.io/photo-search-engine/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Building
In order to build prod version use:

```bash
ng build --prod --base-href "https://robertglowacki.github.io/photo-search-engine/"
```

In order to send version to GitHub Pages
```bash
npx angular-cli-ghpages -- dir=dist/photo-search-engine
```
