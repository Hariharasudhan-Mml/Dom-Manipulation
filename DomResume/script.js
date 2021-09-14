// change the title
document.querySelector('title').innerText = "Resume Using DOM";


//linking stylesheet
let stylesheet = document.createElement('link');

document.querySelector('head').appendChild(stylesheet);
stylesheet.setAttribute('rel', 'stylesheet');
// document.querySelector('link').setAttribute('href','style.css');
document.getElementsByTagName('link')[0].setAttribute('href', 'style.css');
//linking cdns
let cdn = document.createElement('script');
cdn.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js");
document.querySelector('head').append(cdn)

//container
let container = document.createElement('div');
container.setAttribute('class', 'container');
document.querySelector('body').append(container);

//Banner
let Banner = document.createElement('div');
Banner.setAttribute('class', 'banner');
document.querySelector('.container').append(Banner);

let address = document.createElement('p');
address.innerText = "N.Damen Avenue,Chicago 99999|999-999-9999|hello@kickresume.com|www.kickresume.com";
document.querySelector('.container').append(address);
let hr = document.createElement('hr');
document.querySelector('.container').append(hr);


//img
let img = document.createElement('img');
img.setAttribute('src', 'brian.jpg');
img.setAttribute('width', '200px');
document.getElementsByClassName('banner')[0].append(img);

//whitebar
let bar = document.createElement('div');
bar.setAttribute('class', 'white-bar');
document.querySelector(".banner").append(bar);

//name
let Name = document.createElement('p');
Name.innerText = "Brian dudey";
document.querySelector('.banner').append(Name);

//first-half
//content-1
let first = document.createElement('div');
first.setAttribute('class', 'first');


//content-2
let second = document.createElement('div');
second.setAttribute('class', 'second');


//.
let contentCont=document.createElement('div');
contentCont.setAttribute('class','cont-container');
contentCont.append(first);
contentCont.append(second);
container.appendChild(contentCont)




//1
let profiles = document.createElement('div');
profiles.setAttribute('class', 'profiles');
document.querySelector('.first').append(profiles);


let title = document.createElement('div');
title.setAttribute('class', 'title');
document.querySelector('.profiles').append(title);

let icon = document.createElement('div');
icon.setAttribute('class', 'icon');
document.querySelector('.title').append(icon);
icon.innerHTML = `<i class="fas fa-user fa-sm"></i>`;

let profile = document.createElement('h1');
profile.setAttribute('class', 'profile');
title.append(profile);
let ptext = document.createTextNode('profile');
document.querySelector('.profile').append(ptext);

let profilecontent=document.createElement('p');
document.querySelector('.profiles').append(profilecontent);
let profiletext=document.createTextNode('Innovative optimized solution seeker.Excited to be at the deployment phase of my new career as a web developer.I am ambitious ,adventerous, assiduous, animated,and an alliteration advocate.');
document.querySelector('.title').nextSibling.append(profiletext);

//2
 let skills=document.createElement('div');
skills.setAttribute('class','skills');
document.querySelector('.first').append(skills);
title=document.createElement('div');
title.setAttribute('class','title');
document.querySelector('.skills').append(title);
icon=document.createElement('div');
icon.setAttribute('class','icon');
icon.innerHTML='<i class="fas fa-flask fa-sm"></i>';
title.append(icon);
let skill=document.createElement('h1');
skill.setAttribute('class','skill');
title.append(skill)
let skilltext=document.createTextNode('skills');
skill.appendChild(skilltext);

//technical-skil
let tskill=document.createElement('h3');
tskill.setAttribute('class','tskill');
tskill.innerText="Technical skills";
document.querySelector('.skills').appendChild(tskill);
//inputs
let row=document.createElement('div');
row.setAttribute('class','row');
document.querySelector('.skills').append(row);
row.innerHTML='<p>JavaScript</P><input type="range" value="80"/>';


 row=document.createElement('div');
row.setAttribute('class','row');
document.querySelector('.skills').append(row);
row.innerHTML='<p>HTML</P><input type="range" value="80"/>';


 row=document.createElement('div');
row.setAttribute('class','row');
document.querySelector('.skills').append(row);
row.innerHTML='<p>CSS</P><input type="range" value="50"/>';


row=document.createElement('div');
row.setAttribute('class','row');
document.querySelector('.skills').append(row);
row.innerHTML='<p>React</P><input type="range" value="50"/>';


row=document.createElement('div');
row.setAttribute('class','row');
document.querySelector('.skills').append(row);
row.innerHTML='<p>Redux</P><input type="range" value="70"/>';

row=document.createElement('div');
row.setAttribute('class','row');
document.querySelector('.skills').append(row);
row.innerHTML='<p>Mango</P><input type="range" value="70"/>';


row=document.createElement('div');
row.setAttribute('class','row');
document.querySelector('.skills').append(row);
row.innerHTML='<p>Deployment</P><input type="range" value="98"/>';

let addskills=document.createElement('h3');
addskills.setAttribute('class','add-skills');
addskills.innerText="Additional skills"
document.querySelector('.skills').append(addskills);



row=document.createElement('div');
row.setAttribute('class','row');
document.querySelector('.skills').append(row);
row.innerHTML='<p>Project Management</P><input type="range" value="95"/>';



row=document.createElement('div');
row.setAttribute('class','row');
document.querySelector('.skills').append(row);
row.innerHTML='<p>Recruitment</P><input type="range" value="80"/>';


row=document.createElement('div');
row.setAttribute('class','row');
document.querySelector('.skills').append(row);
row.innerHTML='<p>Bussiness  Development</P><input type="range" value="60"/>';


row=document.createElement('div');
row.setAttribute('class','row');
document.querySelector('.skills').append(row);
row.innerHTML='<p>Editing</P><input type="range" value="100"/>';



row=document.createElement('div');
row.setAttribute('class','row');
document.querySelector('.skills').append(row);
row.innerHTML='<p>Fundraising</P><input type="range" value="70"/>';


//3-workexperience
let exp=document.createElement('div');
exp.setAttribute('class','work-exp');
document.querySelector('.first').append(exp);

 title=document.createElement('div');
title.setAttribute('class','title');
document.querySelector('.first').querySelector('.work-exp').appendChild(title);
icon=document.createElement('div');
icon.setAttribute('class','icon');
icon.innerHTML='<i class="fas fa-tools fa-sm"></i>';
document.querySelector('.first').querySelector('.work-exp').querySelector('.title').appendChild(icon);


let workExpText=document.createElement('h1');
workExpText.setAttribute('class','work-exptext');
document.querySelector('.first').querySelector('.work-exp').querySelector('.title').append(workExpText);
text=document.createTextNode('Work experience');
document.querySelector('.work-exptext').appendChild(text);

let h4=document.createElement('h4');
h4.innerText="Event Manager";
document.querySelector('.work-exp').append(h4);
let span=document.createElement('span');
span.innerText="03/2014-02/2017";
document.querySelector('.work-exp').append(span);

text=document.createElement('p');
text.innerText='c3 presents,Washington DC.'
document.querySelector('.work-exp').appendChild(text);

let ul=document.createElement('ul');
document.querySelector('.work-exp').append(ul);

let li=document.createElement('li');
li.innerHTML='<p>Lead and Execute all phases of event planning and productioin spanning committee recruitement,training,vendor relationships and on-site facilitation.</p>'
document.querySelector('ul').appendChild(li);

 li=document.createElement('li');
li.innerHTML='<p>Brought new bussiness to the organization through relentless networking and sewardship which helped the company win the bid of the state Department Summit on the MIddle East and, the companies largest civic event to date,the united state of women.</p>'
document.querySelector('ul').appendChild(li);

 li=document.createElement('li');
li.innerHTML='<p>Exercise fiacal control over budget creaqtion,trscking and reporting collaborate with employees at all o0rganization levels to advance cohesive operations.</p>'
document.querySelector('ul').appendChild(li);
 
//second
let workexp= document.createElement('div');
workexp.setAttribute('class','work-exp');
document.querySelector('.second').appendChild(workexp);

title=document.createElement('div');
title.setAttribute('class','title');
document.querySelector('.second').querySelector('.work-exp').append(title);

icon=document.createElement('div');
icon.setAttribute('class','icon');
icon.innerHTML='<i class="fas fa-tools fa-sm"></i>';
document.querySelector('.second').querySelector('.title').append(icon);

let h1=document.createElement('h1');
h1.setAttribute('class','work-exptext');
document.querySelector('.second').querySelector('.title').appendChild(h1);
 text=document.createTextNode('Work Experience');
 document.querySelector('.second').querySelector('.title').querySelector('.work-exptext').append(text)
 h4=document.createElement('h4');
 h4.innerText="Community Relations Manager";
 document.querySelector('.second').querySelector('.work-exp').append(h4);
text=document.createElement('p');
text.innerText="06/2011-01/2014";
document.querySelector('.second').querySelector('.work-exp').append(text);
text=document.createElement('p');
t=document.createTextNode('Gay & Lesbian Elder Housing,Los Angels');
text.append(t);
document.querySelector('.second').querySelector('.work-exp').append(text);


ul=document.createElement('ul');
document.querySelector('.second').querySelector('.work-exp').append(ul);

li=document.createElement('li');
li.innerHTML='<p>Arranging presentation and pitch deck</p>'
document.querySelector('.second').querySelector('ul').append(li);

li=document.createElement('li');
li.innerHTML='<p>Designing a PR plan and establishing and establishing important focus points.</p>'
document.querySelector('.second').querySelector('ul').append(li);

li=document.createElement('li');
li.innerHTML='<p>Designing, creating and managing content across multiple communication platforms..</p>'
document.querySelector('.second').querySelector('ul').append(li);

li=document.createElement('li');
li.innerHTML='<p>Building relationships with key media players.</p>'
document.querySelector('.second').querySelector('ul').append(li);


//5-Education
let div=document.createElement('div');
div.setAttribute('class','Education');
document.querySelector('.second').append(div);
title=document.createElement('div');
title.setAttribute('class','title');
div.append(title);

icon=document.createElement('div');
icon.setAttribute('class','icon');
icon.innerHTML='<i class="fas fa-school fa-sm"></i>';
title.append(icon);
h1=document.createElement('h1');
t=document.createTextNode('Education');
h1.append(t);
title.append(h1);

h4=document.createElement('h4');
h4.innerText="Engineering and Immersion program";
div.append(h4);
let p=document.createElement('P');
p.innerText="11/2018-06/2018";
div.append(p);

let p1=document.createElement('p');
p1.innerText="Thinkful Chicago IL"
div.append(p1);

let p2=document.createElement('p');
p2.setAttribute('class','middleContent');
div.append(p2);
let p2t=document.createTextNode('Project focused intensive program with emphasis on Mango,Express,React and Javascript(MERN) technical task.');
p2.append(p2t);

ul=document.createElement('ul');
div.append(ul)
li=document.createElement('li');
// li.innerHTML='<p>Developed a full stack web application,"RenewU" using React that allows users to explore various aspects of medication .User\'s progress is stored in a backend created using Node and MangoDB </p>';
ul.append(li);
text=document.createTextNode('Developed a full stack web application,"RenewU" using React that allows users to explore various aspects of medication .User\'s progress is stored in a backend created using Node and MangoDB ');
p=document.createElement('p');
p.append(text);
li.appendChild(p);

li=document.createElement('li');
li.innerHTML='<p>Developed a language learning app,"Foodie Phonetics" using spaced repetiton and a linked list data structure.React was used to develop the front end components whilw Node and Mango were used to create a backend that stores user data. </p>';
ul.append(li);

li=document.createElement('li');
li.innerHTML='<p>Developed a concierge app, "Pley", for individuals looking for curated suggestions whwn visiting a new place.React was used to develop the front end Which includes real-time chat, drag and drop and variety of advanced features.The backend, built using Node, Express,and Mango,takes advantage of well-developed  Resttful API, Geospatial searching , and user authentication with JWT. </p>';
ul.append(li);


h4=document.createElement('h4');
h4.innerText="BA,English";
div.append(h4);

 p=document.createElement('p');
p.innerText="09/2001-09/2005";
div.append(p);

 p1=document.createElement('p');
p1.innerText="University of California,Los Angles";
















