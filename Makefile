
all: clean install test
	@:

install:
	@npm install
	@component install

test:
	@./node_modules/.bin/mocha -R spec

clean:
	@rm -rf node_modules/
	@rm -rf components/

.PHONY: all test clean