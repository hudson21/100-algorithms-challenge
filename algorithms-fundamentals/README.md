# Which code is best ? 
- [x] Readable 
- [x] Memory --> Space Complexity
- [x] Speed --> Time Complexity

# Doubts in the Course
- Need to see the video 8.18 about reversing a linkedlist with javascript (reverse method in linkedList.js)

# Module 2 (Getting the Interview)

`If you never asks, the answer is always no`
Instructor Name: Andrei Neagoie

### Tool to make resumes 
- resumemaker.online

### Rules to have a nice resume
1. One Page
2. Relevant Skills
3. Personalized
4. Online Link

### Resume Cheat Sheet
1. Use a pre-designed resume template
2. Make the resume fit on one page
3. Include words from job description 
4. Include company name you are applying to 
5. Does your first item on your resume reflect what they are looking for ?
6. Experience titles demonstrate value
7. Do you have an online link ? (Personal webpage or github repo)
8. Remove the word `I`
9. No `buzzwords` describing how great you are
10. Are you using Action words ?
11. Measure everything in terms of impact, don´t just describe yourself
12. Technical knowledge/skills should include what they are looking for. Only show years if it is impressive.
13. Include onle section/items that are impressive: Experience, Projects, Education, Technical Skills
14. No typos or bad grammar

### Tool to make comparison between your resume and the current job description you are applying for
- https://www.jobscan.co

### Sample resumes to take as reference
- https://www.cakeresume.com/Engineering-resume-samples
- https://thisresumedoesnotexist.com/

### Websites to get free templates for your Portfolio Website
- https://www.creative-tim.com/
- https://www.mashup-template.com/templates.html
- https://mdbootstrap.com/freebies/
- https://cruip.com/ 


### What do I do if I don't have enough experience to apply for jobs 
1. Github Repo
2. Website 
3. 1 - 2 Big Projects
4. Blog (Do you have experience?)

### Links to Open Source Contribution
1. https://github.com/zero-to-mastery/start-here-guidelines
2. https://github.com/zero-to-mastery/ZtM-Job-Board

### Sample of an introductory email to a colleage or someone else to get a referral
```
Jey $BOB
I saw your presentation at $CONFERENCE last year on Youtube.
Great stuff; Love what you did with $FOO, in particular
$COMMENT_PROVING_YOU_KNOW_WHAT_YOU'RE_TALKING_ABOUT.
I'm also a $FOO developer. I noticed that yout company is hiring 
or $ROLE. I'd love to be a part of your team. Do you have a
few minutes to chat on Thursday about what guys are doing?

Thanks, 
Yourname
Your website or any public profilelink
```

### Google Chrome Extention to find emails
- Find anyone's email - Contact Out
- Hunter
- Email Extractor

### Websites to look for jobs
1. Linkedin
2. Hackernews who is hiring
3. (Startups) AngelList
4. (Remote Jobs) https://weworkremotely.com 
5. https://www.hired.ca
6. [TripleByte is very recommended by Andrei](https://triplebyte.com/a/Y4uPkgU/d)
7. https://www.whitetruffle.com
8. https://www.meetup.com
9. https://designmodo.com/jobs/
10. https://www.remotelist.pw/
11. https://remoteok.io/
12. https://www.ziprecruiter.com/
13. (Example to look in Google for recruiter) --> site:linkedin.com facebook recruiter
14. [This one looks really great!!!](https://go.beseen.com/tech-jobs/?click_id=27049635a5b046fb84a521b6ef33d630&sid=aff_Zero+To+Mastery-linkedin&kw=group&utm_source=linkedin&utm_medium=group&utm_campaign=feedback&utm_creativetype=post&utm_geotarget=)

# Module 3 (Big O Notation)

- [Big O Cheat Sheet](https://www.bigocheatsheet.com)

### Tools to be used during the course
1. https://repl.it
2. https://glot.io

### What is a good code ?
1. Readable
2. Scalable --> Big O --> Code that can scale
   - Speed (How fast is our runtime in the code)
   - Memory ()

### Link to take a look about Big O
- https://www.quora.com/What-is-the-difference-between-big-oh-big-omega-and-big-theta-notations

### Types of Big O Notations (** Basic Ones)
** 1. O(1) Constant Time --> If the input increases, there is only one operation
no matter what. [No Loops]

** 2. O(n) Linear Time --> If the input increases, the number of operations 
increase too. [for loops, while loops through n items]

** 3. O(n^2) Quadratic Time --> Every element in a collection needs to be compared to ever other element. [Two nested Loops]

4. O(2^n) Exponential Time --> [Recursive algorithms] that solves a problem of size N

5. O(n!) Factorial Time --> You are adding a loop for every element

6. O(log N) Logarithmic Time --> Usually searching algorithms have `log n` if they are sorted (Binary Search)

7. O(n * log(n)) Log Linear Time --> Usually sorting operations

### Rule Book 
1. Worst Case: Always care what is the worst case scenario in yout algorithm sequence.
2. Remove Constants: Always get rid of the contstants incorporated in your final calculation. o(2n) ---> O(n)
3. Different terms for inputs: Analyze how the inputs are being used to determine the time complexity (Hints to take care in the algorithm)
```
Different inputs should have different varaibles. O(a + b) A and B arrays nested would be O(a * b)
    + for steps in order
    * for nested steps
```
4. Drop Non Dominants: It means to get rid of the time complexity which is not having a huge impact in the operations related with its inputs: O(n + n^2) --> O(n^2)

### Algorithm Hints
1. Iterating through half a collection is still O(n)
2. Two separate collections: O(a + b)
3. Nested Collections: O(a * b)

### What can cause time in a function?
1. Operations (+, -, *, /)
2. Comparisons (<, >, ==)
3. Looping (for, while)
4. Outside Funtion call (function())

### Hints to take care about in an algorithm
1. Identations which are at the same level: It is a [+]
2. Identations which are nested are: [*]

Data Structures + Algorithms = Programs

### Space Complexity
1. Heap: It is where variables are stored 
2. Stack: It is where we keep track of our function calls

### What causes Space complexity ?
1. Variables 
2. Data Structures
3. Function Call 
4. Allocations

# Module 4 (How to solve Coding Problems)
### What are Companies looking for ?
1. Analytic Skills: How can you think through problems and analyze things?
2. Coding Skills: Do you code well, by writing clean, simple, organized, readable code ?
3. Technical Skills: Do you know the fundamentals of the job you are applying for ?
4. Communication Skills: Does your  personality match the companies' culture ?

### What we need for coding interviews
1. Data Structures
   - Arrays 
   - Stacks 
   - Queues
   - Linked Lists
   - Tress
   - Tries 
   - Graphs
   - Hash Tables

2. Algorithms
   - Sorting 
   - Dynamic Programming 
   - BFS + DFS (Searching)
   - Recursion

### Step by Step through a problem:
1. When the inverviewer says the question, write down the key points at the top (i.e sorted array). Make 
sure you have all the details. Show how organized you are.

2. Make sure you double check: What are the inputs? What are the outputs ?

3. What is the most important value of the problem ? Do you have time, and space and memory. What is the main goal ?

4. Don't be annoying and ask too many questions.

5. Start with the naive/brute force approach. First thing that comes into mind. It shows that you are able to 
think well and critically (you don't need to write this code, just speak about it).

6. Tell me why this approach is not the best(i.e O(n^2) or higher, not readable, etc...)

7. Walk through your approach, comment things and see where you may be able to break things. Any repetition,
bottlenecks like O(n^2), or unnecessary work ? Did you use all the information the interviewer gave you ? 
Bottlenecj is the part of the code with the biggest Big O. Focus on that. Sometimes this occurs with repeated work as well.

8. Before you start coding, walk through yout code and write down the steps you are going to follow. 

9. Modularize your code from the very beginning. Break up code into beautiful small pieces and add just comments if you 
need to.

10. Start actually writing your code now. Keep in mind that the more you prepare and understand what you need to code, 
the better the whiteboard will go. So never start a whiteboard interview not being sure of how things are going to work out. 
That is a recipe for a disaster. Keep in mind: A lot of interviews ask questions that you won't be able to fully answer on time. So think: Whan can I show in order to show that I can do this and I am better that other coders. Break things up in Functions (if you can't remember a method, just make up a function and you will at least have it there). Write something, and 
start with the easy part.

11. This about error checks and how you can break this code. Neve make assumptions about the input. Assume people are trying to break your code and that Darth Vader is using your function. How will you safeguard it? Always check for false inputs that 
you don't want. Here is a trick: `Comment in the code, the checks that you want to do... write a function, then tell the interviewer that you would write tests now to make your function fail (but you don't need to actually write the tests)`

12. Don't use bad/confusing names like i and j. Write code that reads well.

13. Test your code: Check for `no params, 0, undefined, null, massive arrays, async code, ect...` Ask the interviewer if
we can make assumption about the code. Can you make the answer return an error? Poke holes into your solution. Are you 
repeating yourself ?

14. Finally talk to the interviewer where you would improve the code. Does it work ? Are there different approaches ?
Is it readable ? What would you google to improve ? How can performance be improved ? Possibly: Ask the interviewer what 
was the most interesting solution you have seen to this problem ? 

15. If your interviewer is happy with the solution, the interviewer usually ends here. It is also common that the interviewer
asks you extension questions, such as `how you would handle the problem if the whole input is too large to fit into memory,or 
if the input arrives as a stream`. `This is a common follow-up question at Google, where they care a lot about scale`.`The answer is usually a divide-and-conquer approach-perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk and combine them later`. 

### Example Google Coding Interview
- Watch the youttube video of [How to: Work at Google -- Example Coding/Engineering Interview](https://www.youtube.com/watch?v=XKu_SEDAykw)
- [Google Application Process Step By Step](https://www.youtube.com/watch?v=oWbUtlUhwa8)



### Good code checklist
- [x] It works
- [x] Good use of data structures
- [x] Code Re-use/ Do not Repeat Yourself
- [x] Modular - makes code more readable, maintainable and testable
- [x] Less than O(n^2). We want to avoid nested loops if we can since they are expensive. Two separate loops are better than 
2 nested loops
- [x] Low Space Complexity --> Recursion can cause stack overflowm copying of large arrays may exceed memory of machine 

# Module 5 (Data Structure Introduction)
- What is a Data Structure ?: A collection of values 
- Algorithms - Serie of processess to implements these data structures.

### How computers stores data ?
1. CPU
2. RAM(Random Access Memory)
3. Storage
- [Link to see a video about RAM](https://www.youtube.com/watch?v=fpnE6UAfbtU)
- [Computer Memory](http://statmath.wu.ac.at/courses/data-analysis/itdtHTML/node55.html)

### Heuristics to ace the question
1. Hash Tables  are usually the answer to improve `Time Complexity`
2. If it's a sorted array, use Binary tree to achieve `O(log N)`. Divide and Conquer - Divide a data set into smaller chunks and then repeating a process with a subset of data. Binary Search is a great example of this.
3. Try sorting your input
4. Hash Tables and precomputed information (i.e sorted) are some of the best ways to optimize your code.
5. Look at the Time vs Space tradeoff. Sometimes sorting extra state in memory can help the time. (Runtime)
6. If the interviewer is giving you advice/tips/hints. Follow them. 
7. Space time tradeoffs: Hashtables usually solve this a lot of times. You use more space, but you can get a time optimization to the process. In programming, you often times can use up a little bit more space to get faster time. 

### Operations in Data Strutures
1. Insertion 
2. Traversal
3. Deletion 
4. Searching 
5. Sorting
6. Access

# Module 6 (Arrays)

### Array
1. lookup() --> O(1)
2. push() --> O(1) [It can be O(n) if it is a *dynamic array*]
3. insert() --> O(n)
4. delete() --> O(n)

### Static vs Dynamic Arrays
- Static: An array with a declared size since the beginning
- Dynamic: An array with no size that grows depending its size

- Hint: In dynamic arrays if a new index is added, the array will be created in another location
of the memory with the new index included. Therefore the time complexity in this case is O(n)

### Optional Video about Classes
1. Reference Type: It is created by the programmer when we are creating a non-primitive type (in this case an object)
2. Context: In the browser, the window object is the same as `this`. Insise of a class refers to the class itself.
3. Instantiation: It is when you make a copy of an existing object and resuse the code.

### Pros and Cons at using Arrays as Data Structures
- [X] Fast Lookups
- [X] push/pop
- [X] Ordered (It mean in memory)
- [ ] Slow Inserts
- [ ] Slow Deletes
- [ ] Fixed Size(if using static array)

# Module 7 (Hash Tables)
- Idempotent: A function, given an input always output the same result. 

### Operations in Hash Tables
1. insert --> O(1)
2. lookup --> o(1) [Can be O(n) if there is hash collision]
3. delete --> O(1)
4. search --> O(1)

- [Hash Tables Review](https://en.wikipedia.org/wiki/Hash_table)
- [Hash Tables Animation](https://www.cs.usfca.edu/~galles/visualization/OpenHash.html)

### Hash Collisions can be handle with:
1. LinkedList (Separate Chaining)

### Hash Tables vs Arrays
```
      Arrays             Hash Tables
------------------------------------------
      search O(n)         search O(1)
      lookup O(1)         insert O(1)
      push O(1)           lookup O(1)
      insert O(n)         delete O(1)
      delete O(n)
------------------------------------------

```
### Pros and Cons of Hash Tables
- [X] Fast Lookups (*Good collision resolution needed)
- [X] Fast Inserts
- [X] Flexible Keys 
- [ ] Unordered
- [ ] Slow Key Iteration 

# Module 8 (Linked Lists)
- [Linked Lists Playground](https://visualgo.net/en/list)

### Main advantage of Linked Lists
- There is no need to shift indexes once an item is inserted at anywhere  of the LinkedList

### Difference between Array and Linked Lists 
- In an array the elements are index
- In a linkedList you start from the head and traverse the list until you get to an specific index.

### Big O Linked Lists
1. prepend O(1) --> Add to the beginning of a Linked List
2. append O(1)
3. lookup O(n)
4. insert O(n)
5. delete O(n)

### Single vs Double Linked Lists
- Single: 
  - [X] Requires less memory because the prev property is not implemented
  - [X] It cant be iterated in reverse (from back to front)
  - [X] When you want to make fast insertion and deletion
- Double:
  - [X] It can be iterated from the front to the back and viseverce

### Pros and Cons of Linked Lists
- [X] Fast Insertion
- [X] Fast Deletion
- [X] Ordered
- [X] Flexible Size
- [ ] Slow Lookup 
- [ ] More Memory

### Arrays vs Linked Lists
- [Arrays vs Linked Lists - Computerphile](https://www.youtube.com/watch?v=DyG9S9nAlUM)

# Module 9 (Stacks and Queues)
- Linear data structures (Go to data elements sequentionally)

### Stacks (LIFO --> Last In First Out) (Arrays are the chosen one)
1. Lookup --> O(n)
2. pop --> O(1)
3. push --> O(1)
4. peek --> O(1) View the top in the pile

### Queues (FIFO --> First Int First Out) (Linked Lists are the chosen one)
1. Lookup --> O(n)
2. enqueue(push) --> O(1)
3. dequeue(pop but takes the first element in line) --> O(1)
4. peek --> O(1)

### How does JavaScript work ? 
1. What is a Program
   - Allocate memory
   - parse and execute

2. JavaScript Engine
   - Memory Heap 
   - Call Stack

3. Memory Leak: The process of having variables declared but not using them. Therefore this declarations remain in 
the `Memory Heap` occupying unnecesary space 

4. JavaScript Run-Time Environment 

```
// Call Stack
console.log(1);

setTimeout(() => {
  console.log('2');
}, 2000)

console.log(3);

// Web API
setTimeout(), In 2 seconds you have to do something

// Callback Queue
callback() (Inside of the setTimeout)
// Event Loop
```

### Pros and Cons of Stacks and Queues
- [X] Fast Operations
- [X] Fast Peek 
- [X] Ordered 
- [ ] Slow Lookup

# Module 10 (Trees)

### Binary Tree (Rules)
- Each noce can only have either 0, 1 or 2 nodes.
- Each child can only have one parent.

### Binary Search Tree Operations
1. lookup --> O(log N)
2. insert --> O(log N)
3. delete --> O(log N)

### Binary Search Tree (Playground)
- [Website to play with Binary Search Trees](https://visualgo.net/bn/bst?slide=1)
- Hint() --> O(Long N): Take as reference looking for a number in a phone book. You start from a specific letter until you find 
the right number inside of that letter group.

### Pros and Cons of BST(Binary Search Tree)
- [X] Better than O(n)
- [X] Ordered
- [X] Flexible Size
- [ ] No O(1) operations

### AVL Trees && Red Black Trees
- AVL Trees 
  - [Animation](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
  - [How it works](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)
  - Require heights of left and right children of every node to differ by at most +1

- Red Black Trees 
  - [Animation](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
  - [How it works](https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5)

### Binary Heap Operations
- [Animation](https://visualgo.net/en/heap)

1. lookup --> O(n)
2. insert --> O(log N)
3. delte --> O(log N)

- Every node on the top level has a value greater than the next level down.

### Priority Queue
- It is a type of data structure where each element hast a priority. Elements with a higher priority are
served before elements with lower priorities.
- [Implementation of a Priority Queue](https://www.geeksforgeeks.org/implementation-priority-queue-javascript/)   

### Pros and Cons of Binary Heaps 
- [X] Better than O(n)
- [X] Priority
- [X] Flexible Size
- [X] Fast Insert
- [ ] Slow lookup 

### Trie or Prefix Tree --> O (legth of the word)

- It is a specialized tree used in searching, most often with text

# Module 11 (Graphs)
- [The Internet Map](https://internet-map.net/)
- [Animation](https://visualgo.net/en/graphds?slide=1)

### Types of Graphs
1. Directed Graphs
2. Undirected Graphs
3. Unweighted 
4. Weighted
5. Cyclic
6. Acyclic

### Pros and Cons of Graphs
- [X] Relationships
- [ ] Scaling is hard

# Module 12 (Recursion)
- Algorithms: They are steps in a process to perfom a desired action by computers.
- Recursion: It is a function that refers to itself inside of the same function.
- Recursion is good for tasks that have repeated subtasks to do.

### Recursion vs Iterative
- Hint: Anything you do with a recursion, CAN be done iteratively (loop)

### Pros and Cons of Recursion
- [X] DRY (Do Not Repeat Yourself)
- [X] Readability
- [ ] Large Stack

- Tail Call Optimization: ES6 --> It allows recursion to be called without increasing the call stack

### When to use Recursion
- Traversing Trees
- Searching through Trees or Graphs

### Recursion Rules
1. Every time you are using a tree or converting something into a tree, consider recursion.
   - Divided into a number of subproblems that are smaller instances of the same problem. 
   - Each instance of the subproblem is identical in nature. 
   - The solutions of each subproblem can be combined to solve the problem at hand.
2. Divide and Conque using Recursion.

### Real World Example to Apply Recursion
```
There are lots of mathy examples here, but you wanted a real world example, so with a bit of thinking, this is possibly the best I can offer:

You find a person who has contracted a given contageous infection, which is non fatal, and fixes itself quickly( Type A) , Except for one in 5 people ( We'll call these type B ) who become permanently infected with it and shows no symptoms and merely acts a spreader.

This creates quite annoying waves of havoc when ever type B infects a multitude of type A.

Your task is to track down all the type Bs and immunise them to stop the backbone of the disease. Unfortunately tho, you cant administer a nationwide cure to all, because the people who are typeAs are also deadly allergic to the cure that works for type B.

The way you would do this, would be social discovery, given an infected person(Type A), choose all their contacts in the last week, marking each contact on a heap. When you test a person is infected, add them to the "follow up" queue. When a person is a type B, add them to the "follow up" at the head ( because you want to stop this fast ).

After processing a given person, select the person from the front of the queue and apply immunization if needed. Get all their contacts previously unvisited, and then test to see if they're infected.

Repeat until the queue of infected people becomes 0, and then wait for another outbreak..

( Ok, this is a bit iterative, but its an iterative way of solving a recursive problem, in this case, breadth first traversal of a population base trying to discover likely paths to problems, and besides, iterative solutions are often faster and more effective, and I compulsively remove recursion everywhere so much its become instinctive. .... dammit! )
```

# Module 13 (Sorting) --> O(N log N)
1. Bubble Sort 
2. Insertion Sort 
3. Selection Sort 
4. Merge Sort 
5. Quick Sort

- [localCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
- [MDN Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Sorting Animations](https://www.toptal.com/developers/sorting-algorithms)
- [Dancing Algorithms to see](https://www.youtube.com/user/AlgoRythmics/videos)

```
  Bubble Sort --> O(n^2)

  Selection Sort --> O(n^2)

  Insertion Sort --> O(n^2) but it some cases O(n)
- If the indexes are almost sorted, You need to use insertion sort

  Merge Sort --> O(N log N) |
                            |---------> Divide and Conquer
  Quick Sort --> O(N log N) |

```

- [Stable vs Unstable Algorithms](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important)

### When to use a determined Sorting Algorithm

1. Insertion Sort --> It can be used if your input is small or items are mostly sorted.
2. Bubble Sort --> You are never gonna use this sorting algorithm. It is only used for educational purposes.
3. Selection Sort --> You are never gonna use this sorting algorithm. It is only used for educational purposes.
4. Merge Sort --> If you are worried about worst case scenarios, you should use this sorting algorithm.
5. Quick Sort --> 

```
Comparison Sort          Non-Comparison Sort
---------------          -------------------
  Bubble Sort              Counting Sort 
  Insertion Sort           Radix Sort
  Selection Sort 
  Merge Sort 
  Quick Sort
```

### Radix Sort Resources
- [Radix Sort](https://brilliant.org/wiki/radix-sort/)

- [Radix Sort Animation](https://www.cs.usfca.edu/~galles/visualization/RadixSort.html)

### Counting Sort Resources
- [Counting Sort](https://brilliant.org/wiki/counting-sort/)

- [Counting Sort Animation](https://www.cs.usfca.edu/~galles/visualization/CountingSort.html)

- EcmaScript Standard uses Insertion Sort(For small data) and Merge Sort(For large data) in the Google Chrome Browser

# Module 14 (Algorithms Searching + BFS + DFS)
1. Linear Search --> O(n)
2. Binary Search: If the data is sorted we can change from O(n) to O(log N) --> Divide and Conquer Approach 
3. Depth First Search --> O(n) 
4. Breadth First Search --> O(n) 

### Breadth First Search/Traversal
- It works by moving left to right: left ---> right
```
            1
          /  \
        2     3
       / \   / \
      4   5 6   7
```

### Depth First Search/Traversal
- It works by moving top to bottom: top --> bottom 
```
            1
          /  \
        2     5
       / \   / \
      3   4 6   7
```

### BFS vs DFS
- [Resources](https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr)
1. Breadth First Search: It will look for the closest nodes firstly.
   - [X] Shortest Path
   - [X] Closer Nodes
   - [ ] More Memory
   - The memory space is O(n) because we need to keep track of all the children nodes at every one it is visited.

2. Depth First Search:  Space Complexity --> O(h) h: height of the tree
   - [X] Less Memory
   - [X] Does Path Exist ?
   - [ ] Can get Slow

### Ways to implement DFS
  1. inorder: 33, 101, 105
  2. preorder: 101, 33, 105
  3. postorder: 33, 105, 101

```
     101
    /   \
  33    105
```

- Real Example with a BST:
```
        9
      /  \
     4    20
    / \   / \
   1   6 15 170
```
- inorder: [1, 4, 6, 9, 15, 20, 170]
- preorder: [9, 4, 1, 6, 20, 15, 170]
- postorder: [1, 6, 4, 15, 170, 20, 9]

### Graph Traversal
- [BFS - DFS in Graphs](https://visualgo.net/en/dfsbfs)

### Dijkstra + Bellman-Ford Algorithms (Shortest Path)
- Bellman-Ford Algorithm: 
  - Can handle weighted graphs with negative numbers
  - Can take a long time to run
  - It is not the most efficient algorithm
  - The worst case of this algorithm is a time complexity of O(n^2)
- Dijkstra Algorithm
  - It is a little bit faster than Bellman-Ford Algorithm
  - It is more efficienct but I can't handle negavite weighted graphs
  - [How Dijkstra Algorithm Works](https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e)


# Module 15 (Dynamic Programming)
- It is an optimization technique
- Do you have something you can cache ?

### Steps to verify if a problem can used Memoization
1. Can be divided into subproblem
2. Recursive Solution 
3. Are there repetitive subproblems ?
4. Memoize subproblems 
5. Demand a raise from your boss

- There is one other way to apply dynamic programming called `Bottom up approachs`

# Module 16 (Non Technical Interviews)

### During the Interview
- Treat everything as a learning experience
  1. Can you do the job ? 
  2. Can I work with you ? 
  3. Are you going to improve ? 

### 4 Heroes
1. Technical: Have a story about a technical issue you had to face in your previous job 
2. Success: It shows that you are a successful person. What things did you do to make a change happens in your 
previous jobs ?
3. Leadership: You are a person that can have intuition about other things to do to go beyond the normal things.
4. Challenge: A technical challenge that you faced in one of your previous jobs.

### Tell me about yourself ?
- Your triggers of success
- Mention things you want to get asked
- Skills should be relevant to job

### Why Us ?
- Show you want to grow
- Demonstrate why you are the best

### Why did you leave your job ?
- No negativity

### Tell me about a problem + how you solved it 
- Have this prepared
- Have metrics and numbers
- Scaling, performance, security
- SAR (Situation, Action, Result)

### Tell me about an interesting project
- Show how you are different
- Relate it to this job

### What is your biggest weakness ?
- Real answer
- Show how you improved it

### Do you have any questions for me ? 
- Focus on them, not company (You)
- Mention something they mentioned

- [Questions to ask to the company to show interest](https://github.com/viraptor/reverse-interview)

### Secret Weapon
- Simplicity over Complexity (Readable)
- Premature optimization is the root of all evil
- Overall goal, not myopic(Very focused about only one problem)
- No complaining about client/code/etc
- No ego

### After the interview
- Don't overuse `I`
- Talk about the interviewer
- Express how you are the ideal candidate
- Don't brag()

# Module 17 (Offer + Negotiation)

### Negotiation 101
- Don't end the conversation (Average Salary for Software Engineer)
```
I see in the silicon valley area the salaries for senior developers starts at X. I think this is 
a great starting point to discuss about it.
```
- Give reason for everything
- Always negotiate
- Be positive 
- Have stakes(means you have to have something on the line)(Alternatives)

### Handling an offer
- Don't end the conversation: Talk about possible offers with another companies
- Be positive
- Ask for time
- Let other companies now

### To Do 
- Find exact salary you want
- What value do you provide ?
- Go higher

### Websites to checkout salaries
- [Salary](https://www.salary.com/)
- [Glassdoor](https://www.glassdoor.com/member/home/index.htm)
- [PayScale](https://www.payscale.com/)
- [Stack Overflow](https://stackoverflow.com/jobs/salary?utm_source=Iterable&utm_medium=email&utm_campaign=salary-calculator-2018)

### Handling Multiple Offers
1. Is there an offer that you feel you are under qualified for ? 
2. Long term growth potential 
3. Wil you respect people around you ? 
4. Salary and benefits ?
5. is your decision based on desperation ?

### Getting a raise
1. Ask for a raise 
2. Show. Don't tell. (Summarize all the actions you have done during a determined time to show to your
employer how many great changes you have doned, saved money, good feedback. Keep track of your enhancements 
from the first day you entered).
3. [How to negotiate your salary](https://www.youtube.com/watch?v=XY5SeCl_8NE&feature=youtu.be) 

### Advent of Code
- Checkout Advent of Code contest in Google (It is made every december of the year)
- [ZTM Coding Challenges](https://zerotomastery.io/community/?utm_source=udemy&utm_medium=coursecontent)
