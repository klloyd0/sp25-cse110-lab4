1. Line 12 prints '3' since 'i' is referring to the iterator number itself, which is 3.
2. Line 13 prints '150'. Since the last element in the array to be put into the loop is '300', this hence makes up the most recent incarnation of 'discountedPrice' after going through the processes within the loop to get to 150.
3. Line 14 also prints '150'. This is because of similar reasons above, that being the last element '300' in turn makes up the most recent incarnation of 'finalPrice' after going through the processes to also get to 150.
4. The function returns [50, 100, 150]. This array is returned since after all the processes to find the 'discountedPrice' and 'finalPrice' are done, the new number is pushed onto a new array called 'discounted'. This new array is then called at the very end, in which the new numbers represent the discount prices for each original element.
5. Line 12 puts out an error message that reads 'ReferenceError: i is not defined'. This is primarily because of the use of 'let' when declaring 'i', therefore keeping the declaration within the loop code block and only the loop code block.
6. Line 13 prints out the same kind of error message, reading that 'discountedPrice is not defined'. This is for the same as above, declaring it with 'let' within the for-loop.
7. Line 14 prints out '150'. Unlike the previous two, finalPrice was declared outside of the for-loop, thus allowing it to be accessed even outside of the loop.
8. The function still returns [50, 100, 150]. Even with the uses of 'let' keeping certain items restricted within the for-loop, a new array is the output - one that is declared before the for-loop as well.
9. Line 11 puts out a ReferenceError reading 'i is not defined'. Much like last time, 'i' being declared in the for-loop with 'let' keeps it restricted to the for-loop, thus keeping it out of reach for the rest of the program.
10. Line 12 puts out '3' as there are 3 elements in the input 'prices' array.
11. The function outputs the array [50, 100, 150]. The new array is already declared outside of the for-loop, hence allowing to be called throughout the program. As the for-loop pushes the elements from the original array into the new array after undergoing discountedPrice and finalPrice, these are the numbers that are returned.
12A. student.name
12B. student["Grad Year"]
12C. student.greeting()
12D. student['Favorite Teacher'].name
12E. student.courseLoad[0]

13A. 32
13B. 1
13C. 3
13D. '3null'
13E. 4
13F. 0
13G. '3undefined'
13H. NaN

14A. True
14B. False
14C. True
14D. False
14E. False
14F. True
15. Basically '==' refers to 'loose equality' whereas '===' refers to 'strict equality'. On top of that, the former makes type conversions before comparing whereas the latter doesn't.
16. See .js file
17. The result comes out as [2, 4, 6]. Basically, what happened was Line 13 called the modifyArray function with the doSomething function in its 'callback' parameter. The input array first goes through the modifyArray loop, incrementally being doubled via doSomething and then having that new number being pushed onto a new array.
18. See .js file
19. The output comes out as '1', '4', '3', with '2' being put out in the console a second later. '1' and '4' came out first since there was no timeout set for them.
