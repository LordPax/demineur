npx tsc src/config.ts src/case.ts src/map.ts src/partie.ts src/canvas.ts -t ES2019 --outFile public/canvas.js
curl -X POST -s --data-urlencode 'input@public/canvas.js' https://javascript-minifier.com/raw > public/script/canvas.min.js
rm public/canvas.js