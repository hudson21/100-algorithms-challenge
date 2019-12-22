# Which code is best ? 
- [x] Readable 
- [x] Memory --> Space Complexity
- [x] Speed --> Time Complexity

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
2. Heckernews who is hiring
3. (Startups) AngelList
4. (Remote Jobs) https://weworkremotely.com 
5. https://www.hired.ca
6. https://www.triplebyte.com
7. https://www.whitetruffle.com
8. https://www.meetup.com
9. https://designmodo.com/jobs/
10. https://www.remotelist.pw/
11. https://remoteok.io/
12. https://www.ziprecruiter.com/
13. (Example to look in Google for recruiter) --> site:linkedin.com facebook recruiter

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

### What causes Space complexity ?
1. Variables 
2. Data Structures
3. Function Call 
4. Allocations


### Hints to take care in an algorithm
1. Identations which are at the same level: It is a [+]
2. Identations which are nested are: [*]

Data Structures + Algorithms = Programs

### Space Complexity
1. Heap: It is where variables are stored 
2. Stack: It is where we keep track of our function calls

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
- [] Slow Inserts
- [] Slow Deletes
- [] Fixed Size(if using static array)

# Module 7 (Hash Tables)



