# TypeScript Notes

This a a repo containing some of my notes while learning Typescript

If you want to play around with Typescript as well,

- To Install TypeScript globally to your machine
  through 'npm install -g typescript' or 'brew install typescript'

- To complile your TypeScript code run:
  'tsc (your-filename-goes-here).ts'

This code was a follow-along from Academind's TypeScript tutorial(https://youtu.be/BwuLxPH8IDs) along with some of my code I play around with to get a better understanding.

# Order

The order in which I learned these data types go in this order by filename:

1. Basics

2. Obj-Arr-Enum

3. Union-Alias

4. Functions

5. Unknown-Never

# Other Notes:

- Watch Mode:
  if you've noticed we have to run 'tsc (your-filename-goes-here).ts' for every file we want to compile to see changes for. if you add to the end of your tsc command --watch or -w. So whenever you change anything on the file and save the changes, it will automatically recompile.
  ex: 'tsc (your-filename-goes-here).ts -w'
  Watch mode is great for watching one single file, next will be how to compile an entire project.

- Compile Entire Project:
  If we want to replicate the watch mode for our entire project you run the command 'tsc --init' you only need to run this once and it will itiialize your project as a TypeScipt project. The command creates a tsconfig.json file, that will allow you to just run the command tsc and it will compile all '.ts' files. This method also works with the Watch Mode 'tsc -w' will recompile every ts file whenever a ts file is saved
