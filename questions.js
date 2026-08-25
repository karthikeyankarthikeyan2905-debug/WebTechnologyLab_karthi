const questionBank = [
{
category: "HTML",
question: "Which HTML element is used to define navigation links?",
options: ["<header>", "<nav>", "<section>", "<aside>"],
answer: 1
},
{
category: "HTML",
question: "Which attribute specifies alternative text for an image?",
options: ["src", "alt", "title", "href"],
answer: 1
},
{
category: "HTML",
question: "Which HTML5 element is used to embed audio content?",
options: ["<media>", "<music>", "<audio>", "<sound>"],
answer: 2
},
{
category: "HTML",
question: "Which tag is used to create a numbered list?",
options: ["<ul>", "<ol>", "<dl>", "<li>"],
answer: 1
},
{
category: "HTML",
question: "Which input type hides entered characters?",
options: ["text", "password", "email", "hidden"],
answer: 1
},
{
category: "HTML",
question: "Which HTML tag is used to create a hyperlink?",
options: ["<link>", "<a>", "<href>", "<url>"],
answer: 1
},
{
category: "HTML",
question: "Which tag is used to insert an image?",
options: ["<image>", "<img>", "<picture>", "<src>"],
answer: 1
},
{
category: "HTML",
question: "Which attribute is used to specify the image source?",
options: ["href", "link", "src", "alt"],
answer: 2
},
{
category: "HTML",
question: "Which tag represents the largest heading?",
options: ["<h6>", "<heading>", "<head>", "<h1>"],
answer: 3
},
{
category: "HTML",
question: "Which tag is used to create a paragraph?",
options: ["<para>", "<p>", "<text>", "<pg>"],
answer: 1
},
{
category: "HTML",
question: "Which HTML element creates a line break?",
options: ["<break>", "<br>", "<lb>", "<hr>"],
answer: 1
},
{
category: "HTML",
question: "Which tag is used to create a table row?",
options: ["<td>", "<tr>", "<table>", "<th>"],
answer: 1
},
{
category: "HTML",
question: "Which tag is used to create a table cell?",
options: ["<tr>", "<table>", "<td>", "<th>"],
answer: 2
},
{
category: "HTML",
question: "Which tag is used for a table heading cell?",
options: ["<head>", "<td>", "<tr>", "<th>"],
answer: 3
},
{
category: "HTML",
question: "Which HTML element is used to create a form?",
options: ["<form>", "<input>", "<fieldset>", "<label>"],
answer: 0
},
{
category: "HTML",
question: "Which tag is used to create a dropdown list?",
options: ["<input>", "<select>", "<optionlist>", "<dropdown>"],
answer: 1
},
{
category: "HTML",
question: "Which tag is used to define an option in a dropdown?",
options: ["<choice>", "<select>", "<option>", "<input>"],
answer: 2
},
{
category: "HTML",
question: "Which tag is used to create a checkbox?",
options: ["<input type='check'>", "<input type='checkbox'>", "<checkbox>", "<check>"],
answer: 1
},
{
category: "HTML",
question: "Which HTML tag is used to play video?",
options: ["<media>", "<movie>", "<video>", "<film>"],
answer: 2
},
{
category: "HTML",
question: "Which semantic element usually contains the main content?",
options: ["<main>", "<content>", "<bodymain>", "<sectionmain>"],
answer: 0
},
{
category: "HTML",
question: "Which element is used to define the footer of a document?",
options: ["<bottom>", "<footer>", "<foot>", "<end>"],
answer: 1
},
{
category: "HTML",
question: "Which tag is used to group related content?",
options: ["<group>", "<div>", "<cluster>", "<content>"],
answer: 1
},
{
category: "HTML",
question: "Which attribute makes an input field mandatory?",
options: ["mandatory", "needed", "required", "must"],
answer: 2
},
{
category: "HTML",
question: "Which tag is used to define a list item?",
options: ["<li>", "<list>", "<item>", "<ul>"],
answer: 0
},
{
category: "HTML",
question: "Which HTML tag is used to create a horizontal line?",
options: ["<line>", "<br>", "<hr>", "<hl>"],
answer: 2
},


{
    category: "CSS",
    question: "Which property is used to create a Flexbox container?",
    options: ["display:flex", "display:grid", "position:flex", "float:flex"],
    answer: 0
},
{
    category: "CSS",
    question: "Which CSS property controls the space outside an element?",
    options: ["padding", "margin", "border", "spacing"],
    answer: 1
},
{
    category: "CSS",
    question: "Which property changes the text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    answer: 2
},
{
    category: "CSS",
    question: "Which value of position places an element relative to the browser window?",
    options: ["relative", "absolute", "fixed", "static"],
    answer: 2
},
{
    category: "CSS",
    question: "Which property creates rounded corners?",
    options: ["corner-radius", "radius", "border-radius", "round"],
    answer: 2
},
{
    category: "CSS",
    question: "Which property controls the background color?",
    options: ["color", "background-color", "bgcolor", "back-color"],
    answer: 1
},
{
    category: "CSS",
    question: "Which property changes the size of text?",
    options: ["text-size", "font-size", "size", "font-style"],
    answer: 1
},
{
    category: "CSS",
    question: "Which property is used to make text bold?",
    options: ["font-weight", "text-weight", "font-bold", "bold"],
    answer: 0
},
{
    category: "CSS",
    question: "Which property controls the space inside an element?",
    options: ["margin", "padding", "border", "gap"],
    answer: 1
},
{
    category: "CSS",
    question: "Which selector selects an element by ID?",
    options: [".", "#", "*", ":"],
    answer: 1
},
{
    category: "CSS",
    question: "Which selector selects elements by class?",
    options: ["#", ".", "*", "@"],
    answer: 1
},
{
    category: "CSS",
    question: "Which property is used to center text?",
    options: ["align-text", "text-align", "font-align", "center"],
    answer: 1
},
{
    category: "CSS",
    question: "Which value makes a Flexbox arrange items in a row?",
    options: ["flex-direction: row", "display: row", "position: row", "flex: row"],
    answer: 0
},
{
    category: "CSS",
    question: "Which property is used to add a shadow to a box?",
    options: ["box-shadow", "shadow", "element-shadow", "border-shadow"],
    answer: 0
},
{
    category: "CSS",
    question: "Which property controls element transparency?",
    options: ["visibility", "opacity", "transparent", "display"],
    answer: 1
},
{
    category: "CSS",
    question: "Which property is used for smooth property changes?",
    options: ["animation", "transition", "transform", "effect"],
    answer: 1
},
{
    category: "CSS",
    question: "Which property rotates an element?",
    options: ["rotate", "transform", "transition", "animation"],
    answer: 1
},
{
    category: "CSS",
    question: "Which CSS layout uses rows and columns?",
    options: ["Flexbox", "Grid", "Float", "Inline"],
    answer: 1
},
{
    category: "CSS",
    question: "Which unit is relative to the viewport width?",
    options: ["px", "em", "vw", "cm"],
    answer: 2
},
{
    category: "CSS",
    question: "Which unit is relative to the root font size?",
    options: ["px", "rem", "cm", "vw"],
    answer: 1
},
{
    category: "CSS",
    question: "Which property controls the stacking order of elements?",
    options: ["layer", "z-index", "stack", "position-index"],
    answer: 1
},
{
    category: "CSS",
    question: "Which property hides an element without removing its space?",
    options: ["display:none", "visibility:hidden", "opacity:0", "remove:true"],
    answer: 1
},
{
    category: "CSS",
    question: "Which pseudo-class applies styles when the mouse is over an element?",
    options: [":active", ":focus", ":hover", ":visited"],
    answer: 2
},
{
    category: "CSS",
    question: "Which property controls overflow content?",
    options: ["overflow", "content-overflow", "flow", "outside"],
    answer: 0
},
{
    category: "CSS",
    question: "Which value removes an element from normal document flow?",
    options: ["position: static", "position: absolute", "position: relative", "position: sticky"],
    answer: 1
},

{
    category: "JavaScript",
    question: "Which keyword is used to declare a block-scoped variable?",
    options: ["var", "const", "let", "both let and const"],
    answer: 3
},
{
    category: "JavaScript",
    question: "Which function displays a message box?",
    options: ["print()", "alert()", "display()", "message()"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which method writes content to the browser console?",
    options: ["console.write()", "console.print()", "console.log()", "log.console()"],
    answer: 2
},
{
    category: "JavaScript",
    question: "Which operator checks both value and data type?",
    options: ["=", "==", "===", "!="],
    answer: 2
},
{
    category: "JavaScript",
    question: "Which event occurs when a button is clicked?",
    options: ["onchange", "onmouseover", "onclick", "onload"],
    answer: 2
},
{
    category: "JavaScript",
    question: "Which keyword declares a variable that cannot be reassigned?",
    options: ["let", "var", "const", "static"],
    answer: 2
},
{
    category: "JavaScript",
    question: "Which symbol is used for single-line comments?",
    options: ["<!-- -->", "//", "/* */", "#"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which function converts a string to an integer?",
    options: ["parseInt()", "NumberText()", "toInteger()", "convertInt()"],
    answer: 0
},
{
    category: "JavaScript",
    question: "Which method adds an element to the end of an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    answer: 2
},
{
    category: "JavaScript",
    question: "Which method removes the last element of an array?",
    options: ["pop()", "push()", "shift()", "slice()"],
    answer: 0
},
{
    category: "JavaScript",
    question: "Which method removes the first element of an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which method adds an element at the beginning of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 3
},
{
    category: "JavaScript",
    question: "Which statement is used for decision making?",
    options: ["loop", "if", "function", "array"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which loop executes at least once?",
    options: ["for", "while", "do...while", "forEach"],
    answer: 2
},
{
    category: "JavaScript",
    question: "Which keyword is used to define a function?",
    options: ["method", "function", "func", "define"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which operator gives the remainder?",
    options: ["/", "%", "*", "//"],
    answer: 1
},
{
    category: "JavaScript",
    question: "What is the result type of typeof 'hello'?",
    options: ["text", "string", "character", "object"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which method converts JSON text into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which method converts a JavaScript object into JSON text?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.text()", "JSON.convert()"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which keyword exits a loop?",
    options: ["exit", "stop", "break", "return"],
    answer: 2
},
{
    category: "JavaScript",
    question: "Which keyword skips the current loop iteration?",
    options: ["skip", "continue", "break", "next"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which operator is used for logical AND?",
    options: ["&&", "||", "!", "&"],
    answer: 0
},
{
    category: "JavaScript",
    question: "Which operator is used for logical OR?",
    options: ["&&", "|", "||", "!"],
    answer: 2
},
{
    category: "JavaScript",
    question: "Which method selects an element using a CSS selector?",
    options: ["getElement()", "querySelector()", "findElement()", "select()"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which method is used to add an event listener?",
    options: ["addEventListener()", "addEvent()", "listen()", "onEvent()"],
    answer: 0
},

{
    category: "Basics",
    question: "What does HTTP stand for?",
    options: ["Hyper Text Transfer Protocol", "High Transfer Text Process", "Hyper Transfer Text Program", "Home Text Transfer Protocol"],
    answer: 0
},
{
    category: "Basics",
    question: "Which protocol provides secure communication over the web?",
    options: ["FTP", "SMTP", "HTTPS", "POP3"],
    answer: 2
},
{
    category: "Basics",
    question: "Which software interprets HTML and displays web pages?",
    options: ["Compiler", "Browser", "Editor", "Server"],
    answer: 1
},
{
    category: "Basics",
    question: "Which device connects a local network to the Internet?",
    options: ["Switch", "Hub", "Router", "Repeater"],
    answer: 2
},
{
    category: "Basics",
    question: "Which language is primarily responsible for the structure of a web page?",
    options: ["CSS", "JavaScript", "HTML", "PHP"],
    answer: 2
},
{
    category: "Basics",
    question: "Which language is primarily responsible for styling a web page?",
    options: ["HTML", "CSS", "Java", "SQL"],
    answer: 1
},
{
    category: "Basics",
    question: "Which language is commonly used to make web pages interactive?",
    options: ["HTML", "CSS", "JavaScript", "XML"],
    answer: 2
},
{
    category: "Basics",
    question: "What does URL stand for?",
    options: ["Universal Resource Link", "Uniform Resource Locator", "Unified Reference Link", "Universal Reference Location"],
    answer: 1
},
{
    category: "Basics",
    question: "What does WWW stand for?",
    options: ["World Wide Web", "Web World Wide", "Wide Web World", "World Web Window"],
    answer: 0
},
{
    category: "Basics",
    question: "Which protocol is mainly used for transferring files?",
    options: ["HTTP", "FTP", "SMTP", "HTTPS"],
    answer: 1
},
{
    category: "Basics",
    question: "Which protocol is mainly used to send emails?",
    options: ["FTP", "SMTP", "HTTP", "POP3"],
    answer: 1
},
{
    category: "Basics",
    question: "Which protocol is used to retrieve emails?",
    options: ["SMTP", "FTP", "POP3", "HTTP"],
    answer: 2
},
{
    category: "Basics",
    question: "Which component stores website files and serves them to users?",
    options: ["Browser", "Web Server", "Keyboard", "Compiler"],
    answer: 1
},
{
    category: "Basics",
    question: "What is the main purpose of a domain name?",
    options: ["To identify a website", "To style a website", "To create JavaScript", "To store CSS"],
    answer: 0
},
{
    category: "Basics",
    question: "Which of these is a web browser?",
    options: ["Chrome", "MySQL", "Linux", "Python"],
    answer: 0
},
{
    category: "Basics",
    question: "Which of these is a search engine?",
    options: ["Google", "HTML", "CSS", "HTTP"],
    answer: 0
},
{
    category: "Basics",
    question: "What does IP stand for in networking?",
    options: ["Internet Protocol", "Internal Program", "Internet Program", "Input Process"],
    answer: 0
},
{
    category: "Basics",
    question: "Which is the default port for HTTP?",
    options: ["21", "25", "80", "443"],
    answer: 2
},
{
    category: "Basics",
    question: "Which is the default port for HTTPS?",
    options: ["80", "21", "25", "443"],
    answer: 3
},
{
    category: "Basics",
    question: "What is a homepage?",
    options: ["The main page of a website", "A CSS file", "A database", "A JavaScript function"],
    answer: 0
},
{
    category: "Basics",
    question: "Which technology allows web pages to communicate with a server asynchronously?",
    options: ["AJAX", "HTML", "CSS", "FTP"],
    answer: 0
},
{
    category: "Basics",
    question: "Which status code usually means Page Not Found?",
    options: ["200", "301", "404", "500"],
    answer: 2
},
{
    category: "Basics",
    question: "Which status code usually means OK or successful request?",
    options: ["200", "404", "500", "403"],
    answer: 0
},
{
    category: "Basics",
    question: "Which HTTP method is commonly used to retrieve data?",
    options: ["POST", "GET", "DELETE", "PUT"],
    answer: 1
},
{
    category: "Basics",
    question: "Which HTTP method is commonly used to send data to a server?",
    options: ["GET", "POST", "HEAD", "OPTIONS"],
    answer: 1
}


];