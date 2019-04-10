# handlebarstest
# https://github.com/foxdm2/handlebarstest
#
# Copyright (c) 2019, 
# Licensed under the MIT license.

test:

	@NODE_ENV=test ./node_modules/mocha/bin/mocha -R spec --ui bdd --colors --recursive -t 8000 ./test/*.spec.js

.PHONY: test