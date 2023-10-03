# what is TypeScript ?

<details>
  <summary><font size=4> 
 1. TypeScript is superset of JavaScript.
 </font></summary>
  
  TypeScript is a superset of JavaScript. It means that TypeScript includes all the features and syntax of JavaScript while adding its own features on top of the JavaScript language.

TypeScript also adds a number of new features, including static typing, interfaces, generics, and type aliases.

TypeScript extends JavaScript's capabilities without breaking its compatibility.

</details>

<details>
  <summary><font size=4>
 2. TypeScript is typed JavaScript
 </font></summary>
  
TypeScript is typed JavaScript means that it adds a layer of static typing to JavaScript.

Static typing allows you to specify the types of data that are passed to and returned from functions, as well as the types of properties that objects can have. This can help to prevent errors and make your code more robust.

TypeScript includes all the features and syntax of JavaScript but extends it by introducing the concept of data types.

JavaScript is a dynamically typed language, which means that the types of data are not checked at compile time. This can lead to errors, such as passing the wrong type of data to a function or accessing a property that does not exist on an object.

TypeScript solves this problem by adding static typing to JavaScript. Static typing allows you to specify the types of data that are used in your code, and TypeScript will check these types at compile time. If there are any type errors, TypeScript will generate an error message.

</details>

<details>
  <summary><font size=4> 
3. Compiles to javascript
</font></summary>
  
TypeScript is a language that extends JavaScript with features such as static typing, interfaces, and other enhancements. However, browsers and JavaScript engines do not understand TypeScript directly. To run TypeScript code in a web browser or a Node.js environment, you need to transpile it into standard JavaScript code.

To compile TypeScript code, you can use the TypeScript compiler, which is a command-line tool. You can also use a build tool such as Webpack or Parcel to compile your TypeScript code.

When you compile TypeScript code, the TypeScript compiler removes all TypeScript-specific features and outputs pure JavaScript code.

This allows you to run your TypeScript code anywhere JavaScript runs, like In the browser, On Node.js,In Deno , In any JavaScript environment

</details>

<details>
  <summary><font size=4> 
4. TypeScript is developed by Microsoft .
  </font></summary>
  
TypeScript is developed and maintained by Microsoft. It was first announced in October 2012 as a way to help large-scale applications development. Since then, it has gained popularity and is used by many developers worldwide for building JavaScript applications.
</details>

<details>
  <summary><font size=4>  
5. TypeScript is an open-source programming language.
  </font></summary>
  
TypeScript is an open-source programming language, and its development is hosted on GitHub. Microsoft continues to actively maintain and enhance TypeScript, and the language is widely used in both Microsoft and non-Microsoft development environments.
</details>

<br>
<br>

# Why to to use TypeScript

<details>
  <summary><font size=4>  
1. Type Safety
  </font></summary>
  
JavaScript is dynamically typed, which means that variable types are determined at runtime. This can lead to type-related errors that may not become apparent until runtime, potentially causing unexpected behavior or crashes. TypeScript's static typing allows developers to catch type errors during development, reducing the risk of such issues in production code.
</details>

<details>
  <summary><font size=4>  
2. Code Readability and Maintainability
  </font></summary>

In JavaScript, it can be challenging to understand the expected types of function parameters and return values, especially in larger codebases. TypeScript's type annotations and interfaces improve code documentation and make it easier to understand and maintain code.

</details>

<details>
  <summary><font size=4>  
3. Large-Scale Codebases
  </font></summary>

As JavaScript projects grow in size and complexity, maintaining consistency and avoiding unintended side effects can become challenging. TypeScript provides a structured and type-safe way to manage large-scale applications, reducing the risk of errors and making codebases more maintainable

</details>
<details>

  <summary><font size=4>  
4. Compile-Time Checks
  </font></summary>

TypeScript's compilation process performs static analysis and checks for type errors. This means that many potential issues are caught before code is executed, enhancing code reliability.

</details>

<details>
  <summary><font size=4>  
5. Default TypeScript
  </font></summary>

TypeScript is used by Defult in angular and react-native. so there is no choice there you have to learn Typescript.
many big companies prefere typescript over javascript.

</details>

<br>
<br>
<br>

# what are main important features of typescript

<details>
  <summary><font size=4>  
1. Static Typing
  </font></summary>

TypeScript provides a static type system that allows you to specify data types for variables, function parameters, and function return values. This helps catch type-related errors during development and enhances code quality.

</details>

<details>
  <summary><font size=4>  
2. Interfaces 
  </font></summary>

Interfaces allow you to define for objects.

Interfaces allow you to define the structure or the shape of an object, without specifying how it will be implemented. This can be useful for ensuring that different parts of your code are compatible with each other.

</details>

<details>
  <summary><font size=4>  
3. Generics
  </font></summary>
 TypeScript supports generics, which enable you to create reusable, type-safe functions, classes, and data structures. Generics allow you to write more flexible and maintainable code.

Generics allow you to write code that can be used with different types of data, without having to duplicate code.

It allows you to create reusable components that work with multiple types.

</details>

<details>
  <summary><font size=4>  
4. Type aliases
  </font></summary>
 Type aliases allow you to create new types based on existing types. This can be useful for making your code more readable and maintainable.
</details>

<details>
  <summary><font size=4>  
5. Union and Intersection Types
  </font></summary>

TypeScript allows you to create union types that represent values that can be of multiple types and intersection types that combine multiple types. This flexibility is useful for handling a wide range of data scenarios

</details>

<details>
  <summary><font size=4>  
6. Enums
  </font></summary>

TypeScript supports enums, which are a way to define a set of named constant values. Enums can make your code more readable and self-documenting when you have a fixed set of related values.

</details>

<details>
  <summary><font size=4>  
7. Decorators
  </font></summary>

Decorators allow you to add additional functionality to classes, properties, methods, and accessors.

TypeScript supports decorators, which are a way to add metadata and behavior to classes and class members. Decorators are commonly used in libraries and frameworks like Angular for features like component annotations.

</details>
