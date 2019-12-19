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