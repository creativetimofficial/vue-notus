#!/usr/bin/env sh

# abort on errors
set -e

# build
rm -rf node_modules/
rm -rf package-lock.json
rm -rf dist/
npm install
npm run build:tailwind
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'https://demos.creative-tim.com/vue-notus' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/creativetimofficial/vue-notus.git master:gh-pages


cd -
