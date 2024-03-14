install: 
	rm -rf ./node_modules && npm ci --force

start:
	npm run start:dev

lint:
	npm run lint

test:
	npm run test

