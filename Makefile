
all: regex_dot.js trie_dot.js 


install:
	npm install @types/node --save-dev
	npm install regexp-tree
	npm install -g browserify # Have to install globally

regex_dot.js: regex_dot.ts
	tsc regex_dot.ts --lib es2015 --outFile regex_dot.intermediate.js
	browserify regex_dot.intermediate.js --standalone regexDot -o regex_dot.js

trie_dot.js: trie_dot.ts
	tsc trie_dot.ts --lib es2015 --outFile trie_dot.js

clean:
	rm -rf *.js
	rm -rf node_modules

.PHONY: install clean
