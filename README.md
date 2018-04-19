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

# Archive
Archived at http://shabigail2017-archive.s3-website-us-east-1.amazonaws.com
To build archived (static) version and push it:

```sh
yarn build
cd build
aws-vault exec personal -- aws s3 sync . s3://shabigail2017-archive
```
