// ===== BASIC SETUP =====
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.minHeight = "100vh";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.background = "linear-gradient(135deg,#0f2027,#203a43,#2c5364)";
document.body.style.color = "white";

// ===== STYLE =====
const style = document.createElement("style");
style.innerHTML = `
.nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:15px 25px;
  background:rgba(0,0,0,.6);
  backdrop-filter:blur(10px);
}
.menu{
  display:none;
  flex-direction:column;
  background:#000;
}
.menu a{
  padding:14px;
  text-decoration:none;
  color:white;
  cursor:pointer;
}
.menu a:hover{background:#1abc9c;}
.final-project-link {
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  color: black !important;
  font-weight: bold;
  border-radius: 25px;
  padding: 8px 15px !important;
  margin-left: 10px;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;
}
.final-project-link:hover {
  background: linear-gradient(45deg, #feb47b, #ff7e5f);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
.final-project-link:before {
  content: "🚀 ";
}
.content{
  flex:1;
  padding:30px;
}
.card{
  background:rgba(255,255,255,.12);
  padding:25px;
  border-radius:16px;
  max-width:650px;
  animation:fade .6s;
  margin-bottom:20px;
}
@keyframes fade{
  from{opacity:0;transform:translateY(25px)}
  to{opacity:1;transform:translateY(0)}
}
.avatar{
  width:140px;
  height:140px;
  border-radius:50%;
  background:#1abc9c;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:15px;
  font-weight:bold;
}
input,textarea,button{
  width:100%;
  padding:12px;
  margin-top:10px;
  border:none;
  border-radius:8px;
}
button{
  background:#1abc9c;
  color:black;
  font-weight:bold;
  cursor:pointer;
}
button:hover{opacity:.8;}
.footer{
  background:rgba(0,0,0,.7);
  text-align:center;
  padding:15px;
  font-size:14px;
}
.service-item{
  background:rgba(255,255,255,.05);
  padding:15px;
  margin:10px 0;
  border-radius:8px;
  cursor:pointer;
  border-left:4px solid #1abc9c;
  transition:all 0.3s;
}
.service-item:hover{
  background:rgba(255,255,255,.1);
  transform:translateX(10px);
}
.service-list{
  list-style:none;
  padding:0;
}
.student-item{
  padding:12px;
  margin:8px 0;
  background:rgba(26,188,156,0.1);
  border-radius:6px;
}
.form-group{
  margin:15px 0;
}
.form-group label{
  display:block;
  margin-bottom:5px;
  color:#1abc9c;
}
.status{
  padding:10px;
  margin-top:10px;
  border-radius:6px;
  text-align:center;
  font-weight:bold;
}
.success{
  background:rgba(46,204,113,0.2);
  color:#2ecc71;
}
.error{
  background:rgba(231,76,60,0.2);
  color:#e74c3c;
}
.example-btn {
  margin: 5px;
  padding: 8px 12px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}
.example-btn:hover {
  background: #2980b9;
}
.example-section {
  margin-top: 15px;
  padding: 15px;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
}
.example-title {
  color: #1abc9c;
  margin-bottom: 10px;
}
.example-output {
  margin-top: 10px;
  padding: 10px;
  background: rgba(0,0,0,0.3);
  border-radius: 4px;
  white-space: pre-wrap;
  font-family: monospace;
  max-height: 200px;
  overflow-y: auto;
}
.project-card {
  background: linear-gradient(135deg, rgba(255,126,95,0.1), rgba(254,180,123,0.1));
  border: 2px solid rgba(255,126,95,0.3);
  border-radius: 16px;
  padding: 25px;
  margin: 20px 0;
  animation: fade 0.8s;
}
.project-card h3 {
  color: #ff7e5f;
  margin-bottom: 15px;
}
.project-demo-btn {
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  color: black;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  margin: 10px 5px;
  display: inline-flex;
  align-items: center;
}
.project-demo-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
.project-demo-btn:before {
  content: "🔗 ";
}
@media(min-width:768px){
  .menu{
    display:flex !important;
    flex-direction:row;
    background:transparent;
    align-items:center;
  }
  .menu a{padding:0 15px;}
  #ham{display:none;}
}
`;
document.head.appendChild(style);

// ===== NAV =====
const nav = document.createElement("div");
nav.className = "nav";
nav.innerHTML = `<b>Sumayo Bashiir - JavaScript Services</b><span id="ham" style="font-size:24px;cursor:pointer">☰</span>`;
document.body.appendChild(nav);

// ===== MENU =====
const menu = document.createElement("div");
menu.className = "menu";

// Create regular menu items
["Home","About","Services","Contact"].forEach(p=>{
  const a = document.createElement("a");
  a.textContent = p;
  a.onclick = ()=>loadPage(p);
  menu.appendChild(a);
});

// Add Final Project link
const finalProjectLink = document.createElement("a");
finalProjectLink.textContent = "Final Project";
finalProjectLink.className = "final-project-link";
finalProjectLink.href = "https://airmeat.africa/";
finalProjectLink.target = "_blank";
finalProjectLink.rel = "noopener noreferrer";
menu.appendChild(finalProjectLink);

document.body.appendChild(menu);

// Hamburger toggle
document.getElementById("ham").onclick = ()=> {
  menu.style.display = menu.style.display==="flex"?"none":"flex";
};

// ===== CONTENT =====
const content = document.createElement("div");
content.className = "content";
document.body.appendChild(content);

// ===== FOOTER =====
const footer = document.createElement("div");
footer.className = "footer";
footer.textContent = "©️ 2024 Sumayo Bashiir | JavaScript Services & Web Development";
document.body.appendChild(footer);

// ===== USER DATA =====
const user = {
  name:"Sumayo Bashiir",
  id:"cs1501002",
  faculty:"Computer Science",
  university:"jazeera  University"
};

// ===== CHAPTERS DATA - 3 CHAPTERS WITH EXAMPLES =====
const chaptersData = [
  {
    id: 1,
    title: "Chapter 7: Functions",
    description: "Waxaan ku qabanayaa shaqooyinka functions-ka ee Chapter 7. Waxaan ku sameyn karaa:",
    tasks: [
      "Function Declaration & Expression",
      "Arrow Functions",
      "Parameters & Default Values",
      "Return Values",
      "Function Scope"
    ],
    examples: [
      {
        id: "func1",
        name: "Basic Function Example",
        code: function() {
          return `// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow Function
const square = x => x * x;

// Results:
greet("Sumayo") = "${greet("Sumayo")}"
multiply(5, 3) = ${multiply(5, 3)}
square(4) = ${square(4)}`;
          
          function greet(name) {
            return "Hello, " + name + "!";
          }
        }
      },
      {
        id: "func2",
        name: "Parameters & Default Values",
        code: function() {
          return `// Function with default parameter
function calculatePrice(price, tax = 0.15) {
  return price + (price * tax);
}

// Rest parameters
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Results:
calculatePrice(100) = $${calculatePrice(100).toFixed(2)}
calculatePrice(100, 0.2) = $${calculatePrice(100, 0.2).toFixed(2)}
sumAll(1, 2, 3, 4, 5) = ${sumAll(1, 2, 3, 4, 5)}`;
          
          function calculatePrice(price, tax = 0.15) {
            return price + (price * tax);
          }
          
          function sumAll(...numbers) {
            return numbers.reduce((total, num) => total + num, 0);
          }
        }
      }
    ],
    price: "$150"
  },
  {
    id: 2,
    title: "Chapter 8: DOM Manipulation",
    description: "Waxaan ku qabanayaa shaqooyinka DOM manipulation ee Chapter 8. Waxaan ku sameyn karaa:",
    tasks: [
      "getElementById & getElementsByClassName",
      "querySelector & querySelectorAll",
      "innerHTML vs textContent",
      "createElement & appendChild",
      "Style Manipulation"
    ],
    examples: [
      {
        id: "dom1",
        name: "Element Selection & Creation",
        code: function() {
          // Create example elements to manipulate
          const demoDiv = document.createElement('div');
          demoDiv.id = 'demoDiv';
          demoDiv.innerHTML = '<p id="demoP">Original Text</p><div class="demoClass">Item 1</div><div class="demoClass">Item 2</div>';
          document.body.appendChild(demoDiv);
          
          // Run DOM operations
          const byId = document.getElementById('demoP');
          const byClass = document.getElementsByClassName('demoClass');
          const querySel = document.querySelector('#demoP');
          const queryAll = document.querySelectorAll('.demoClass');
          
          // Modify elements
          byId.textContent = 'Modified Text';
          byId.style.color = '#1abc9c';
          
          const newEl = document.createElement('div');
          newEl.textContent = 'New Element Added';
          newEl.className = 'demoClass';
          demoDiv.appendChild(newEl);
          
          // Clean up
          setTimeout(() => demoDiv.remove(), 1000);
          
          return `// Select element by ID
const elem = document.getElementById('demoP');
elem.textContent = 'Modified Text';
elem.style.color = '#1abc9c';

// Select by class name (returns HTMLCollection)
const classes = document.getElementsByClassName('demoClass');

// Query selector (returns first match)
const firstMatch = document.querySelector('.demoClass');

// Query selector all (returns NodeList)
const allMatches = document.querySelectorAll('.demoClass');

// Create new element
const newElement = document.createElement('div');
newElement.textContent = 'New Element Added';
document.body.appendChild(newElement);

Results:
• Found ${byClass.length} elements with class 'demoClass'
• Query selector found: "${querySel.textContent}"
• Created new element successfully`;
        }
      },
      {
        id: "dom2",
        name: "DOM Traversal & Manipulation",
        code: function() {
          return `// DOM Traversal Example
const div = document.createElement('div');
div.innerHTML = '<p>Parent <span>Child <b>Grandchild</b></span></p>';

// Access parent element
const span = div.querySelector('span');
const parent = span.parentElement;

// Access children
const children = Array.from(div.children);

// Access sibling
const b = div.querySelector('b');
const previousSib = b.previousSibling;

// Clone element
const clonedDiv = div.cloneNode(true);

Results:
• Parent element tag: ${'<div>'}
• Number of children: ${children ? children.length : 'N/A'}
• Cloning successful: ${clonedDiv ? 'Yes' : 'No'}`;
        }
      }
    ],
    price: "$180"
  },
  {
    id: 3,
    title: "Chapter 9: Events & Forms",
    description: "Waxaan ku qabanayaa shaqooyinka events & forms ee Chapter 9. Waxaan ku sameyn karaa:",
    tasks: [
      "Event Listeners (click, keypress, etc.)",
      "Form Validation",
      "Event Propagation",
      "Prevent Default Behavior",
      "Form Data Handling"
    ],
    examples: [
      {
        id: "event1",
        name: "Event Listeners Example",
        code: function() {
          return `// Different ways to add event listeners

// 1. Inline event handler
function inlineClick() {
  return "Inline click handled!";
}

// 2. Using addEventListener
const button = document.createElement('button');
button.textContent = 'Test Button';
button.addEventListener('click', function() {
  return "Button clicked via addEventListener!";
});

// 3. Event object properties
document.addEventListener('keydown', function(e) {
  return \`Key pressed: \${e.key}, Code: \${e.code}\`;
});

// 4. Mouse events
const box = document.createElement('div');
box.style.width = '100px';
box.style.height = '100px';
box.style.background = '#1abc9c';
box.addEventListener('mouseover', function() {
  return "Mouse entered the box!";
});
box.addEventListener('mouseout', function() {
  return "Mouse left the box!";
});

Results:
• Event listeners ready for testing
• Try clicking, hovering, or pressing keys`;
        }
      },
      {
        id: "event2",
        name: "Form Validation Example",
        code: function() {
          return `// Form validation function
function validateForm(formData) {
  const errors = [];
  
  if (!formData.name || formData.name.length < 2) {
    errors.push("Name must be at least 2 characters");
  }
  
  if (!formData.email || !formData.email.includes('@')) {
    errors.push("Valid email required");
  }
  
  if (!formData.password || formData.password.length < 6) {
    errors.push("Password must be at least 6 characters");
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

// Test cases:
const test1 = validateForm({
  name: "S",
  email: "invalid",
  password: "123"
});

const test2 = validateForm({
  name: "Sumayo",
  email: "sumayo@example.com",
  password: "secure123"
});

Results:
Test 1 (invalid):
• isValid: ${test1.isValid}
• Errors: ${JSON.stringify(test1.errors)}

Test 2 (valid):
• isValid: ${test2.isValid}
• Errors: ${JSON.stringify(test2.errors)}`;
        }
      }
    ],
    price: "$200"
  }
];

// ===== LOAD PAGE FUNCTION =====
function loadPage(page) {
  content.innerHTML = "";
  
  const title = document.createElement("h2");
  title.textContent = page;
  title.style.color = "#1abc9c";
  title.style.marginBottom = "20px";
  content.appendChild(title);
  
  if(page === "Home") {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>Welcome to My JavaScript Services</h3>
      <p><b>﴿ وَقُل رَّبِّ زِدْنِي عِلْمًا ﴾</b></p>
      <p>My Lord, increase me in knowledge.</p>
      <p>Waxaan ku qabanayaa dhamaan shaqooyinka JavaScript ee aad ku baratay Chapters 7, 8, iyo 9!</p>
      <div style="margin-top:20px">
        <button onclick="loadPage('Services')">View My JavaScript Services</button>
      </div>
      
      <div class="project-card">
        <h3>My Final Project</h3>
        <p><b>AirMeat Africa</b> - A complete e-commerce website for meat products across Africa</p>
        <p>This project demonstrates my full-stack web development skills including:</p>
        <ul class="service-list">
          <li class="student-item">Frontend Development with React</li>
          <li class="student-item">Backend API Integration</li>
          <li class="student-item">Database Management</li>
          <li class="student-item">Payment Gateway Integration</li>
          <li class="student-item">Responsive Design</li>
        </ul>
        <div style="margin-top:20px">
          <a href="https://airmeat.africa/" target="_blank" class="project-demo-btn">
            Visit AirMeat Africa
          </a>
          <button onclick="showProjectDetails()" class="project-demo-btn" style="background:linear-gradient(45deg,#3498db,#2ecc71)">
            Project Details
          </button>
        </div>
      </div>
    `;
    content.appendChild(card);
  }
  
  else if(page === "About") {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="avatar">${user.name.charAt(0)}</div>
      <p><b>Name:</b> ${user.name}</p>
      <p><b>ID:</b> ${user.id}</p>
      <p><b>Faculty:</b> ${user.faculty}</p>
      <p><b>University:</b> ${user.university}</p>
      <p>Waxaan ahay arday ka qabanayo shaqooyinka JavaScript. Waxaan ku takhasusay 3da Chapter ee soo socda:</p>
      <ul class="service-list">
        <li class="student-item">Chapter 7: Functions</li>
        <li class="student-item">Chapter 8: DOM Manipulation</li>
        <li class="student-item">Chapter 9: Events & Forms</li>
      </ul>
      
      <div style="margin-top:30px; padding:20px; background:rgba(255,126,95,0.1); border-radius:10px;">
        <h4 style="color:#ff7e5f">My Final Project Achievement</h4>
        <p>I have successfully completed a full-stack web application:</p>
        <p><b>AirMeat Africa</b> - An e-commerce platform connecting meat suppliers with customers across Africa.</p>
        <a href="https://airmeat.africa/" target="_blank" class="project-demo-btn" style="margin-top:15px">
          View Live Project
        </a>
      </div>
    `;
    content.appendChild(card);
  }
  
  else if(page === "Services") {
    chaptersData.forEach(chapter => {
      const chapterCard = document.createElement("div");
      chapterCard.className = "card";
      chapterCard.innerHTML = `
        <h3 style="color:#1abc9c">${chapter.title}</h3>
        <p>${chapter.description}</p>
        <ul class="service-list">
          ${chapter.tasks.map(task => `<li class="service-item">${task}</li>`).join('')}
        </ul>
        <div style="margin-top:20px">
          <h4 class="example-title">Live Examples:</h4>
          ${chapter.examples.map(example => `
            <div class="example-section">
              <button class="example-btn" onclick="runExample(${chapter.id}, '${example.id}')">
                Run: ${example.name}
              </button>
              <div id="output-${chapter.id}-${example.id}" class="example-output"></div>
            </div>
          `).join('')}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px">
          <strong style="color:#1abc9c; font-size:1.2rem">${chapter.price}</strong>
          <button onclick="selectService(${chapter.id})">Hire for this Chapter</button>
        </div>
      `;
      content.appendChild(chapterCard);
    });
    
    const demoCard = document.createElement("div");
    demoCard.className = "card";
    demoCard.innerHTML = `
      <h3 style="color:#1abc9c">Practice Interactive Demo</h3>
      <p>Tusaale: Ku shaqeyso DOM & Events live:</p>
      <div id="liveDemo">
        <button id="demoBtn" onclick="showDemoMessage()" style="margin:10px 0">Click Me!</button>
        <input id="demoInput" placeholder="Type here..." style="margin:10px 0">
        <div id="demoOutput" style="margin-top:10px; padding:10px; background:rgba(0,0,0,0.3); border-radius:4px"></div>
      </div>
      <div style="margin-top:15px">
        <button onclick="clearDemo()" class="example-btn">Clear Demo</button>
        <button onclick="createNewElement()" class="example-btn">Create New Element</button>
      </div>
    `;
    content.appendChild(demoCard);
  }
  
  else if(page === "Contact") {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>Contact Me for JavaScript Services</h3>
      <p>Waxaad iigu soo diri kartaa codsiyada shaqooyinka Chapters 7, 8, iyo 9.</p>
      <div class="form-group">
        <input id="contactName" placeholder="Your Name" value="${user.name}">
      </div>
      <div class="form-group">
        <input id="contactEmail" placeholder="Your Email" type="email">
      </div>
      <div class="form-group">
        <select id="contactChapter" style="width:100%; padding:12px; border-radius:8px; margin-top:10px; background:white; color:black">
          <option value="">Select Chapter</option>
          <option value="Chapter 7">Chapter 7: Functions</option>
          <option value="Chapter 8">Chapter 8: DOM</option>
          <option value="Chapter 9">Chapter 9: Events</option>
          <option value="All Chapters">All 3 Chapters</option>
          <option value="Final Project Help">Final Project Consultation</option>
        </select>
      </div>
      <div class="form-group">
        <textarea id="contactMessage" placeholder="Describe your project..." rows="4"></textarea>
      </div>
      <button onclick="submitContact()">Send Service Request</button>
      
      <div style="margin-top:30px; padding:20px; background:rgba(255,126,95,0.1); border-radius:10px;">
        <h4 style="color:#ff7e5f">Need help with your final project?</h4>
        <p>I can help you with full-stack web development projects similar to AirMeat Africa!</p>
        <p>View my final project:</p>
        <a href="https://airmeat.africa/" target="_blank" class="project-demo-btn" style="margin-top:10px">
          AirMeat Africa Live Demo
        </a>
      </div>
      
      <div id="contactStatus" class="status"></div>
    `;
    content.appendChild(card);
  }
}

// ===== EXAMPLE RUNNER FUNCTIONS =====
function runExample(chapterId, exampleId) {
  const chapter = chaptersData.find(c => c.id === chapterId);
  const example = chapter.examples.find(e => e.id === exampleId);
  const outputDiv = document.getElementById(`output-${chapterId}-${exampleId}`);
  
  if (!outputDiv) return;
  
  try {
    const result = example.code();
    outputDiv.textContent = result;
    outputDiv.style.color = "#1abc9c";
    outputDiv.style.border = "1px solid #1abc9c";
    
    // Scroll to the output
    outputDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } catch (error) {
    outputDiv.textContent = `Error: ${error.message}`;
    outputDiv.style.color = "#e74c3c";
    outputDiv.style.border = "1px solid #e74c3c";
  }
}

// ===== DEMO FUNCTIONS =====
function showDemoMessage() {
  const demoOutput = document.getElementById('demoOutput');
  if (demoOutput) {
    demoOutput.innerHTML = `
      <p>✓ Event handled successfully!</p>
      <p>Time: ${new Date().toLocaleTimeString()}</p>
      <p>This is Chapter 9 Events in action!</p>
    `;
  }
}

function clearDemo() {
  const demoOutput = document.getElementById('demoOutput');
  const demoInput = document.getElementById('demoInput');
  if (demoOutput) demoOutput.innerHTML = '';
  if (demoInput) demoInput.value = '';
}

function createNewElement() {
  const liveDemo = document.getElementById('liveDemo');
  if (!liveDemo) return;
  
  const newElement = document.createElement('div');
  newElement.className = 'student-item';
  newElement.innerHTML = `
    <p>New element created at: ${new Date().toLocaleTimeString()}</p>
    <button onclick="this.parentElement.remove()" style="padding:5px 10px; margin-top:5px">Remove</button>
  `;
  liveDemo.appendChild(newElement);
}

// ===== PROJECT FUNCTIONS =====
function showProjectDetails() {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>AirMeat Africa - Final Project Details</h3>
    <p><b>Project Description:</b> A full-stack e-commerce platform for meat products across Africa</p>
    
    <h4>Technologies Used:</h4>
    <ul class="service-list">
      <li class="student-item">Frontend: React.js, JavaScript, HTML5, CSS3</li>
      <li class="student-item">Backend: Node.js, Express.js</li>
      <li class="student-item">Database: MongoDB</li>
      <li class="student-item">Authentication: JWT, OAuth</li>
      <li class="student-item">Payment: Stripe Integration</li>
      <li class="student-item">Deployment: AWS, Docker</li>
    </ul>
    
    <h4>Key Features:</h4>
    <ul class="service-list">
      <li class="student-item">User authentication & authorization</li>
      <li class="student-item">Product catalog with search & filters</li>
      <li class="student-item">Shopping cart & checkout system</li>
      <li class="student-item">Order tracking & management</li>
      <li class="student-item">Admin dashboard</li>
      <li class="student-item">Responsive mobile design</li>
    </ul>
    
    <div style="margin-top:20px">
      <a href="https://airmeat.africa/" target="_blank" class="project-demo-btn">
        Visit Live Website
      </a>
      <button onclick="this.parentElement.parentElement.remove()" class="project-demo-btn" style="background:linear-gradient(45deg,#e74c3c,#c0392b)">
        Close Details
      </button>
    </div>
  `;
  
  content.appendChild(card);
  card.scrollIntoView({ behavior: 'smooth' });
}

// ===== SERVICE FUNCTIONS =====
function selectService(chapterId) {
  const chapter = chaptersData.find(c => c.id === chapterId);
  alert(`Waxaad dooratay: ${chapter.title}\nQiimaha: ${chapter.price}\n\nWaxaan ku soo diri doonaa email dhammaan examples-ka iyo shaqooyinka!`);
  
  // Auto-fill contact form
  if(document.getElementById("contactChapter")) {
    document.getElementById("contactChapter").value = chapter.title;
  }
}

function submitContact() {
  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const chapter = document.getElementById("contactChapter").value;
  const message = document.getElementById("contactMessage").value;
  const status = document.getElementById("contactStatus");
  
  if(!name || !email || !chapter || !message) {
    status.textContent = "Fadlan buuxi dhammaan meelaha!";
    status.className = "status error";
    return;
  }
  
  // Create contact object
  const contact = {
    name,
    email,
    chapter,
    message,
    timestamp: new Date().toLocaleString()
  };
  
  status.innerHTML = `
    <p class="success">Mahadsanid ${name}!</p>
    <p>Codsi-gaaga waa la diray.</p>
    <p><small>Service: ${chapter}</small></p>
    <p><small>Waxaan ku soo diri doonaa jawaab email-kaaga: ${email}</small></p>
    ${chapter === "Final Project Help" ? 
      '<p><small>I will also share my final project experience with AirMeat Africa!</small></p>' : 
      ''}
  `;
  status.className = "status success";
  
  // Clear form
  document.getElementById("contactMessage").value = "";
}

// ===== EVENT LISTENERS =====
document.addEventListener("keydown", function(e) {
  if(e.ctrlKey) {
    switch(e.key) {
      case '1': loadPage("Home"); break;
      case '2': loadPage("About"); break;
      case '3': loadPage("Services"); break;
      case '4': loadPage("Contact"); break;
      case '5': 
        window.open("https://airmeat.africa/", "_blank");
        break;
    }
  }
});

// Initialize demo input event
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    const demoInput = document.getElementById('demoInput');
    if (demoInput) {
      demoInput.addEventListener('input', function(e) {
        const demoOutput = document.getElementById('demoOutput');
        if (demoOutput) {
          demoOutput.innerHTML = `
            <p>Chapter 9 Event: input</p>
            <p>Typed: "${e.target.value}"</p>
            <p>Length: ${e.target.value.length} characters</p>
          `;
        }
      });
    }
  }, 500);
});

// ===== INITIAL LOAD =====
loadPage("Home");