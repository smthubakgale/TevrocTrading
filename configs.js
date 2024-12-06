
//----------------: Shop
//: Specifications

const schedule2 = [
							 
];

constr create = 
[
    {
	label : "APIs" ,
	 type : "subform" ,
	 name : "apis" ,    
	 seemore : true , 
	 title : " Application Programming Interface ... " ,
	 description : `
  <span style="color: #FF6600" onclick="myFunction(this)"> Click Me !</span>
  <div></div>
  <script>
    function myFunction(span) { 
       const div = span.nextElementSibling;
	if (span.hasAttribute('shown')) {
	    span.removeAttribute('shown');
	    div.innerHTML = ''; 
	} else {
	    span.setAttribute('shown', '');
	    div.innerHTML = (function() {
			       var xhr = new XMLHttpRequest();
			       xhr.open('GET', 'blogs/apis.html', false); 
			       xhr.send();
			       return xhr.responseText;
			    })();
	 }
    }
  </script>
` ,
	 fields: schedule2
     },	
     {
	label : "Libraries" ,
	 type : "subform" ,
	 name : "apis" ,       
	 seemore : true , 
	 title : " Pre-written code collections ... " ,
	 description : `
  <span style="color: #FF6600" onclick="myFunction(this)"> Click Me !</span>
  <div></div>
  <script>
    function myFunction(span) { 
       const div = span.nextElementSibling;
	if (span.hasAttribute('shown')) {
	    span.removeAttribute('shown');
	    div.innerHTML = ''; 
	} else {
	    span.setAttribute('shown', '');
	    div.innerHTML = (function() {
			       var xhr = new XMLHttpRequest();
			       xhr.open('GET', 'blogs/libraries.html', false); 
			       xhr.send();
			       return xhr.responseText;
			    })();
	 }
    }
  </script>
` , 
	 fields: schedule2
     },	 	 
 ];

 export const formConfig = {
	 "fields": [ 
	        {
		   group:"Document",
		   label: "Members",
		   name: "members",
		   type: "subform", 
	           button: "Member",
		   multiple:true ,
		   description: "Specify all the members involved " ,
		   fields: [
			{
			  "label": "Member Id",
			  "type": "number",
			  "name": "id",
			  "required": true ,
			   readonly:true ,
			   description:"it will auto generate thus readonly"
			},
			{
			  "label": "Email Address",
			  "type": "email",
			  "name": "email",
			  "required": true ,
			  description: "Enter the Member's Email Address"
			},
			{
			  "label": "First Name",
			  "type": "text",
			  "name": "fname",
			  "required": true ,
			  description: "Enter the Member's First Name"
			},
			{
			  "label": "Middle Name",
			  "type": "text",
			  "name": "mname",
			  "required": false ,
			   description: "Enter Member's middle name (Optional)"
			},
			{
			   "label": "Last Name",
			   "type": "text",
			   "name": "lname",
			   "required": true ,
			   description:"Enter Member's Last Name"
			},
			{
			  "label": "Github Username",
			  "type": "text",
			  "name": "github",
			  "required": true,
			   description:"Enter Member's Github Username"
			}
		  ]
		},
	        {
		   group:"Document" ,
		   label: "Development Tools" ,
		   name: "dev",
		   type: "subform",  
		   description: "Specify the development tools needed " ,
		   fields: [
			{
			  "label": "Programming Language",
			  "type": "subform",
			  "name": "lang",
		           multiple:true ,
			   button: "Language",
			   description:"Specify the programming languages" ,
			   fields : [
			      {
				 label : "Language ID" ,
				 type : "number" ,
				 readonly:true , 
				 autoincrement: true , 
				 name : "id" ,
				 description : "it will auto generate thus readonly" 
			      } ,
			      {
				 label : "Name" ,
				 type : "text" ,
				 name : "name" ,
				 description : "Enter the programming language of your choice",
				 autocomplete:true ,
				 suggestions : [
					 "Java", "Python", "JavaScript", "C++", "C#", "Swift", "Ruby", "PHP", "Go", 
					 "Kotlin", "TypeScript", "Rust", "Scala", "Perl", "Haskell", "MATLAB", "SQL", 
					 "Visual Basic"
				 ]
			      } 
			   ]
			},
			{
			  "label": "Development Framework",
			  "type": "subform",
			  "name": "framework", 
		           multiple:true , 
			   button: "Framework",
			   description: "Specify the different frameworks",
			   fields : [
			      {
				 label : "Framework ID" ,
				 type : "number" ,
				 name : "id" ,
				 autoincrement: true , 
				 readonly:true , 
				 description : "it will auto generate thus readonly"
			      } ,
			      {
				 label : "Name" ,
				 type : "text" ,
				 name : "name" ,
				 description : "Enter the framework of your choice",
				 autocomplete:true ,
				 suggestions : [ 
					"HTML5", "Flask", "PHP", "MVC", "Express", "Spring Boot",
					  "Xamarin.Android", "Java.Android",
					  "Electron", "JavaFX", "Owin.Core", "PyWeb",
					  "Maven", "C#",
					  "Tomcat", "Flask.Electron", "Electron.SpringBoot", "Owin.Framework", 
					  "React", "Angular", "Vue.js", "Django", "Ruby on Rails", 
					  "Laravel", "Express.js", "Spring", "ASP.NET", "Ember.js", "Backbone.js", 
					  "Symfony", "CakePHP", "CodeIgniter", "Zend Framework", "Yii", "Phalcon", 
					  "FuelPHP", "Kohana", "Slim", "Silex", "Aurora", "Nette", "Fat-Free Framework", 
					  "Bullet", "Hanami", "Padrino", "Ramaze", "Camping", "Sinatra", 
					  "Grape", "Rails", "Trailblazer", "Roda", "Cuba", "Lotus", 
					  "NYNY", "Proton", "Racket", "Webmachine", "Yesod", "Happstack", 
					  "Snap", "Scotty", "Wai", "Warp", "MFlow", "Haskell on Heroku", 
					  "Pyramid", "Bottle", "Tornado", "Sanic", "FastAPI", "Starlette", 
					  "Responder", "Vibora", "Vapor", "Kitura", "Perfect", "Zewo", 
					  "Clean Architecture", "ASP.NET Core", "ASP.NET MVC", "ASP.NET Web API", 
					  "ASP.NET Web Forms", "MonoRail", "Castle Monorail", "Marionette.js", 
					  "Chaplin.js", "Batman.js", "Spine.js", "Dojo", "Ext JS", "jQuery", 
					  "MooTools", "Prototype", "Script.aculo.us", "YUI Library", "Google Web Toolkit", 
					  "jQuery UI", "jQuery Mobile", "React Native", "Xamarin", "Flutter", "Ionic", 
					  "PhoneGap", "Apache Cordova", "Qt", "wxWidgets", "GTK+", "FLTK", "FOX Toolkit", 
					  "GLUT", "SDL", "SFML", "Allegro", "ClanLib", "Enlightenment Foundation Libraries (EFL)", 
					  "KDE Frameworks", "LessTif", "Motif", "Plastic SCM", "ProjectPier", "Redmine", 
					  "Rhodecode", "SourceForge", "Springloops", "Subversion", "Trello", "Unfuddle", 
					  "Veracity", "Visual Studio Team Services", "Wercker", "AWS SDK", "AWS Lambda SDK", 
					  "AWS S3 SDK", "AWS DynamoDB SDK", "Google Cloud SDK", "Google Cloud Storage SDK", 
					  "Google Cloud Datastore SDK", "Microsoft Azure SDK", "Microsoft Azure Storage SDK", 
					  "Microsoft Azure Cosmos DB SDK", "IBM Cloud SDK", "IBM Cloud Storage SDK", "IBM Cloudant SDK", 
					  "Oracle Cloud SDK", "Oracle Cloud Storage SDK", "Oracle Cloud Database SDK", "Salesforce SDK", 
					  "Salesforce Marketing Cloud SDK", "Salesforce Commerce Cloud SDK", "Facebook SDK", 
					  "Facebook Graph API SDK", "Facebook Marketing API SDK", "Twitter SDK", "Twitter API SDK", 
					  "Twitter Ads SDK", "Google Maps SDK", "Google Places SDK", "Google Directions SDK", 
					  "Amazon Alexa SDK", "Amazon Lex SDK", "Amazon Polly SDK", "Microsoft Bot Framework SDK", 
					  "Microsoft Cognitive Services SDK", "IBM Watson SDK", "IBM Watson Assistant SDK", 
					  "IBM Watson Text to Speech SDK", "Google Cloud Vision SDK", "Google Cloud Speech-to-Text SDK", 
					  "Amazon Rekognition SDK", "Amazon Transcribe SDK", "Microsoft Azure Computer Vision SDK", 
					  "Microsoft Azure Speech Services SDK", "IBM Watson Visual Recognition SDK", 
					  "IBM Watson Speech to Text SDK", "Google Cloud Natural Language SDK", "Google Cloud Translate SDK", 
					  "Amazon Comprehend SDK", "Amazon Translate SDK", "Microsoft Azure Cognitive Services SDK", 
					  "Microsoft Azure Machine Learning SDK", "IBM Watson Natural Language Understanding SDK", 
					  "IBM Watson Language Translator SDK", "Google Cloud Dialogflow SDK", "Google Cloud Machine Learning SDK", 
					  "Amazon Lex SDK", "Amazon SageMaker SDK"					 
					 ]
			      } ,
			      {
				 label : "Author" ,
				 type : "text" ,
				 name : "author" ,
				 description : "Enter the author details "
			      } ,
			      {
				 label : "Description" ,
				 type : "textarea" ,
				 name : "desc" ,
				 description : "Enter the framework description"
			      } 
			   ]
			},
			{
			  "label": "Integrated Development Environment (IDE) ",
			  "type": "subform",
			  "name": "ide", 
		           multiple:true , 
			   button: "IDE",
			   description: "Specify the different ides",
			   fields : [
			      {
				 label : "IDE ID" ,
				 type : "number" ,
				 name : "id" ,
				 autoincrement: true , 
				 readonly:true , 
				 description : "it will auto generate thus readonly"
			      } ,
			      {
				 label : "Name" ,
				 type : "text" ,
				 name : "name" ,
				 description : "Enter the ide of your choice",
				 autocomplete:true ,
				 suggestions : [
					 "Visual Studio", "Visual Studio Code", "IntelliJ IDEA", "Eclipse", "NetBeans", 
					  "Sublime Text", "Atom", "Brackets", "WebStorm", "PHPStorm", "PyCharm", "RubyMine", 
					  "Android Studio", "Xcode", "AppCode", "CLion", "DataGrip", "GoLand", "IntelliJ IDEA", 
					  "MPS", "PhpStorm", "PyCharm", "ReSharper", "ReSharper C++", "Rider", "RubyMine", 
					  "TeamCity", "WebStorm", "YouTrack", "AWS Cloud9", "AWS CodeStar", "CodeAnywhere", 
					  "Codenvy", "Eclipse Che", "Google Colab", "Koding", "Microsoft Visual Studio Online", 
					  "Repl.it", "Sourcelair", "Araxis Merge", "AWS CodeCommit", "Beanstalk", "Bitbucket", 
					  "Codebase", "CodePlex", "Deveo", "GitHub", "GitLab", "Helix TeamHub", "Kiln", 
					  "Launchpad", "Perforce", "Phabricator", "Plastic SCM", "ProjectPier", "Redmine", 
					  "Rhodecode", "SourceForge", "Springloops", "Subversion", "Trello", "Unfuddle", 
					  "Veracity", "Visual Studio Team Services", "Wercker", "Anjuta", "Aptana Studio", 
					  "BlueGriffon", "Bluefish", "Codelite", "CodeLite", "Code::Blocks", "Dev-C++", 
					  "Eclipse", "Eric", "Geany", "GNOME Builder", "KDevelop", "Krita", "Light Table", 
					  "MonoDevelop", "NetBeans", "Orwell Dev-C++", "PyScripter", "Qt Creator", "SharpDevelop", 
					  "Sublime Text", "TeXstudio", "Textadept", "UltraEdit", "Visual Studio Express", 
					  "Wing IDE", "Xcode", "Zend Studio", "Aptana RadRails", "Aptana Studio", "Aptana Studio 3", 
					  "Eclipse", "IntelliJ IDEA", "NetBeans", "RubyMine", "TextMate", "Visual Studio Code", 
					  "AWS Cloud9", "AWS CodeStar", "CodeAnywhere", "Codenvy", "Eclipse Che", "Google Colab", 
					  "Koding", "Microsoft Visual Studio Online", "Repl.it", "Sourcelair", "Anjuta", 
					  "Aptana Studio", "BlueGriffon", "Bluefish", "Codelite", "CodeLite", "Code::Blocks", 
					  "Dev-C++", "Eclipse", "Eric", "Geany", "GNOME Builder", "KDevelop", "Krita", 
					  "Light Table", "MonoDevelop", "NetBeans", "Orwell Dev-C++", "PyScripter", "Qt Creator", 
					  "SharpDevelop", "Sublime Text", "TeXstudio", "Textadept", "UltraEdit", "Visual Studio Express", 
					  "Wing IDE", "Xcode", "Zend Studio", "Aptana RadRails", "Aptana Studio", "Aptana Studio 3", 
					  "Eclipse", "IntelliJ IDEA", "NetBeans", "RubyMine", "TextMate", "Visual Studio Code", 
					  "AWS Cloud9", "AWS CodeStar", "CodeAnywhere", "Codenvy", "Eclipse Che", "Google Colab", 
					  "Koding", "Microsoft Visual Studio Online", "Repl.it", "Sourcelair", "Aptana", "AWS Cloud9", 
					  "AWS CodeStar", "Bitbucket", "CodeAnywhere", "Codepen", "Codenvy", "Eclipse Che", 
					  "GitHub", "GitLab", "Google Colab", "Koding", "Microsoft Visual Studio Online", 
					  "Repl.it", "Sourcelair", "StackBlitz", "Teletype for Atom", "Visual Studio Live Share"
				 ]
			      } 
			   ]
			},
			{
			  "label": "Software Development Kit (SDK)",
			  "type": "subform",
			  "name": "sdk", 
		           multiple:true , 
			   button: "SDK",
			   description: "Specify the different sdks",
			   fields : [
			      {
				 label : "SDK ID" ,
				 type : "number" ,
				 name : "id" ,
				 readonly:true , 
				 autoincrement: true , 
				 description : "it will auto generate thus readonly"
			      } ,
			      {
				 label : "Name" ,
				 type : "text" ,
				 name : "name" ,
				 description : "Enter the sdk of your choice",
				 autocomplete:true ,
				 suggestions : [
				  "Node.js", "PHP", ".NET", "Java", "Python", "Ruby", "Swift", "Go", "Rust", 
				  "Kotlin", "TypeScript", "Scala", "Clojure", "Haskell", "Lisp", "Scheme", 
				  "Erlang", "Elixir", "Phoenix", "Django", "Flask", "Ruby on Rails", "Laravel", 
				  "CodeIgniter", "Symfony", "CakePHP", "Yii", "Zend Framework", "Express.js", 
				  "Koa.js", "Hapi", "Sails.js", "Nest.js", "LoopBack", "ASP.NET", "ASP.NET Core", 
				  "Spring", "Spring Boot", "Play Framework", "Vaadin", "Spark Java", "Javalin", 
				  "Dropwizard", "Ratpack", "Jooby", "Jodd", "Vert.x", "Quarkus", "Micronaut", 
				  "Grails", "Gradle", "Maven", "Ant", "GWT", "React", "Angular", "Vue.js", 
				  "Ember.js", "Backbone.js", "Marionette.js", "Chaplin.js", "Batman.js", "Spine.js", 
				  "Dojo", "Ext JS", "jQuery", "MooTools", "Prototype", "Script.aculo.us", "YUI Library", 
				  "Google Web Toolkit", "jQuery UI", "jQuery Mobile", "React Native", "Xamarin", "Flutter", 
				  "Ionic", "PhoneGap", "Apache Cordova", "Qt", "wxWidgets", "GTK+", "FLTK", "FOX Toolkit", 
				  "GLUT", "SDL", "SFML", "Allegro", "ClanLib", "Enlightenment Foundation Libraries (EFL)", 
				  "KDE Frameworks", "LessTif", "Motif", "Plastic SCM", "ProjectPier", "Redmine", "Rhodecode", 
				  "SourceForge", "Springloops", "Subversion", "Trello", "Unfuddle", "Veracity", 
				  "Visual Studio Team Services", "Wercker", "AWS SDK", "AWS Lambda SDK", "AWS S3 SDK", 
				  "AWS DynamoDB SDK", "Google Cloud SDK", "Google Cloud Storage SDK", "Google Cloud Datastore SDK", 
				  "Microsoft Azure SDK", "Microsoft Azure Storage SDK", "Microsoft Azure Cosmos DB SDK", 
				  "IBM Cloud SDK", "IBM Cloud Storage SDK", "IBM Cloudant SDK", "Oracle Cloud SDK", 
				  "Oracle Cloud Storage SDK", "Oracle Cloud Database SDK", "Salesforce SDK", 
				  "Salesforce Marketing Cloud SDK", "Salesforce Commerce Cloud SDK", "Facebook SDK", 
				  "Facebook Graph API SDK", "Facebook Marketing API SDK", "Twitter SDK", "Twitter API SDK", 
				  "Twitter Ads SDK", "Google Maps SDK", "Google Places SDK", "Google Directions SDK", 
				  "Amazon Alexa SDK", "Amazon Lex SDK", "Amazon Polly SDK", "Microsoft Bot Framework SDK", 
				  "Microsoft Cognitive Services SDK", "IBM Watson SDK", "IBM Watson Assistant SDK", 
				  "IBM Watson Text to Speech SDK", "Google Cloud Vision SDK", "Google Cloud Speech-to-Text SDK", 
				  "Amazon Rekognition SDK", "Amazon Transcribe SDK", "Microsoft Azure Computer Vision SDK", 
				  "Microsoft Azure Speech Services SDK", "IBM Watson Visual Recognition SDK", 
				  "IBM Watson Speech to Text SDK", "Google Cloud Natural Language SDK", "Google Cloud Translate SDK", 
				  "Amazon Comprehend SDK", "Amazon Translate SDK", "Microsoft Azure Cognitive Services SDK", 
				  "Microsoft Azure Machine Learning SDK", "IBM Watson Natural Language Understanding SDK", 
				  "IBM Watson Language Translator SDK", "Google Cloud Dialogflow SDK", "Google Cloud Machine Learning SDK", 
				  "Amazon Lex SDK", "Amazon SageMaker SDK", "Microsoft Bot Framework SDK", 
				  "Microsoft Azure Machine Learning SDK", "IBM Watson Assistant SDK", "IBM Watson Machine Learning SDK"
				 ]
			      } 
			   ]
			} 
		  ]
		},
	        {
		   group:"Document" ,
		   label: "Project Start" ,
		   name: "start",
		   type: "subform",  
		   description: "Specify when the project will commence " ,
		   fields: [ 
			     {
				label : "Day" ,
				 type : "number" ,
				 name : "day" , 
				 readonly:true ,
				 description : "the day the project will commence" ,
			     },
			     {
				label : "Month" ,
				 type : "number" ,
				 name : "month" , 
				 readonly:true ,
				 description : "the month number the project will commence" ,
			     },
			     {
				label : "Year" ,
				 type : "number" ,
				 name : "year" , 
				 readonly:true ,
				 description : "the year the project will commence" ,
			     },
			      {
				 label : "Datetime Local" ,
				 type : "datetime-local" ,
				 name : "datetime" , 
				 ignore: true ,
				 onimport: (subform , inputElement)=>{
				      // Sibling Elements 
					 var _day = subform.querySelector("[name='spec_start_day']");
					 var _month = subform.querySelector("[name='spec_start_month']");
					 var _year = subform.querySelector("[name='spec_start_year']");
	
					 // Set its value from these

					 // 
				      // 
				 },
				 description : "this will be used to get the day , month and time" ,
				 setter: (subform , inputElement) => {
					 // Sibling Elements 
					 var _day = subform.querySelector("[name='spec_start_day']");
 					 var _month = subform.querySelector("[name='spec_start_month']");
					 var _year = subform.querySelector("[name='spec_start_year']");

					 // Set its value to now if it's null
					if (inputElement.value === "") {
					  var now = new Date();
					  var year = now.getFullYear();
					  var month = String(now.getMonth() + 1).padStart(2, "0");
					  var day = String(now.getDate()).padStart(2, "0");
					  var hour = String(now.getHours()).padStart(2, "0");
					  var minute = String(now.getMinutes()).padStart(2, "0");
					  
					  inputElement.value = `${year}-${month}-${day}T${hour}:${minute}`;
					  // Set the month, year, and day to the corresponding elements
					  _month.value = now.getMonth() + 1;;
					  _year.value = now.getFullYear();
					  _day.value = now.getDate();
					  //
					}
					 // Get the month, year, and day from InputElement
					inputElement.addEventListener("change", function() {
					  var date = new Date(InputElement.value);
					  var month = date.getMonth() + 1; // getMonth() returns 0-11, so add 1
					  var year = date.getFullYear();
					  var day = date.getDate();
					  
					  // Set the month, year, and day to the corresponding elements
					  _month.value = month;
					  _year.value = year;
					  _day.value = day;
					  //
					});
					 //
				 }
			      } ,
		   ]
		}, 
		 
	        {
		   group:"Document" ,
		   label: "Project Feasibility" ,
		   name: "feasibility",
		   type: "subform",  
		   description: "Specify the feasibility of the project " ,
		   fields: [ 
			     {
				label : "Risk Index" ,
				 type : "number" ,
				 name : "risk" , 
				 step : 0.01 , 
				 description : " a numerical score that represents the likelihood and potential impact of a risk occurring . eg 1.5" ,
			     },
			     {
				label : "Planning Index" ,
				 type : "number" ,
				 name : "planning" ,  
				 step : 0.01 ,  
				 description : "a numerical score that represents the effectiveness of a plan in mitigating or managing a risk , e.g 2.0" ,
			     },
			     {
				label : "System feasibility" ,
				 type : "subform" ,
				 name : "system" , 
				 description : "assesses whether the system can be successfully developed, implemented, and maintained" ,
				 fields : [
				    {
					label : "Create" ,
					 type : "subform" ,
					 name : "create" ,    
					 description : "developing new systems" ,
					 fields: create
				     },	 
				     {
					label : "Recreate" ,
					 type : "subform" ,
					 name : "recreate" ,    
					 description : "developing as system from based on existing systems" ,
					 fields: create 
				     },	  
				     {
					label : "Reuse" ,
					 type : "subform" ,
					 name : "recreate" ,    
					 description : "implementing existing existing systems" ,
					 fields:  create
				     },	 
				 ]
			     },
			   ]
		 } ,
	        {
		   group : "Development" ,
		   label: "Application Logo",
		   name: "logo_png",
		   type: "file",
		   accept:".png" ,
		   description: "Upload your icon in .png format"
		},
		{
		   group : "Development" ,
		   label: "Apprication Icon",
		   name: "logo_ico",
		   type: "file",
		   accept:".ico" ,
		   description: "Upload your icon in .ico format"
		},
		{
		  "label": "Password",
		  "type": "password",
		  "name": "password",
		  "required": true
		},
		{
		  "label": "IPs",
		  "type": "subform",
		  "name": "ips",
		  "fields": [
			{
			  "label": "IP",
			  "type": "text",
			  "name": "ip",
			  "required": true
			}
		  ]
		},
		{
		  "label": "Browsers",
		  "type": "subform",
		  "name": "browsers",
		  "fields": [
			{
			  "label": "Browser",
			  "type": "text",
			  "name": "browser",
			  "required": true
			}
		  ]
		},
		{
		  "label": "Projects",
		  "type": "subform",
		  "name": "projects",
		  "fields": [
			{
			  "label": "Project",
			  "type": "text",
			  "name": "project",
			  "required": true
			}
		  ]
		},
		{
		  "label": "ANCs",
		  "type": "subform",
		  "name": "ancs",
		  "fields": [
			{
			  "label": "ANC",
			  "type": "text",
			  "name": "anc",
			  "required": true
			}
		  ]
		},
		{
		  "label": "Type",
		  "type": "text",
		  "name": "type",
		  "required": true
		},
		{
		  "label": "Files",
		  "type": "subform",
		  "name": "files",
		  "fields": [
			{
			  "label": "File",
			  "type": "text",
			  "name": "file",
			  "required": true
			}
		  ]
		},
		{
		  "label": "Temps",
		  "type": "subform",
		  "name": "temps",
		  "fields": [
			{
			  "label": "Temp",
			  "type": "text",
			  "name": "temp",
			  "required": true
			}
		  ]
		},
		{
		  "label": "SQL",
		  "type": "subform",
		  "name": "sql",
		  "fields": [
			{
			  "label": "SQL",
			  "type": "text",
			  "name": "sql",
			  "required": true
			}
		  ]
		},
		{
		  "label": "UI API",
		  "type": "subform",
		  "name": "ui_api",
		  "fields": [
			{
			  "label": "UI API",
			  "type": "text",
			  "name": "ui_api",
			  "required": true
			}
		  ]
		},
		 {
		  "label": "Social Auth",
		  "type": "subform",
		  "name": "social_auth",
		  "fields": [
			{
			  "label": "Social Auth",
			  "type": "text",
			  "name": "social_auth",
			  "required": true
			}
		  ]
		}
	  ]
	};
//: Requirements
export const formConfig2 = {
  fields: [
    {
      label: "Application Name",
      name: "--name",
      type: "text",
      description: "Enter the name of the application"
    },
    {
      label: "Development Namespace",
      name: "--group",
      type: "text",
      description: "the namespace or package of the application"
    },
    {
      label: "Organization/Company",
      name: "--company",
      type: "text",
      description: "Enter the group or comany name of the developer(s)"
    },
    {
      label: "Development Team Leader",
      name: "--author",
      type: "text",
      description: "Enter developer or member details"
    },
    {
      label: "Licence",
      name: "--license",
      type: "select",
      seemore : true , 
      title : "Select  one the development licenses ... " ,
      description: (function() {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', 'blogs/github-licenses.html', false); // synchronous request
	    xhr.send();
	    return xhr.responseText;
	  })()
,
      options: [
	        {
	          label: 'MIT License',
	          value: 'MIT License',
	        },
	        {
	          label: 'Apache License 2.0',
	          value: 'Apache License 2.0',
	        },
	        {
	          label: 'GNU General Public License v3.0',
	          value: 'GNU General Public License v3.0',
	        },
	        {
	          label: 'BSD 3-Clause "New" or "Revised" License',
	          value: 'BSD 3-Clause "New" or "Revised" License',
	        },
	        {
	          label: 'Mozilla Public License 2.0',
	          value: 'Mozilla Public License 2.0',
	        },
	        {
	          label: 'Unlicense',
	          value: 'Unlicense',
	        },
	        {
	          label: 'GNU Affero General Public License v3.0',
	          value: 'GNU Affero General Public License v3.0',
	        },
	        {
	          label: 'Eclipse Public License 2.0',
	          value: 'Eclipse Public License 2.0',
	        },
	        {
	          label: 'Creative Commons Zero v1.0 Universal',
	          value: 'Creative Commons Zero v1.0 Universal',
	        },
	        {
	          label: 'GNU Lesser General Public License v3.0',
	          value: 'GNU Lesser General Public License v3.0',
	        },
      ],
      required: true, 
    },
    {
      label: "Specification File Location",
      name: "--config",
      type: "text",
      description: "the relative or absolute path of the configuration json file ,  e.g src/configs.json"
    },
    {
      label: "Development Framework",
      name: "--frame",
      type: "select",
      seemore : true , 
      title : "Select  one the platform specific frameworks ... " ,
      description: (function() {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', 'blogs/development-frameworks.html', false); // synchronous request
	    xhr.send();
	    return xhr.responseText;
	  })() 
	,
    	"optgroups": [ 
	    {
	      "label": "Web Development",
	      "options": [
	        { "value": "HTML5", "label": "HTML 5" },
	        { "value": "Flask", "label": "Flask" },
	        { "value": "PHP", "label": "PHP" },
	        { "value": "MVC", "label": "MVC" },
	        { "value": "Express", "label": "Express" },
	        { "value": "Spring Boot", "label": "Spring Boot" }
	      ]
	    },
	    {
	      "label": "Mobile App Development",
	      "options": [
	        { "value": "Xamarin.Android", "label": "Xamarin Android" },
	        { "value": "Java.Android", "label": "Java Android" }
	      ]
	    },
	    {
	      "label": "Desktop Application Development",
	      "optgroups": [
	        {
	          "label": "GUI Development",
	          "options": [
	            { "value": "Electron", "label": "Electron" },
	            { "value": "JavaFX", "label": "JavaFX" },
	            { "value": "Owin.Core", "label": "Owin Core" },
	            { "value": "PyWeb", "label": "PyWeb" }
	          ]
	        },
	        {
	          "label": "Console Application Development",
	          "options": [
	            { "value": "Maven", "label": "Maven" },
	            { "value": "C#", "label": "C Sharp" }
	          ]
	        },
	        {
	          "label": "Hybrid Application Development",
	          "options": [
	            { "value": "Tomcat", "label": "Tomcat" },
	            { "value": "Flask.Electron", "label": "Flask Electron" },
	            { "value": "Electron.SpringBoot", "label": "Electron Spring Boot" },
	            { "value": "Owin.Framework", "label": "Owin Framework" },
	            { "value": "Owin.Flask", "label": "Owin Flask" }
	          ]
	        }
	      ]
	    } 
	]
    },
    {
      label: "Interface Design Layouts",
      name: "--layout",
      type: "select",
      seemore : true , 
      title : "Select  one the ui layouts ... " ,
      description: (function() {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', 'blogs/ui-layouts.html', false); // synchronous request
	    xhr.send();
	    return xhr.responseText;
	  })()
    ,
   options : [
    { value: "empty", label: "Empty" },
    { value: "horizontal", label: "Horizontal" },
    { value: "detached", label: "Detached" },
    { value: "two-column", label: "Two Column" },
    { value: "vertical", label: "Vertical" },
    { value: "grid", label: "Grid" },
    { value: "masonry", label: "Masonry" },
    { value: "flexbox", label: "Flexbox" },
    { value: "bootstrap", label: "Bootstrap" },
    { value: "material-design", label: "Material Design" },
    { value: "parallax", label: "Parallax" },
    { value: "single-page", label: "Single-Page" },
    { value: "multi-page", label: "Multi-Page" },
    { value: "responsive", label: "Responsive" },
    { value: "adaptive", label: "Adaptive" },
    { value: "liquid", label: "Liquid" },
    { value: "elastic", label: "Elastic" },
    { value: "fixed", label: "Fixed" },
    { value: "sticky", label: "Sticky" },
    { value: "off-canvas", label: "Off-Canvas" },
    { value: "split-screen", label: "Split-Screen" },
    { value: "brick", label: "Brick" },
    { value: "magazine", label: "Magazine" },
    { value: "newspaper", label: "Newspaper" },
    { value: "portfolio", label: "Portfolio" },
    { value: "gallery", label: "Gallery" },
    { value: "carousel", label: "Carousel" },
    { value: "slider", label: "Slider" },
    { value: "accordion", label: "Accordion" },
    { value: "tabbed", label: "Tabbed" },
    { value: "collapsible", label: "Collapsible" },
    { value: "expandable", label: "Expandable" }
  ]},
    {
      label: "Template",
      name: "--template",
      type: "select",
      seemore : true , 
      title : "Select one of the recommended templates ... " ,
      description: (function() {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', 'blogs/templates.html', false); // synchronous request
	    xhr.send();
	    return xhr.responseText;
	  })()
     ,
      optgroups:[
        {
	   label:"Admin Templates",
	   options: [
	      { "value": "AdminLTE", "label": "AdminLTE" },
	      { "value": "SB Admin 2", "label": "SB Admin 2" },
	      { "value": "Materialize Admin", "label": "Materialize Admin" },
	      { "value": "Gentelella", "label": "Gentelella" },
	      { "value": "Ample Admin", "label": "Ample Admin" },
	      { "value": "Flat Admin", "label": "Flat Admin" },
	      { "value": "Modern Admin", "label": "Modern Admin" },
	      { "value": "CoreUI", "label": "CoreUI" },
	      { "value": "Tabler", "label": "Tabler" }  
	   ]
        },
        {
	   label:"Web Application Templates",
	   options: [
	      { "value": "Bootstrap Templates", "label": "Bootstrap Templates" },
	      { "value": "HTML5 UP", "label": "HTML5 UP" },
	      { "value": "Templated", "label": "Templated" },
	      { "value": "CSS Templates", "label": "CSS Templates" },
	      { "value": "Free CSS Templates", "label": "Free CSS Templates" },
	      { "value": "W3Layouts", "label": "W3Layouts" },
	      { "value": "TemplateMonster", "label": "TemplateMonster" },
	      { "value": "ThemeForest", "label": "ThemeForest" },
	      { "value": "Creative Market", "label": "Creative Market" }  
	   ]
        },
        {
	   label:"Mobile Application Templates",
	   options: [
	      { "value": "HTML5 Mobile Templates", "label": "HTML5 Mobile Templates" },
	      { "value": "Mobile Bootstrap Templates", "label": "Mobile Bootstrap Templates" },
	      { "value": "Onsen UI Templates", "label": "Onsen UI Templates" },
	      { "value": "Framework7 Templates", "label": "Framework7 Templates" },
	      { "value": "Ionic Templates", "label": "Ionic Templates" },
	      { "value": "React Native Templates", "label": "React Native Templates" },
	      { "value": "Flutter Templates", "label": "Flutter Templates" }  
	   ]
        },
        {
	   label:"Landing Page Templates",
	   options: [
	      { "value": "Landing Page Templates", "label": "Landing Page Templates" },
	      { "value": "One Page Love", "label": "One Page Love" },
	      { "value": "Landkit", "label": "Landkit" },
	      { "value": "Launchkit", "label": "Launchkit" },
	      { "value": "Startup Template", "label": "Startup Template" },
	      { "value": "Landing Template", "label": "Landing Template" },
	      { "value": "OnePage Template", "label": "OnePage Template" },
	      { "value": "TemplateKit", "label": "TemplateKit" }  
	   ]
        },
        {
	   label:"E-commerce Templates" ,
	   options: [
	     { "value": "E-commerce Templates", "label": "E-commerce Templates" },
	     { "value": "OpenCart Templates", "label": "OpenCart Templates" },
	     { "value": "PrestaShop Templates", "label": "PrestaShop Templates" },
	     { "value": "WooCommerce Templates", "label": "WooCommerce Templates" },
	     { "value": "Magento Templates", "label": "Magento Templates" },
	     { "value": "Shopify Templates", "label": "Shopify Templates" },
	     { "value": "BigCommerce Templates", "label": "BigCommerce Templates" }
	   ]
        },
        {
	   label:"Blog Templates",
	   options: [
	     { "value": "Blog Templates", "label": "Blog Templates" },
	     { "value": "WordPress Themes", "label": "WordPress Themes" },
	     { "value": "Blogger Templates", "label": "Blogger Templates" },
	     { "value": "Joomla Templates", "label": "Joomla Templates" },
	     { "value": "Drupal Themes", "label": "Drupal Themes" }   
	   ]
        }
      ]
    }
  ]
};
//: Quotes 
export const projectTypes = [
    {
      "id": 1,
      "name": "Web Development",
	  "type": "web" ,
      "description": "Web development projects",
      "features": [
        {
          "id": 1,
          "name": "Responsive design",
          "price": 1000
        },
        {
          "id": 2,
          "name": "Customizable layout",
          "price": 1500
        },
        {
          "id": 3,
          "name": "Interactive elements",
          "price": 2000
        }
      ],
      "plans": [
        {
          "name": "Standard",
          "price": 2000
        },
        {
          "name": "Enterprise",
          "price": 5000
        },
        {
          "name": "Premium",
          "price": 8000
        }
      ]
    },
    {
      "id": 2,
      "name": "Mobile App Development",
	  "type": "mobile" ,
      "description": "Mobile app development projects",
      "features": [
        {
          "id": 4,
          "name": "Native app development",
          "price": 3000
        },
        {
          "id": 5,
          "name": "Cross-platform development",
          "price": 4000
        },
        {
          "id": 6,
          "name": "App store optimization",
          "price": 2000
        }
      ],
      "plans": [
        {
          "name": "Basic",
          "price": 5000
        },
        {
          "name": "Pro",
          "price": 10000
        },
        {
          "name": "Enterprise",
          "price": 15000
        }
      ]
    },
    {
      "id": 3,
      "name": "E-commerce Development",
	  "type": "desktop" ,
      "description": "E-commerce development projects",
      "features": [
        {
          "id": 7,
          "name": "Customizable storefront",
          "price": 2500
        },
        {
          "id": 8,
          "name": "Payment gateway integration",
          "price": 2000
        },
        {
          "id": 9,
          "name": "Inventory management",
          "price": 1500
        }
      ],
      "plans": [
        {
          "name": "Starter",
          "price": 3000
        },
        {
          "name": "Business",
          "price": 6000
        },
        {
          "name": "Enterprise",
          "price": 10000
        }
      ]
    }
  ];

export const templates = [
    {
      "name": "Basic Website Template",
      "pages": [
        {
          "name": "Home Page",
          "price": 1000,
          "link": "https://example.com/home-page-template"
        },
        {
          "name": "About Page",
          "price": 500,
          "link": "https://example.com/about-page-template"
        },
		        {
          "name": "Contact Page",
          "price": 500,
          "link": "https://example.com/contact-page-template"
        }
      ]
    },
    {
      "name": "E-commerce Website Template",
      "pages": [
        {
          "name": "Product Page",
          "price": 2000,
          "link": "https://example.com/product-page-template"
        },
        {
          "name": "Shopping Cart Page",
          "price": 1500,
          "link": "https://example.com/shopping-cart-page-template"
        },
        {
          "name": "Checkout Page",
          "price": 1000,
          "link": "https://example.com/checkout-page-template"
        }
      ]
    }
  ];

  // Price Adjustments
export const complexityMultipliers = {
  web: {
	low: 0.6,
	medium: 1.0,
	high: 1.4,
  },
  desktop: {
	low: 0.5,
	medium: 1.0,
	high: 1.5,
  },
  mobile: {
	low: 0.7,
	medium: 1.0,
	high: 1.3,
  },
};

export const projectTypeMultipliers = {
  web: {
	basic: 0.8,
	premium: 1.0,
	enterprise: 1.2,
  },
  desktop: {
	basic: 0.7,
	premium: 1.0,
	enterprise: 1.3,
  },
  mobile: {
	basic: 0.8,
	premium: 1.0,
	enterprise: 1.2,
  },
};

export const projectDurationMultipliers = (days) => {
  if (days <= 30) {
	return 1.5; // very short-term (less than 1 month)
  } else if (days <= 90) {
	return 1.2; // short-term (1-3 months)
  } else if (days <= 180) {
	return 1.0; // medium-term (3-6 months)
  } else if (days <= 365) {
	return 0.9; // long-term (6-12 months)
  } else if (days <= 730) {
	return 0.8; // very long-term (1-2 years)
  } else if (days <= 1460) {
	return 0.7; // extremely long-term (2-4 years)
  } else if (days <= 2920) {
	return 0.6; // ultra-long-term (4-6 years)
  } else if (days <= 3650) {
	return 0.5; // maximum long-term (6-10 years)
  } else {
	return 0.4; // beyond maximum long-term (> 10 years)
  }
};
//:
//----------------: General 
