# shabigail2017-site
The website for the wedding of Abigail Mae Malloy and some loser

# Running

0. Get node.  On most systems, you can just run `curl -L https://git.io/n-install | bash` - see [the N project](https://github.com/tj/n)
1. Clone the repo: `git clone https://github.com/amacleay/shabigail2017-site.git; cd shabigail2017-site`
2. Install dependencies, using `npm`, the node task runner: `npm install`
  - For some reason, on ubuntu 14.04, you need to also run `npm rebuild node-sass` - "Why?", you may ask?  [Cause node](https://medium.com/@wob/the-sad-state-of-web-development-1603a861d29f#.uz25l3mqz)
3. Run the site with the `npm` task `dev` to run the site in developer mode, which hot-refreshes as you edit - `npm run dev`
  - Navigate to [http://localhost:8080](http://localhost:8080) to test it out
4. Build the site with the `npm` task `dev` and then serve the production version of the site:
  - `npm run build`
  - `npm start`
  - Navigate to [http://localhost:8000](http://localhost:8000) to test it out

  ## History

Created via
```
npm install yo generator-universal-react-and-redux
node_modules/.bin/yo universal-react-and-redux
```

## Errata

I want to use [bootstrap-loader](https://github.com/shakacode/bootstrap-loader) with `extractStyles` enabled, but there appears to be a version mismatch between the bootstrap-loader that is installed and the [extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) installed.  I can make the thing work by manually modifying `node_modules/bootstrap-loader/lib/utils/buildExtractStylesLoader.js`:
```
// replace the final statement:
return ExtractTextPlugin.extract({ fallbackLoader: fallbackLoader, loader: restLoaders });
// with
return ExtractTextPlugin.extract(fallbackLoader, restLoaders );
```
