#!/usr/bin/env bash
# Build the static site and publish dist/public to the gh-pages branch,
# which GitHub Pages serves at the custom domain in client/public/CNAME.
set -euo pipefail
cd "$(dirname "$0")/.."

npx vite build
# Pages has no SPA rewrite; serving index.html as 404.html lets deep links
# like /team load the app, which then routes client-side.
cp dist/public/index.html dist/public/404.html

cd dist/public
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C ../.. config user.name)" \
    -c user.email="$(git -C ../.. config user.email)" \
    commit -q -m "Deploy $(git -C ../.. rev-parse --short HEAD)"
# Push from the main checkout so its remote and credentials are used.
cd ../..
git fetch -q dist/public gh-pages
git push -f origin FETCH_HEAD:refs/heads/gh-pages
rm -rf dist/public/.git
