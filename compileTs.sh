#!/bin/sh

if [ ! -d build ]; then
	echo "création du répertoire script"
	mkdir build
fi

# npx tsc src/config.ts src/case.ts src/map.ts src/partie.ts src/canvas.ts -t ES2019 --outFile build/canvas.js
npx tsc
curl -X POST -s --data-urlencode 'input@build/canvas.js' https://javascript-minifier.com/raw > build/canvas.min.js
rm build/canvas.js

echo "compilation terminer"