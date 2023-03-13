# typescript helping commands and settings

typescript tsconfig.json files contains a lot settings for managing typescript.

==============================================

## To create typescript config json file

=> tsc --init

==============================================

## To check version of ts

=> tsc -v

==============================================

## To compile ts in js

=> tsc "jsFileName.ts"

if we want to compile multiple ts files then simpley go to that folder with terminal and use tsc. it will compile all .ts files.
it also works for watch mode
==============================================

## To listen every change and compile on every change (watch mode)

=> tsc --w "file name .ts"

==============================================

## If we want only specific file to get complile we can add files in tsconfig.json

ex:
"files" : ["farmstand.ts", "index.ts"]

files specifies an allowlist of files to include in the program . An error occurs if any of the files can't be found.
we can add 'files' section after compilterOptions.

## we can also tell typescirpt to touch few specific files and ignore files with 'include' and 'exclude' options

just open tsconfig.js and add

"include" : ["folderPath"]

## if we including full folder and want few files to exclude from there we use exclude

"exclude" : ["folderPath/fileName.ts"]

## when we complile ts file, an js file gets created alongsilde with ts file . but if we want to change directory of compiled js file. we can do that . just go in tsconfig.json file and file 'outDir' and include "folder path" as value where you want to keep you js file

"outDir" : "./folderPath"
