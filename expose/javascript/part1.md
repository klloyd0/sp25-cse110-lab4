1. Line 9 prints 'values added: 20'
2. Line 13 prints 'final result: 20'
3. 'var' should not be used because it's unable to be restricted within code blocks, therefore having the potential to interfere with code outside of the code blocks and disrupt the program or provided incorrect results
4. Line 9 prints 'values added: 20'
5. Line 13 prints an error that reads 'Uncaught ReferenceError: result is not defined'. This is because we declared 'let result = 0' within the code block, therefore containing it in that codeblock and only that codeblock. There's no other reference for result, nor a global variable, for Line 13 to work with.
6. This returns an error message that reads 'Uncaught TypeError: Assignment to constant variable'. I presume this means a constant can't be defined within a codeblock.
7. Line 13 likewise returned an error message for the same reason above.

