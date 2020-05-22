#!/usr/bin/env bash

printf "Building styles ...\n"
sass src/form-elements.sass:dist/form-elements.css
printf "Building scripts ...\n"
tsc

printf "Done.\n"
