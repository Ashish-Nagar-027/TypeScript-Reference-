
To create typescript config json file 
  tsc --init


To check version of ts   
  tsc -v


To compile ts in js
  tsc "jsFileName.ts"


To listen every change and compile on every change 
  tsc --w  "file name .ts"


If we want only specific file to get complile 
we can add files in tsconfig.json 
ex:
  "files" : ["farmstand.ts", "index.ts"]


we can also tell typescirpt to touch few specific files and ignore files with 'include' and 'exclude' options
just open tsconfig.js and add 

  "include" : ["folderPath"]

if we including full folder and want few files to exclude from there we use exclude
  "exclude" : ["folderPath/fileName.ts"]



when we complile ts file, an js file gets created alongsilde with ts file . but if we want to change directory of compiled js file. we can do that . just go in tsconfig.json file and file 'outDir' and include "folder path" as value where you want to keep you js file

  "outDir" : "./folderPath"
 



