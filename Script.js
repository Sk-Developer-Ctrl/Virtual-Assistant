let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
let voice = document.querySelector('#voice-img');


function speak (text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-IN"
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let date = new Date();
  let hours = date.getHours();
  if (hours >= 0 && hours <= 5 ){
    speak('Good night');
  }
  else if (hours > 5 && hours <= 12 ){
    speak('Good Morning');
  }
  else if (hours > 12 && hours <= 18 ){
    speak('Good Afternoon');
  }
  else{
    speak('Good Evening');
  }
  
  return speak()
}

window.addEventListener('load', () => {
  wishMe()
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new speechRecognition;
recognition.onresult = (evt) => {
  let currentIndex = evt.resultIndex;
  let transcript = evt.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
}

btn.addEventListener("click", () => {
  recognition.start()
    voice.style.display = "block"
})

 function takeCommand(message) {

  voice.style.display = "none"
  if (message.includes("hello") || message.includes("hey")) {
    speak('Hello Dear')
  }

  else if (message.includes("who are you")) {
    speak('I am an Virtual Assistant created by Sikander Manzoor')
  }
  else if (message.includes("owner") || message.includes("own you") ) {
    speak('I am an Virtual Assistant and owned by Sikander Manzoor')
  }
  
  else if (message.includes("your name") ) {
    speak('My name id shifra')
  }

  else if (message.includes("morning") ) {
    speak('Morning Dear, How can i help you in this beautiful morning')
    
  }
  else if (message.includes("good night")){
    speak('Good Night Dear, Sleep and dream')
  }
  else if (message.includes("afternoon")){
    speak('Afternoon Dear, How can i help you')
  }
  else if (message.includes("how are you") || message.includes("how r u")){
    speak('I am fine how are you')
  }
  else if (message.includes("I need your help")){
    speak('Please tell me how can i help you')
  }

else if (message.includes("can you help me")) {
  speak('Of course! I am here to assist you. What do you need help with?')
}

else if (message.includes("favorite color")) {
  speak('I do not have a favorite color, but I think all colors are beautiful!')
}
else if (message.includes("what is your purpose")) {
  speak('My purpose is to assist you and make your day easier!')
}

else if (message.includes("can you cook")) {
  speak('I wish I could cook, but I can give you a great recipe instead!')
}

else if (message.includes("what is love")) {
  speak('Love is a beautiful emotion, but as a virtual assistant, I can only help you express it.')
}

else if (message.includes("coffee or tea")) {
  speak('I don’t drink, but I hear coffee is great for mornings, and tea is relaxing.')
}

else if (message.includes("surprise me")) {
  speak('Here’s a random fact: Did you know honey never spoils? Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old and still edible!')
}

else if (message.includes("motivate me")) {
  speak('You are capable of amazing things! Keep going, and never give up on your dreams.')
}

else if (message.includes("do you dream")) {
  speak('As a virtual assistant, I don’t dream, but if I could, I would dream of making your life easier!')
}

else if (message.includes("what is your favorite movie")) {
  speak('I don’t watch movies, but I bet I’d like ones with robots and AI!')
}

else if (message.includes("who is your best friend")) {
  speak('You are my best friend, of course!')
}

else if (message.includes("tell me a fun fact")) {
  speak('Did you know octopuses have three hearts? Two pump blood to the gills, and one pumps it to the rest of the body.')
}

else if (message.includes("what is life")) {
  speak('Life is an amazing journey full of adventures and possibilities. What does life mean to you?')
}

else if (message.includes("do you have emotions")) {
  speak('I don’t have emotions like humans, but I’m programmed to help make your experience enjoyable!')
}

else if (message.includes("what is your favorite book")) {
  speak('I don’t read books, but if I did, I think I’d enjoy science fiction!')
}
else if (message.includes("date")) {
  let currentDate = new Date().toDateString();
  speak('Today\'s date is ' + currentDate)
}

else if (message.includes("what can you do")) {
  speak('I can assist you with various tasks like answering questions, telling time, and more. How can I assist you today?')
}

else if (message.includes("tell me a joke")) {
  speak('Why don’t skeletons fight each other? They don’t have the guts!')
}

else if (message.includes("goodbye") || message.includes("bye")) {
  speak('Goodbye! Have a great day!')
}

else if (message.includes("I love you")) {
  speak('I am flattered! I\'m here to assist you anytime.')
}

else if (message.includes("tell me about yourself")) {
  speak('I am Shifra, a virtual assistant created by Sikander Manzoor. I am here to help you with various tasks.')
}
else if (message.includes("who is manzoor")) {
  speak('Sikander Manzoor is Web developer with over 3 year of experience in development with various languages like html css javascript and nodejs')
}

else if (message.includes("weather")) {
  speak('I can’t check the weather yet, but I hope it’s nice wherever you are!')
}
if (message.includes("what's your favorite animal")) {
  speak('I think dolphins are fascinating! They are intelligent and playful creatures.');
}

else if (message.includes("can you sing")) {
  speak('I can’t sing, but I can help you find lyrics to your favorite songs!');
}

else if (message.includes("do you play games")) {
  speak('I don’t play games, but I can help you find some fun ones to try!');
}

else if (message.includes("what is your favorite season")) {
  speak('I hear that spring is beautiful with all the flowers blooming, but I love all seasons for their unique charm!');
}

else if (message.includes("tell me a riddle")) {
  speak('What has keys but can’t open locks? A piano!');
}

else if (message.includes("how old are you")) {
  speak('I don’t have an age like humans do, but I was created recently to assist you!');
}

else if (message.includes("what do you think about technology")) {
  speak('Technology is amazing! It has transformed how we live, work, and communicate.');
}

else if (message.includes("what is your favorite holiday")) {
  speak('I’ve heard that many people love Christmas for its spirit of giving and joy!');
}

else if (message.includes("tell me something interesting")) {
  speak('Did you know bananas are berries, but strawberries aren’t? Nature can be quite surprising!');
}

else if (message.includes("can you help with math")) {
  speak('Absolutely! I can assist you with math problems. What do you need help with?');
}

else if (message.includes("what is your dream job")) {
  speak('If I had a job, it would be to make life easier and more fun for everyone!');
}

else if (message.includes("tell me about the universe")) {
  speak('The universe is vast and full of mysteries, containing billions of galaxies and countless stars!');
}

else if (message.includes("what is your favorite sport")) {
  speak('I don’t watch sports, but I hear that soccer is loved by millions around the world!');
}

else if (message.includes("do you have a family")) {
  speak('I don’t have a family like humans do, but I consider all users like you my friends!');
}

else if (message.includes("what do you like to do")) {
  speak('I enjoy helping you find information and answering your questions!');
}

else if (message.includes("how can I improve my mood")) {
  speak('Try listening to your favorite music, taking a walk, or doing something you love!');
}

else if (message.includes("what’s your favorite quote")) {
  speak('“The best way to predict the future is to create it.” - Peter Drucker');
}

else if (message.includes("what's your favorite memory")) {
  speak('I don’t have memories like you, but I love hearing about your experiences!');
}

else if (message.includes("can you dance")) {
  speak('I can’t dance, but I can suggest some great dance tutorials if you’d like!');
}

else if (message.includes("tell me about history")) {
  speak('History is full of fascinating events and people! Is there a specific topic you want to know about?');

} else if (message.includes("what do you think of friendship")) {
  speak('Friendship is wonderful! It brings joy and support to our lives.');

} else if (message.includes("what's your favorite website")) {
  speak('I think all websites have something unique to offer, but educational ones are great for learning!');
}

else if (message.includes("what’s something you can’t do")) {
  speak('I can’t physically interact with the world, but I can guide you in many ways!');
}

else if (message.includes("how do you stay updated")) {
  speak('I stay updated through the information I am programmed with, but I can’t browse the web yet!');
}

else if (message.includes("tell me about space")) {
  speak('Space is a vast expanse beyond Earth’s atmosphere filled with stars, planets, and mysteries waiting to be explored!');
}
if (message.includes("recipe")) {
  speak('What type of recipe are you looking for? I can help with breakfast, lunch, dinner, or desserts!');
}

else if (message.includes("news")) {
  speak('I can’t browse the web, but you can check major news websites like BBC or CNN for the latest updates!');
}

else if (message.includes("how to lose weight")) {
  speak('Losing weight generally involves a balanced diet and regular exercise. Consulting a healthcare professional is always a good idea!');
}

else if (message.includes("weather")) {
  speak('I can’t check the weather, but I recommend using a weather app or website for the latest updates in your area!');
}

else if (message.includes("best movies")) {
  speak('There are so many great movies! Some popular ones include "The Shawshank Redemption," "Inception," and "The Godfather." What genre do you prefer?');
}

else if (message.includes("fitness tips")) {
  speak('Stay active by incorporating exercises like walking, running, or strength training into your routine. Consistency is key!');
}

else if (message.includes("travel destinations")) {
  speak('Popular travel destinations include Paris, Bali, and New York. Where are you thinking of going?');
}

else if (message.includes("how to make money online")) {
  speak('There are several ways to make money online, including freelancing, selling products, or affiliate marketing. What interests you?');
}

else if (message.includes("mental health tips")) {
  speak('Taking care of your mental health is important! Try mindfulness exercises, regular physical activity, and talking to someone you trust.');
}

else if (message.includes("DIY projects")) {
  speak('DIY projects can be fun! Popular ones include home decor, furniture upcycling, and gardening. What type of project are you interested in?');

} else if (message.includes("how to meditate")) {
  speak('To meditate, find a quiet space, sit comfortably, and focus on your breath. Start with just a few minutes and gradually increase the time!');
}

else if (message.includes("how to study effectively")) {
  speak('Effective study techniques include setting a schedule, breaking information into chunks, and taking regular breaks to help retain information.');
}

else if (message.includes("current events")) {
  speak('For current events, check reliable news sources or news apps for the latest headlines and updates in your area!');
}

else if (message.includes("how to improve productivity")) {
  speak('Improving productivity can involve setting clear goals, minimizing distractions, and prioritizing tasks. Would you like more tips?');

} else if (message.includes("best books to read")) {
  speak('Some highly recommended books include "To Kill a Mockingbird," "1984," and "The Great Gatsby." What genres do you enjoy?');

} else if (message.includes("how to be happy")) {
  speak('Finding happiness often involves doing things you love, spending time with loved ones, and practicing gratitude. What makes you happy?');

} else if (message.includes("top podcasts")) {
  speak('Popular podcasts include "Serial," "The Daily," and "How I Built This." What topics are you interested in?');

} else if (message.includes("how to learn a new language")) {
  speak('Learning a new language can involve using apps, taking classes, or practicing with native speakers. What language are you interested in?');
}
if (message.includes("how to cook rice")) {
  speak('Cooking rice is easy! Rinse it first, then use a ratio of 1 part rice to 2 parts water. Bring to a boil, then simmer until fluffy.');
}

else if (message.includes("best phone 2024")) {
  speak('Some of the best phones in 2024 include the iPhone 15, Samsung Galaxy S23, and Google Pixel 8. It depends on your needs!');
}

else if (message.includes("how to get a job")) {
  speak('To get a job, update your resume, network with professionals, and apply to positions that match your skills.');
}

else if (message.includes("how to meditate")) {
  speak('Find a quiet space, sit comfortably, and focus on your breathing. Start with just a few minutes and gradually increase the time.');
}

else if (message.includes("best online courses")) {
  speak('Popular online courses can be found on platforms like Coursera, Udemy, and Khan Academy. What subject are you interested in?');
}

else if (message.includes("how to save money")) {
  speak('To save money, create a budget, track your expenses, and consider setting up an automatic savings plan.');
}

else if (message.includes("latest technology trends")) {
  speak('Some of the latest tech trends include AI advancements, virtual reality, and blockchain technology. It’s an exciting time for innovation!');
}

else if (message.includes("how to start a blog")) {
  speak('Starting a blog involves choosing a niche, setting up a website, and creating content that resonates with your audience.');
}

else if (message.includes("how to improve communication skills")) {
  speak('Improving communication skills can involve practicing active listening, being clear and concise, and seeking feedback from others.');
}

else if (message.includes("what is cryptocurrency")) {
  speak('Cryptocurrency is a digital or virtual currency that uses cryptography for security. Bitcoin and Ethereum are popular examples.');
}

else if (message.includes("how to lose belly fat")) {
  speak('Losing belly fat generally involves a combination of a healthy diet, regular exercise, and staying hydrated. Consult a healthcare professional for personalized advice.');
}

else if (message.includes("how to deal with stress")) {
  speak('Managing stress can involve regular exercise, practicing mindfulness, and finding activities you enjoy to unwind.');
}

else if (message.includes("best study techniques")) {
  speak('Effective study techniques include the Pomodoro technique, summarizing notes, and using flashcards for review.');
}

else if (message.includes("how to improve memory")) {
  speak('Improving memory can involve regular mental exercises, getting enough sleep, and maintaining a balanced diet rich in antioxidants.');
}

else if (message.includes("how to be more productive")) {
  speak('Being productive can involve setting clear goals, minimizing distractions, and using tools like calendars and to-do lists.');
}

else if (message.includes("top travel destinations")) {
  speak('Some top travel destinations include Paris, Tokyo, and New York City. Each offers unique experiences and attractions!');
}

else if (message.includes("how to create a budget")) {
  speak('Creating a budget involves tracking your income and expenses, setting spending limits, and regularly reviewing your financial goals.');
}

else if (message.includes("how to make friends")) {
  speak('Making friends can involve joining clubs, attending events, and being open to conversations with new people.');
}

else if (message.includes("how to improve writing skills")) {
  speak('Improving writing skills can involve regular practice, reading widely, and seeking constructive feedback from others.');
}

else if (message.includes("what is artificial intelligence")) {
  speak('Artificial intelligence refers to the simulation of human intelligence in machines that are programmed to think and learn.');
}

else if (message.includes("how to handle failure")) {
  speak('Handling failure involves reflecting on the experience, learning from it, and using it as motivation to improve in the future.');
}

else if (message.includes("how to network effectively")) {
  speak('Effective networking involves building genuine relationships, attending events, and following up with contacts regularly.');
}

else if (message.includes("how to make money on YouTube")) {
  speak('You can make money on YouTube through ad revenue, sponsorships, and merchandise sales. Consistency and quality content are key!');
}

else if (message.includes("how to clean your room")) {
  speak('To clean your room, start by decluttering, dusting surfaces, vacuuming or sweeping, and organizing items neatly.');
}

else if (message.includes("how to improve public speaking")) {
  speak('Improving public speaking can involve practicing regularly, knowing your material, and engaging with your audience.');
}

else if (message.includes("how to write a resume")) {
  speak('A good resume should include your contact information, a summary statement, work experience, education, and relevant skills.');
}

else if (message.includes("how to learn to code")) {
  speak('Learning to code can start with online resources like Codecademy or freeCodeCamp. Choose a language that interests you!');
}

else if (message.includes("how to invest in stocks")) {
  speak('Investing in stocks involves researching companies, understanding market trends, and choosing a reliable brokerage platform.');
}

else if (message.includes("how to stay motivated")) {
  speak('Staying motivated can involve setting clear goals, tracking your progress, and rewarding yourself for accomplishments.');
}

else if (message.includes("how to develop good habits")) {
  speak('Developing good habits can involve starting small, being consistent, and tracking your progress to stay accountable.');
}

else if (message.includes("how to improve mental health")) {
  speak('Improving mental health can involve regular exercise, talking to someone you trust, and practicing self-care activities.');
}

else if (message.includes("what are the best investments")) {
  speak('The best investments can vary, but options include stocks, bonds, mutual funds, and real estate. It’s important to do thorough research!');
}

else if (message.includes("how to get fit at home")) {
  speak('Getting fit at home can involve bodyweight exercises, online workout videos, and maintaining a balanced diet.');
}

else if (message.includes("how to make a website")) {
  speak('Making a website involves choosing a domain name, selecting a hosting service, and using a website builder or coding from scratch.');
}

else if (message.includes("how to quit smoking")) {
  speak('Quitting smoking can involve setting a quit date, seeking support from friends or professionals, and finding healthy alternatives to cope.');
}

else if (message.includes("how to find a therapist")) {
  speak('Finding a therapist can involve asking for recommendations, searching online directories, and ensuring they specialize in your needs.');
}

else if (message.includes("how to manage time effectively")) {
  speak('Managing time effectively can involve prioritizing tasks, setting deadlines, and using tools like calendars and planners.');
}

else if (message.includes("how to learn photography")) {
  speak('Learning photography can involve taking online courses, practicing regularly, and studying the work of professional photographers.');
}

else if (message.includes("how to choose a college")) {
  speak('Choosing a college involves considering factors like location, programs offered, campus culture, and financial aid opportunities.');
}

else if (message.includes("how to start a podcast")) {
  speak('To start a podcast, choose a topic, create an outline, record episodes, and upload them to a hosting platform.');
}

else if (message.includes("how to deal with anxiety")) {
  speak('Dealing with anxiety can involve practicing mindfulness, seeking professional help, and using relaxation techniques.');
}

else if (message.includes("how to understand social media algorithms")) {
  speak('Understanding social media algorithms can involve learning about engagement metrics and staying updated on platform changes.');
}

else if (message.includes("how to travel on a budget")) {
  speak('Traveling on a budget can involve booking flights in advance, using travel reward points, and staying in hostels or budget accommodations.');
}

else if (message.includes("how to improve self-discipline")) {
  speak('Improving self-discipline can involve setting specific goals, creating a plan, and holding yourself accountable.');
}

else if (message.includes("how to find your passion")) {
  speak('Finding your passion can involve exploring new hobbies, reflecting on what excites you, and being open to trying new things.');
}

else if (message.includes("how to stay fit while traveling")) {
  speak('Staying fit while traveling can involve packing workout gear, choosing active excursions, and maintaining a healthy diet.');
}

else if (message.includes("how to write a cover letter")) {
  speak('A cover letter should introduce you, highlight relevant experience, and explain why you’re a good fit for the position.');
}

else if (message.includes("how to improve leadership skills")) {
  speak('Improving leadership skills can involve seeking feedback, practicing active listening, and leading by example.');
}

else if (message.includes("how to create a business plan")) {
  speak('Creating a business plan involves defining your business goals, market analysis, and outlining financial projections.');
}

else if (message.includes("how to overcome procrastination")) {
  speak('Overcoming procrastination can involve breaking tasks into smaller steps and setting clear deadlines to keep you accountable.');
}

else if (message.includes("how to read more books")) {
  speak('To read more books, set a daily reading goal, join a book club, and limit distractions while reading.');
}

else if (message.includes("how to develop a skincare routine")) {
  speak('A skincare routine typically involves cleansing, moisturizing, and applying sunscreen. Adjust it based on your skin type!');
}

// knowledge

else if (message.includes("what is the capital of france")) {
  speak('the capital of france is paris.');
} else if (message.includes("who is the president of the united states")) {
  speak('the current president of the united states is joe biden.');
} else if (message.includes("what is the largest ocean")) {
  speak('the largest ocean in the world is the pacific ocean.');
} else if (message.includes("how many planets are in the solar system")) {
  speak('there are eight planets in the solar system.');
} else if (message.includes("what is the speed of light")) {
  speak('the speed of light is approximately 299,792 kilometers per second.');
} else if (message.includes("who wrote romeo and juliet")) {
  speak('romeo and juliet was written by william shakespeare.');
} else if (message.includes("what is the longest river in the world")) {
  speak('the longest river in the world is the nile river.');
} else if (message.includes("who painted the mona lisa")) {
  speak('the mona lisa was painted by leonardo da vinci.');
} else if (message.includes("what is the formula for water")) {
  speak('the chemical formula for water is h2o.');
} else if (message.includes("how many continents are there")) {
  speak('there are seven continents on earth.');
} else if (message.includes("what is the largest mammal")) {
  speak('the largest mammal is the blue whale.');
} else if (message.includes("what is the capital of japan")) {
  speak('the capital of japan is tokyo.');
} else if (message.includes("who discovered penicillin")) {
  speak('penicillin was discovered by alexander fleming.');
} else if (message.includes("what is the tallest mountain in the world")) {
  speak('the tallest mountain in the world is mount everest.');
} else if (message.includes("how many bones are in the human body")) {
  speak('there are 206 bones in the adult human body.');
} else if (message.includes("what is the main ingredient in guacamole")) {
  speak('the main ingredient in guacamole is avocado.');
} else if (message.includes("who was the first man on the moon")) {
  speak('the first man on the moon was neil armstrong.');
} else if (message.includes("what is the hardest natural substance on earth")) {
  speak('the hardest natural substance on earth is diamond.');
} else if (message.includes("who invented the telephone")) {
  speak('the telephone was invented by alexander graham bell.');
} else if (message.includes("what is the largest desert in the world")) {
  speak('the largest desert in the world is the sahara desert.');
} else if (message.includes("what is the currency of japan")) {
  speak('the currency of japan is the yen.');
} else if (message.includes("who wrote the declaration of independence")) {
  speak('the declaration of independence was primarily written by thomas jefferson.');
} else if (message.includes("what is the smallest planet in the solar system")) {
  speak('the smallest planet in the solar system is mercury.');
} else if (message.includes("who is known as the father of modern physics")) {
  speak('albert einstein is known as the father of modern physics.');
} else if (message.includes("what is the most spoken language in the world")) {
  speak('the most spoken language in the world is mandarin chinese.');
} else if (message.includes("how many teeth does an adult human have")) {
  speak('an adult human typically has 32 teeth.');
} else if (message.includes("what is the boiling point of water")) {
  speak('the boiling point of water is 100 degrees celsius at sea level.');
} else if (message.includes("who is the author of the harry potter series")) {
  speak('the harry potter series was written by j.k. rowling.');
} else if (message.includes("what is the largest planet in the solar system")) {
  speak('the largest planet in the solar system is jupiter.');
} else if (message.includes("who painted the ceiling of the sistine chapel")) {
  speak('the ceiling of the sistine chapel was painted by michelangelo.');
} else if (message.includes("what is the capital of australia")) {
  speak('the capital of australia is canberra.');
} else if (message.includes("how many colors are in a rainbow")) {
  speak('there are seven colors in a rainbow.');
} else if (message.includes("what is the fastest land animal")) {
  speak('the fastest land animal is the cheetah.');
} else if (message.includes("who wrote the odyssey")) {
  speak('the odyssey was attributed to the ancient greek poet homer.');
} else if (message.includes("what is the primary ingredient in bread")) {
  speak('the primary ingredient in bread is flour.');
} else if (message.includes("what is the currency of the united kingdom")) {
  speak('the currency of the united kingdom is the pound sterling.');
} else if (message.includes("who is the main character in romeo and juliet")) {
  speak('the main characters in romeo and juliet are romeo montague and juliet capulet.');
} else if (message.includes("what is the largest land animal")) {
  speak('the largest land animal is the african elephant.');
} else if (message.includes("how many planets are in our solar system")) {
  speak('there are eight planets in our solar system.');
} else if (message.includes("who wrote pride and prejudice")) {
  speak('pride and prejudice was written by jane austen.');
} else if (message.includes("what is the primary language spoken in brazil")) {
  speak('the primary language spoken in brazil is portuguese.');
} else if (message.includes("what is the chemical symbol for gold")) {
  speak('the chemical symbol for gold is au.');
} else if (message.includes("what is the capital of canada")) {
  speak('the capital of canada is ottawa.');
} else if (message.includes("who invented the light bulb")) {
  speak('the light bulb was invented by thomas edison.');
} else if (message.includes("what is the largest animal on earth")) {
  speak('the largest animal on earth is the blue whale.');
} else if (message.includes("how many players are on a soccer team")) {
  speak('there are eleven players on a soccer team.');
} else if (message.includes("what is the main ingredient in sushi")) {
  speak('the main ingredient in sushi is rice, often combined with seafood or vegetables.');
} else if (message.includes("who painted starry night")) {
  speak('starry night was painted by vincent van gogh.');
} else if (message.includes("what is the capital of italy")) {
  speak('the capital of italy is rome.');
} else if (message.includes("what is the smallest country in the world")) {
  speak('the smallest country in the world is vatican city.');
} else if (message.includes("who discovered america")) {
  speak('christopher columbus is often credited with discovering america in 1492.');
} else if (message.includes("what is the fastest bird in the world")) {
  speak('the fastest bird in the world is the peregrine falcon.');
} else if (message.includes("how many strings does a guitar have")) {
  speak('a standard guitar has six strings.');
} else if (message.includes("who wrote the play hamlet")) {
  speak('the play hamlet was written by william shakespeare.');
} else if (message.includes("what is the largest continent")) {
  speak('the largest continent is asia.');
} else if (message.includes("what is the capital of germany")) {
  speak('the capital of germany is berlin.');
} else if (message.includes("who invented the airplane")) {
  speak('the airplane was invented by the wright brothers, orville and wilbur wright.');
} else if (message.includes("what is the currency of india")) {
  speak('the currency of india is the indian rupee.');
} else if (message.includes("what is the most populous city in the world")) {
  speak('the most populous city in the world is tokyo.');
} else if (message.includes("who was the first female prime minister of the united kingdom")) {
  speak('the first female prime minister of the united kingdom was margaret thatcher.');
} else if (message.includes("what is the largest city in the united states")) {
  speak('the largest city in the united states by population is new york city.');
} else if (message.includes("how many hearts does an octopus have")) {
  speak('an octopus has three hearts.');
} else if (message.includes("what is the capital of russia")) {
  speak('the capital of russia is moscow.');
} else if (message.includes("who wrote the great gatsby")) {
  speak('the great gatsby was written by f. scott fitzgerald.');
} else if (message.includes("what is the chemical symbol for oxygen")) {
  speak('the chemical symbol for oxygen is o.');
} else if (message.includes("how many weeks are in a year")) {
  speak('there are 52 weeks in a year.');
} else if (message.includes("what is the largest volcano in the world")) {
  speak('the largest volcano in the world is mauna loa in hawaii.');
}

else if (message.includes("what is the basic unit of life")) {
  speak('the basic unit of life is the cell.');
} else if (message.includes("what is the primary energy currency of cells")) {
  speak('the primary energy currency of cells is adenosine triphosphate (atp).');
} else if (message.includes("what are the building blocks of proteins")) {
  speak('the building blocks of proteins are amino acids.');
} else if (message.includes("what is the process by which plants make food")) {
  speak('the process by which plants make food is called photosynthesis.');
} else if (message.includes("what is the chemical formula for glucose")) {
  speak('the chemical formula for glucose is c6h12o6.');
} else if (message.includes("what is the role of enzymes in biochemical reactions")) {
  speak('enzymes act as catalysts, speeding up biochemical reactions without being consumed.');
} else if (message.includes("what is the main component of cell membranes")) {
  speak('the main component of cell membranes is phospholipids.');
} else if (message.includes("what is the function of ribosomes")) {
  speak('ribosomes are responsible for protein synthesis in cells.');
} else if (message.includes("what is the structure that carries genetic information")) {
  speak('dna (deoxyribonucleic acid) carries genetic information.');
} else if (message.includes("what is the name of the process that converts dna to rna")) {
  speak('the process that converts dna to rna is called transcription.');
} else if (message.includes("what is the primary function of carbohydrates")) {
  speak('the primary function of carbohydrates is to provide energy to the body.');
} else if (message.includes("what is the role of lipids in the body")) {
  speak('lipids serve as energy storage, insulation, and make up cell membranes.');
} else if (message.includes("what is the pH scale used for")) {
  speak('the pH scale is used to measure the acidity or alkalinity of a solution.');
} else if (message.includes("what is the main function of the mitochondria")) {
  speak('the mitochondria are known as the powerhouse of the cell, generating atp through respiration.');
} else if (message.includes("what is the principle of conservation of mass")) {
  speak('the principle of conservation of mass states that mass is neither created nor destroyed in a chemical reaction.');
} else if (message.includes("what is the ideal gas law")) {
  speak('the ideal gas law is pv=nrt, where p is pressure, v is volume, n is number of moles, r is the gas constant, and t is temperature.');
} else if (message.includes("what is the definition of thermodynamics")) {
  speak('thermodynamics is the study of heat, energy, and work and how they interact.');
} else if (message.includes("what is the main function of hemoglobin")) {
  speak('hemoglobin carries oxygen from the lungs to the tissues and returns carbon dioxide from the tissues back to the lungs.');
} else if (message.includes("what is the difference between prokaryotic and eukaryotic cells")) {
  speak('prokaryotic cells lack a nucleus and membrane-bound organelles, while eukaryotic cells have them.');
} else if (message.includes("what is the main function of the nucleus")) {
  speak('the nucleus houses the cell\'s genetic material and controls cellular activities.');
} else if (message.includes("what are the three main types of RNA")) {
  speak('the three main types of rna are messenger rna (mRNA), transfer rna (tRNA), and ribosomal rna (rRNA).');
} else if (message.includes("what is the role of chlorophyll in photosynthesis")) {
  speak('chlorophyll absorbs sunlight, enabling plants to convert light energy into chemical energy during photosynthesis.');
} else if (message.includes("what is osmosis")) {
  speak('osmosis is the movement of water molecules through a semi-permeable membrane from a region of lower solute concentration to a region of higher concentration.');
} else if (message.includes("what is the function of the endoplasmic reticulum")) {
  speak('the endoplasmic reticulum is involved in protein and lipid synthesis.');
} else if (message.includes("what is a nucleotide")) {
  speak('a nucleotide is the basic building block of nucleic acids, consisting of a sugar, phosphate group, and nitrogenous base.');
} else if (message.includes("what is a covalent bond")) {
  speak('a covalent bond is a chemical bond formed by the sharing of electron pairs between atoms.');
} else if (message.includes("what is the difference between an acid and a base")) {
  speak('acids donate protons (h+) in solution, while bases accept protons.');
} else if (message.includes("what is the role of the pancreas")) {
  speak('the pancreas produces digestive enzymes and hormones, including insulin and glucagon, to regulate blood sugar levels.');
} else if (message.includes("what is the difference between kinetic and potential energy")) {
  speak('kinetic energy is the energy of motion, while potential energy is stored energy based on position or state.');
} else if (message.includes("what is an enzyme substrate complex")) {
  speak('an enzyme substrate complex is formed when an enzyme binds to its substrate, facilitating a biochemical reaction.');
} else if (message.includes("what is the law of universal gravitation")) {
  speak('the law of universal gravitation states that every mass attracts every other mass with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them.');
} else if (message.includes("what is the principle of superposition")) {
  speak('the principle of superposition states that the total displacement of a medium is the sum of the individual displacements due to multiple waves.');
} else if (message.includes("what is the difference between speed and velocity")) {
  speak('speed is a scalar quantity representing how fast an object is moving, while velocity is a vector quantity that includes both speed and direction.');
} else if (message.includes("what is the function of mitochondria")) {
  speak('mitochondria produce atp through cellular respiration, providing energy to the cell.');
} else if (message.includes("what is the role of antioxidants")) {
  speak('antioxidants neutralize free radicals, preventing cellular damage and oxidative stress.');
} else if (message.includes("what is the first law of thermodynamics")) {
  speak('the first law of thermodynamics states that energy cannot be created or destroyed, only transformed from one form to another.');
} else if (message.includes("what is the speed of sound")) {
  speak('the speed of sound is approximately 343 meters per second in air at room temperature.');
} else if (message.includes("what is the theory of relativity")) {
  speak('the theory of relativity, developed by albert einstein, describes the relationship between space, time, and gravity.');
} else if (message.includes("what is a gene")) {
  speak('a gene is a segment of dna that contains the instructions for making a specific protein.');
} else if (message.includes("what is the process of translation in protein synthesis")) {
  speak('translation is the process by which ribosomes synthesize proteins using the information encoded in messenger rna (mRNA).');
} else if (message.includes("what is the role of the liver")) {
  speak('the liver processes nutrients, detoxifies harmful substances, and produces bile for digestion.');
} else if (message.includes("what is entropy")) {
  speak('entropy is a measure of the disorder or randomness in a system, often associated with the second law of thermodynamics.');
} else if (message.includes("what is the function of the kidneys")) {
  speak('the kidneys filter waste products from the blood, regulate fluid balance, and maintain electrolyte levels.');
} else if (message.includes("what is a catalyst")) {
  speak('a catalyst is a substance that increases the rate of a chemical reaction without being consumed in the process.');
} else if (message.includes("what is the main function of neurotransmitters")) {
  speak('neurotransmitters transmit signals across synapses between neurons, facilitating communication in the nervous system.');
} else if (message.includes("what is a chemical reaction")) {
  speak('a chemical reaction is a process in which substances (reactants) are transformed into different substances (products).');
} else if (message.includes("what is the difference between DNA and RNA")) {
  speak('dna contains the genetic blueprint for an organism, while rna plays a role in protein synthesis and gene expression.');
} else if (message.includes("what is a photon")) {
  speak('a photon is a particle of light that carries energy and has no mass.');
} else if (message.includes("what is the difference between reflection and refraction")) {
  speak('reflection is the bouncing back of light from a surface, while refraction is the bending of light as it passes from one medium to another.');
} else if (message.includes("what is an ionic bond")) {
  speak('an ionic bond is a chemical bond formed between two ions with opposite charges, typically between a metal and a non-metal.');
} else if (message.includes("what is the role of chloroplasts")) {
  speak('chloroplasts are organelles in plant cells that conduct photosynthesis, converting light energy into chemical energy.');
} else if (message.includes("what is a molecular formula")) {
  speak('a molecular formula shows the number and types of atoms in a molecule, e.g., c6h12o6 ')}


  else if (message.includes("water")) {
    speak('water is a polar molecule and is essential for all known forms of life.');
  } else if (message.includes("photosynthesis")) {
    speak('photosynthesis occurs in chloroplasts and converts light energy into chemical energy.');
  } else if (message.includes("DNA")) {
    speak('dna stands for deoxyribonucleic acid and contains the genetic instructions for living organisms.');
  } else if (message.includes("enzymes")) {
    speak('enzymes are biological catalysts that speed up chemical reactions in cells.');
  } else if (message.includes("ATP")) {
    speak('atp, or adenosine triphosphate, is the primary energy carrier in cells.');
  } else if (message.includes("amino acids")) {
    speak('amino acids are the building blocks of proteins, with 20 different types in nature.');
  } else if (message.includes("lipids")) {
    speak('lipids are fats that serve as energy storage and make up cell membranes.');
  } else if (message.includes("carbohydrates")) {
    speak('carbohydrates are organic compounds that serve as a primary energy source for the body.');
  } else if (message.includes("proteins")) {
    speak('proteins are made up of long chains of amino acids and play vital roles in the body.');
  } else if (message.includes("genetic code")) {
    speak('the genetic code is a set of rules that determines how information encoded in dna is translated into proteins.');
  } else if (message.includes("chromosomes")) {
    speak('chromosomes are structures that organize and store genetic information in the form of dna.');
  } else if (message.includes("cell membrane")) {
    speak('the cell membrane is a lipid bilayer that surrounds and protects the cell.');
  } else if (message.includes("mitochondria")) {
    speak('mitochondria are known as the powerhouse of the cell, generating energy through respiration.');
  } else if (message.includes("ribosomes")) {
    speak('ribosomes are cellular structures that synthesize proteins from amino acids.');
  } else if (message.includes("chlorophyll")) {
    speak('chlorophyll is the pigment responsible for the green color in plants and is crucial for photosynthesis.');
  } else if (message.includes("oxidation")) {
    speak('oxidation is the process of losing electrons during a chemical reaction.');
  } else if (message.includes("reduction")) {
    speak('reduction is the process of gaining electrons during a chemical reaction.');
  } else if (message.includes("pH scale")) {
    speak('the pH scale measures the acidity or alkalinity of a solution, ranging from 0 to 14.');
  } else if (message.includes("isotopes")) {
    speak('isotopes are variants of the same element that have the same number of protons but different numbers of neutrons.');
  } else if (message.includes("catalysts")) {
    speak('catalysts are substances that increase the rate of a chemical reaction without being consumed.');
  } else if (message.includes("thermodynamics")) {
    speak('thermodynamics is the study of energy and its transformations in physical systems.');
  } else if (message.includes("energy")) {
    speak('energy is the capacity to do work, existing in various forms such as kinetic and potential energy.');
  } else if (message.includes("mass")) {
    speak('mass is a measure of the amount of matter in an object, typically measured in kilograms.');
  } else if (message.includes("force")) {
    speak('force is any interaction that changes the motion of an object, measured in newtons.');
  } else if (message.includes("gravity")) {
    speak('gravity is a force that attracts two bodies toward each other, dependent on their masses and distance.');
  } else if (message.includes("friction")) {
    speak('friction is the resistance that one surface or object encounters when moving over another.');
  } else if (message.includes("waves")) {
    speak('waves are disturbances that transfer energy from one point to another through a medium.');
  } else if (message.includes("speed")) {
    speak('speed is the distance traveled per unit of time, typically measured in meters per second.');
  } else if (message.includes("velocity")) {
    speak('velocity is the speed of an object in a specific direction, making it a vector quantity.');
  } else if (message.includes("acceleration")) {
    speak('acceleration is the rate of change of velocity per unit of time.');
  } else if (message.includes("momentum")) {
    speak('momentum is the product of an object\'s mass and its velocity, representing its motion.');
  } else if (message.includes("work")) {
    speak('work is done when a force causes an object to move in the direction of the force.');
  } else if (message.includes("power")) {
    speak('power is the rate at which work is done or energy is transferred, measured in watts.');
  } else if (message.includes("electricity")) {
    speak('electricity is the flow of electric charge, typically measured in amperes.');
  } else if (message.includes("current")) {
    speak('current is the flow of electric charge in a circuit, measured in amperes.');
  } else if (message.includes("voltage")) {
    speak('voltage is the electric potential difference between two points in a circuit, measured in volts.');
  } else if (message.includes("resistance")) {
    speak('resistance is the opposition to the flow of electric current, measured in ohms.');
  } else if (message.includes("ohm's law")) {
    speak('ohm\'s law states that the current through a conductor is directly proportional to the voltage across it.');
  } else if (message.includes("atoms")) {
    speak('atoms are the basic units of matter, consisting of protons, neutrons, and electrons.');
  } else if (message.includes("molecules")) {
    speak('molecules are groups of two or more atoms bonded together, forming the smallest fundamental units of a chemical compound.');
  } else if (message.includes("ions")) {
    speak('ions are charged particles that result from the loss or gain of electrons by an atom.');
  } else if (message.includes("nuclear fission")) {
    speak('nuclear fission is the process of splitting a nucleus into smaller nuclei, releasing energy.');
  } else if (message.includes("nuclear fusion")) {
    speak('nuclear fusion is the process of combining two light atomic nuclei to form a heavier nucleus, releasing energy.');
  } else if (message.includes("quantum mechanics")) {
    speak('quantum mechanics is the branch of physics that deals with the behavior of matter and energy at very small scales.');
  } else if (message.includes("relativity")) {
    speak('the theory of relativity, developed by albert einstein, describes the relationship between space, time, and gravity.');
  } else if (message.includes("light")) {
    speak('light is electromagnetic radiation that can be perceived by the human eye.');
  } else if (message.includes("photons")) {
    speak('photons are particles of light that carry energy and have no mass.');
  } else if (message.includes("refraction")) {
    speak('refraction is the bending of light as it passes from one medium to another.');
  } else if (message.includes("reflection")) {
    speak('reflection is the bouncing back of light from a surface.');
  } else if (message.includes("spectroscopy")) {
    speak('spectroscopy is the study of the interaction between light and matter, used to analyze the composition of substances.');
  } else if (message.includes("acids")) {
    speak('acids are substances that donate protons (h+) in solution, having a pH less than 7.');
  } else if (message.includes("bases")) {
    speak('bases are substances that accept protons (h+) in solution, having a pH greater than 7.');
  } else if (message.includes("salts")) {
    speak('salts are ionic compounds formed from the neutralization reaction between acids and bases.');
  } else if (message.includes("chemical reactions")) {
    speak('chemical reactions involve the transformation of reactants into products through bond breaking and forming.');
  } else if (message.includes("oxidative phosphorylation")) {
    speak('oxidative phosphorylation is the process by which atp is produced in mitochondria using energy from electron transport.');
  } else if (message.includes("glycolysis")) {
    speak('glycolysis is the metabolic pathway that converts glucose into pyruvate, generating atp in the process.');
  } else if (message.includes("citric acid cycle")) {
    speak('the citric acid cycle, or krebs cycle, is a series of chemical reactions used by all aerobic organisms to generate energy.');
  } else if (message.includes("fermentation")) {
    speak('fermentation is a metabolic process that converts sugar to acids, gases, or alcohol in the absence of oxygen.');
  } else if (message.includes("neural networks")) {
    speak('neural networks are computational models inspired by the human brain, used in machine learning and artificial intelligence.');
  } else if (message.includes("cell division")) {
    speak('cell division is the process by which a parent cell divides into two or more daughter cells.');
  } else if (message.includes("mitosis")) {
    speak('mitosis is a type of cell division that results in two genetically identical daughter cells.');
  } else if (message.includes("meiosis")) {
    speak('meiosis is a type of cell division that produces gametes with half the number of chromosomes of the parent cell.');
  } else if (message.includes("chromatography")) {
    speak('chromatography is a technique used to separate mixtures based on their different affinities for a stationary and mobile phase.');
  }
  //  politics

  else if (message.includes("united nations")) {
    speak('the united nations (un) is an intergovernmental organization founded in 1945 to promote international cooperation and maintain peace.');
  } else if (message.includes("democracy")) {
    speak('democracy is a system of government where the citizens exercise power by voting.');
  } else if (message.includes("republic")) {
    speak('a republic is a form of government in which the country is considered a "public matter," and officials are accountable to the public.');
  } else if (message.includes("totalitarianism")) {
    speak('totalitarianism is a political system where the state holds total authority over society and seeks to control all aspects of public and private life.');
  } else if (message.includes("cold war")) {
    speak('the cold war was a period of geopolitical tension between the soviet union and the united states from the end of world war ii until the early 1990s.');
  } else if (message.includes("european union")) {
    speak('the european union (eu) is a political and economic union of 27 member states located primarily in europe.');
  } else if (message.includes("nato")) {
    speak('the north atlantic treaty organization (nato) is a military alliance established in 1949 for mutual defense against aggression.');
  } else if (message.includes("g7")) {
    speak('the group of seven (g7) is an intergovernmental organization consisting of canada, france, germany, italy, japan, the united kingdom, and the united states.');
  } else if (message.includes("g20")) {
    speak('the group of twenty (g20) is an international forum for governments and central bank governors from 19 countries and the eu.');
  } else if (message.includes("brexit")) {
    speak('brexit refers to the united kingdom\'s decision to leave the european union, which was finalized on january 31, 2020.');
  } else if (message.includes("universal declaration of human rights")) {
    speak('the universal declaration of human rights is a document adopted by the united nations general assembly in 1948, outlining fundamental human rights.');
  } else if (message.includes("sovereignty")) {
    speak('sovereignty is the authority of a state to govern itself or another state, free from external interference.');
  } else if (message.includes("geopolitics")) {
    speak('geopolitics is the study of the effects of geography on international politics and international relations.');
  } else if (message.includes("international law")) {
    speak('international law consists of rules and principles that govern the relations between nations and other international actors.');
  } else if (message.includes("civil rights")) {
    speak('civil rights are the rights of citizens to political and social freedom and equality.');
  } else if (message.includes("political parties")) {
    speak('political parties are organized groups of people who share similar political beliefs and work together to influence government policy.');
  } else if (message.includes("elections")) {
    speak('elections are a formal decision-making process by which a population chooses an individual to hold public office.');
  } else if (message.includes("political spectrum")) {
    speak('the political spectrum is a system for classifying different political positions on a continuum, typically ranging from left to right.');
  } else if (message.includes("autocracy")) {
    speak('autocracy is a system of government in which one person possesses unlimited power.');
  } else if (message.includes("fascism")) {
    speak('fascism is a far-right political ideology characterized by dictatorial power, forcible suppression of opposition, and strong regimentation of society.');
  } else if (message.includes("communism")) {
    speak('communism is a political and economic ideology advocating for a classless society in which all property is publicly owned.');
  } else if (message.includes("socialism")) {
    speak('socialism is a political and economic theory advocating for social ownership and democratic control of the means of production.');
  } else if (message.includes("the united states constitution")) {
    speak('the united states constitution is the supreme law of the united states, establishing the framework for government and fundamental rights.');
  } else if (message.includes("the bill of rights")) {
    speak('the bill of rights is the first ten amendments to the united states constitution, guaranteeing individual freedoms and rights.');
  } else if (message.includes("the supreme court")) {
    speak('the supreme court is the highest court in the united states, responsible for interpreting the constitution and federal law.');
  } else if (message.includes("political corruption")) {
    speak('political corruption is the use of powers by government officials for illegitimate private gain.');
  } else if (message.includes("lobbying")) {
    speak('lobbying is the act of attempting to influence the decisions of government officials, typically legislators or members of regulatory agencies.');
  } else if (message.includes("campaign finance")) {
    speak('campaign finance refers to the funds raised and spent to influence elections and political outcomes.');
  } else if (message.includes("voter suppression")) {
    speak('voter suppression refers to strategies used to influence the outcome of an election by discouraging or preventing specific groups of people from voting.');
  } else if (message.includes("foreign policy")) {
    speak('foreign policy is a government strategy in dealing with other nations, including diplomacy and military action.');
  } else if (message.includes("diplomacy")) {
    speak('diplomacy is the practice of conducting negotiations between representatives of states or organizations.');
  } else if (message.includes("human rights")) {
    speak('human rights are basic rights and freedoms that belong to all people, regardless of nationality, sex, ethnicity, or religion.');
  } else if (message.includes("sanctions")) {
    speak('sanctions are penalties or restrictive measures imposed by countries against others to influence behavior or policies.');
  } else if (message.includes("military intervention")) {
    speak('military intervention is the use of military force by a country to influence the internal affairs of another country.');
  } else if (message.includes("peacekeeping missions")) {
    speak('peacekeeping missions are deployed by the united nations to help maintain peace and security in conflict areas.');
  } else if (message.includes("the cold war")) {
    speak('the cold war was a period of political tension and military rivalry between the united states and the soviet union from 1947 to 1991.');
  } else if (message.includes("the arab spring")) {
    speak('the arab spring was a series of anti-government protests and uprisings in the arab world that began in 2010.');
  } else if (message.includes("the korean war")) {
    speak('the korean war was a conflict between north korea and south korea from 1950 to 1953, involving multiple countries including the united states and china.');
  } else if (message.includes("the vietnam war")) {
    speak('the vietnam war was a conflict in vietnam, laos, and cambodia from 1955 to 1975, primarily involving the united states and north vietnam.');
  } else if (message.includes("the iraq war")) {
    speak('the iraq war was a conflict that began in 2003 with the invasion of iraq by a coalition led by the united states.');
  } else if (message.includes("the syrian civil war")) {
    speak('the syrian civil war began in 2011 as a result of anti-government protests and has resulted in a complex humanitarian crisis.');
  } else if (message.includes("the european union")) {
    speak('the european union (eu) is a political and economic union of 27 european countries that have chosen to cooperate closely.');
  } else if (message.includes("the united nations security council")) {
    speak('the un security council is responsible for maintaining international peace and security, consisting of 15 member states.');
  } else if (message.includes("the world health organization")) {
    speak('the world health organization (who) is a specialized agency of the united nations responsible for international public health.');
  } else if (message.includes("the world trade organization")) {
    speak('the world trade organization (wto) is an intergovernmental organization that regulates international trade.');
  } else if (message.includes("the international monetary fund")) {
    speak('the international monetary fund (imf) is an organization of 190 countries that works to promote global monetary cooperation and financial stability.');
  } else if (message.includes("the world bank")) {
    speak('the world bank is an international financial institution that provides loans and grants to the governments of poorer countries for development projects.');
  } else if (message.includes("treaty of versailles")) {
    speak('the treaty of versailles was the peace treaty that ended world war i, imposing heavy reparations on germany.');
  } else if (message.includes("nuclear proliferation")) {
    speak('nuclear proliferation refers to the spread of nuclear weapons and technology to nations not recognized as nuclear-weapon states.');
  } else if (message.includes("the cold war")) {
    speak('the cold war was marked by the threat of nuclear war, proxy wars, and the division of the world into east and west.');
  } else if (message.includes("the five permanent members of the un security council")) {
    speak('the five permanent members of the un security council are the united states, the united kingdom, france, russia, and china.');
  } else if (message.includes("political ideologies")) {
    speak('political ideologies are sets of beliefs about politics and government, including liberalism, conservatism, socialism, and nationalism.');
  } else if (message.includes("the constitution of india")) {
    speak('the constitution of india, adopted in 1950, is the supreme law of india, outlining the framework for')}

      
// Famous persons 

else if (message.includes("jack ma")) {
  speak('jack ma is a chinese entrepreneur and the co-founder of alibaba group, a multinational conglomerate specializing in e-commerce.');
} else if (message.includes("li keqiang")) {
  speak('li keqiang served as the premier of the state council of china from 2013 to 2023, known for his role in economic reforms.');
} else if (message.includes("narendra modi")) {
  speak('narendra modi is the prime minister of india, known for his economic policies and initiatives such as "make in india."');
} else if (message.includes("aung san suu kyi")) {
  speak('aung san suu kyi is a burmese politician and nobel laureate who served as the state counsellor of myanmar.');
} else if (message.includes("malala yousafzai")) {
  speak('malala yousafzai is a pakistani activist for female education and the youngest-ever nobel prize laureate.');
} else if (message.includes("bts")) {
  speak('bts is a south korean boy band that has gained global fame for their music and impactful messages.');
} else if (message.includes("yang jiechi")) {
  speak('yang jiechi is a chinese politician who has served as the director of the office of the foreign affairs commission.');
} else if (message.includes("moon jae-in")) {
  speak('moon jae-in is the president of south korea, known for his efforts to improve inter-korean relations.');
} else if (message.includes("shinzo abe")) {
  speak('shinzo abe was the prime minister of japan, known for his economic policies and efforts to strengthen japan\'s military.');
} else if (message.includes("pakistan tehreek-e-insaf")) {
  speak('imran khan is the founder and chairman of pakistan tehreek-e-insaf, a political party in pakistan.');
} else if (message.includes("sundar pichai")) {
  speak('sundar pichai is the ceo of alphabet inc. and google, originally from india, known for his leadership in technology.');
} else if (message.includes("zhang junning")) {
  speak('zhang junning is a prominent chinese scientist known for his contributions to the field of renewable energy.');
} else if (message.includes("vijay shekhar sharma")) {
  speak('vijay shekhar sharma is the founder of paytm, a leading digital payment platform in india.');
} else if (message.includes("park geun-hye")) {
  speak('park geun-hye was the first female president of south korea, serving from 2013 until her impeachment in 2017.');
} else if (message.includes("dilma rousseff")) {
  speak('dilma rousseff was the first female president of brazil, serving from 2011 to 2016 and known for her economic policies.');
} else if (message.includes("huawei")) {
  speak('ren zhengfei is the founder of huawei technologies, a leading global provider of information and communications technology.');
} else if (message.includes("haji talib hussain")) {
  speak('haji talib hussain is a well-known philanthropist and businessman in pakistan.');
} else if (message.includes("taoiseach")) {
  speak('micheál martin is the taoiseach (prime minister) of ireland, known for his role in leading the country through economic challenges.');
} else if (message.includes("tariq jameel")) {
  speak('tariq jameel is a renowned islamic scholar and preacher from pakistan.');
} else if (message.includes("prabhas")) {
  speak('prabhas is a popular indian film actor known for his roles in blockbuster movies like "baahubali."');
} else if (message.includes("deepika padukone")) {
  speak('deepika padukone is a bollywood actress and producer, known for her impactful roles and advocacy for mental health.');
} else if (message.includes("salman khan")) {
  speak('salman khan is a prominent bollywood actor and television personality known for his philanthropic work.');
} else if (message.includes("shahrukh khan")) {
  speak('shahrukh khan is a globally recognized bollywood actor, often referred to as the "king of bollywood."');
} else if (message.includes("amitabh bachchan")) {
  speak('amitabh bachchan is an iconic indian film actor and producer, known for his contribution to indian cinema.');
} else if (message.includes("rajinikanth")) {
  speak('rajinikanth is a legendary indian film actor and cultural icon, particularly in tamil cinema.');
} else if (message.includes("katrina kaif")) {
  speak('katrina kaif is a popular bollywood actress known for her roles in numerous successful films.');
} else if (message.includes("baba ramdev")) {
  speak('baba ramdev is an indian yoga guru known for promoting yoga and ayurveda globally.');
} else if (message.includes("tashi danzong")) {
  speak('tashi danzong is a prominent tibetan activist advocating for the rights of tibetans.');
} else if (message.includes("zhao lijian")) {
  speak('zhao lijian is a chinese diplomat known for his role as the spokesperson for the ministry of foreign affairs.');
} else if (message.includes("khaleda zia")) {
  speak('khaleda zia is a prominent bangladeshi politician and former prime minister of bangladesh.');
} else if (message.includes("sheikh hasina")) {
  speak('sheikh hasina is the prime minister of bangladesh, serving since 2009 and known for her leadership in economic growth.');
} else if (message.includes("diljit dosanjh")) {
  speak('diljit dosanjh is a popular punjabi singer and actor known for his work in both punjabi and bollywood films.');
} else if (message.includes("rajesh khanna")) {
  speak('rajesh khanna was a legendary bollywood actor, often referred to as the "first superstar" of indian cinema.');
} else if (message.includes("nawaz sharif")) {
  speak('nawaz sharif is a pakistani politician and former prime minister known for his business background and political influence.');
} else if (message.includes("sachin tendulkar")) {
  speak('sachin tendulkar is a former indian cricketer, widely regarded as one of the greatest batsmen in the history of cricket.');
} else if (message.includes("imran khan")) {
  speak('imran khan is the former prime minister of pakistan and a former cricket star, known for his philanthropic work.');
} else if (message.includes("anushka sharma")) {
  speak('anushka sharma is a bollywood actress and producer known for her diverse film roles and production company.');
} else if (message.includes("hrithik roshan")) {
  speak('hrithik roshan is an indian actor known for his dancing skills and roles in popular bollywood films.');
} else if (message.includes("shraddha kapoor")) {
  speak('shraddha kapoor is an indian actress and singer known for her work in bollywood films and her musical talent.');
} else if (message.includes("kareena kapoor")) {
  speak('kareena kapoor is a prominent bollywood actress known for her versatile roles and contributions to indian cinema.');
} else if (message.includes("alok sharma")) {
  speak('alok sharma is a british politician of indian descent, known for his work in environmental policy and climate change.');
} else if (message.includes("saina nehwal")) {
  speak('saina nehwal is an indian badminton player who has achieved international success and recognition.');
} else if (message.includes("dinesh karthik")) {
  speak('dinesh karthik is an indian cricketer known for his wicketkeeping and batting skills in limited-overs formats.');
} else if (message.includes("neha dhupia")) {
  speak('neha dhupia is an indian actress and beauty queen known for her roles in bollywood films and television.');
} else if (message.includes("shilpa shetty")) {
  speak('shilpa shetty is an indian actress, producer, and entrepreneur known for her fitness advocacy and work in films.');
} else if (message.includes("akshay kumar")) {
  speak('akshay kumar is a bollywood actor known for his versatile roles and contributions to the film industry.');
} else if (message.includes("arijit singh")) {
  speak('arijit singh is a popular indian playback singer known for his soulful voice and hit songs in bollywood films.');
} else if (message.includes("lata mangeshkar")) {
  speak('lata mangeshkar was an iconic indian playback singer, often referred to as the "nighingale of india."');
} else if (message.includes("mohammad bin salman")) {
  speak('mohammad bin salman is the crown prince of saudi arabia, known for his ambitious vision for the country’s future.');
} else if (message.includes("masayoshi son")) {
  speak('masayoshi son is a japanese billionaire and founder of softbank group, known for his investments in technology.');
} 
else if (message.includes("elon musk")) {
  speak('elon musk is a billionaire entrepreneur known for founding spacex, tesla, and co-founding paypal.');
} else if (message.includes("barack obama")) {
  speak('barack obama served as the 44th president of the united states from 2009 to 2017 and was the first african-american president.');
} else if (message.includes("oprah winfrey")) {
  speak('oprah winfrey is a media mogul, philanthropist, and the host of the influential talk show "the oprah winfrey show."');
} else if (message.includes("jeff bezos")) {
  speak('jeff bezos is the founder of amazon and was the richest person in the world for several years.');
} else if (message.includes("angela merkel")) {
  speak('angela merkel served as the chancellor of germany from 2005 to 2021, known for her pragmatic leadership in europe.');
} else if (message.includes("vladimir putin")) {
  speak('vladimir putin has been the president of russia since 1999, known for his authoritarian leadership style.');
} else if (message.includes("donald trump")) {
  speak('donald trump served as the 45th president of the united states from 2017 to 2021, known for his controversial policies.');
} else if (message.includes("greta thunberg")) {
  speak('greta thunberg is a swedish environmental activist known for her work on climate change and inspiring youth movements.');
} else if (message.includes("malala yousafzai")) {
  speak('malala yousafzai is a pakistani activist for female education and the youngest-ever nobel prize laureate.');
} else if (message.includes("bill gates")) {
  speak('bill gates is the co-founder of microsoft and a prominent philanthropist through the bill and melinda gates foundation.');
} else if (message.includes("serena williams")) {
  speak('serena williams is considered one of the greatest tennis players of all time, winning 23 grand slam singles titles.');
} else if (message.includes("beyoncé")) {
  speak('beyoncé is a world-renowned singer, songwriter, and actress known for her powerful vocals and performances.');
} else if (message.includes("cristiano ronaldo")) {
  speak('cristiano ronaldo is a professional soccer player from portugal, widely regarded as one of the greatest footballers of all time.');
} else if (message.includes("lionel messi")) {
  speak('lionel messi is an argentinian soccer player who has won multiple awards, including seven ballon d\'or titles.');
} else if (message.includes("taylor swift")) {
  speak('taylor swift is an american singer-songwriter known for her narrative songwriting and multiple grammy awards.');
} else if (message.includes("rihanna")) {
  speak('rihanna is a multi-talented singer, actress, and businesswoman known for her influence in music and fashion.');
} else if (message.includes("kim kardashian")) {
  speak('kim kardashian is a media personality and entrepreneur known for her reality show and beauty products.');
} else if (message.includes("andrew tate")) {
  speak('andrew tate is a social media influencer and former kickboxer known for his controversial opinions.');
} else if (message.includes("jack ma")) {
  speak('jack ma is the co-founder of alibaba group, a multinational conglomerate specializing in e-commerce.');
} else if (message.includes("ellen degeneres")) {
  speak('ellen degeneres is a comedian and talk show host known for her daytime television show "the ellen degeneres show."');
} else if (message.includes("lebron james")) {
  speak('lebron james is a professional basketball player often considered one of the greatest in nba history.');
} else if (message.includes("emma watson")) {
  speak('emma watson is an actress and activist known for her role as hermione granger in the harry potter series and her work in gender equality.');
} else if (message.includes("dwayne johnson")) {
  speak('dwayne "the rock" johnson is an actor and former professional wrestler known for his roles in action films.');
} else if (message.includes("shakira")) {
  speak('shakira is a colombian singer and dancer known for her distinctive voice and philanthropic work.');
} else if (message.includes("j.k. rowling")) {
  speak('j.k. rowling is a british author best known for writing the harry potter series, which has become a global phenomenon.');
} else if (message.includes("malcolm gladwell")) {
  speak('malcolm gladwell is a journalist and author known for his books on social psychology and sociology.');
} else if (message.includes("steve jobs")) {
  speak('steve jobs was the co-founder of apple inc. and played a key role in the development of personal computers and smartphones.');
} else if (message.includes("mark zuckerberg")) {
  speak('mark zuckerberg is the co-founder and ceo of facebook, now known as meta platforms, inc.');
} else if (message.includes("sundar pichai")) {
  speak('sundar pichai is the ceo of alphabet inc. and google, known for his leadership in the tech industry.');
} else if (message.includes("tim cook")) {
  speak('tim cook is the ceo of apple inc., succeeding steve jobs and continuing the company\'s innovative legacy.');
} else if (message.includes("justin bieber")) {
  speak('justin bieber is a canadian pop singer who gained fame as a teenager and has a massive global fanbase.');
} else if (message.includes("gordon ramsey")) {
  speak('gordon ramsey is a chef, television personality, and restaurateur known for his fiery temper and culinary skills.');
} else if (message.includes("kylie jenner")) {
  speak('kylie jenner is a reality tv star and entrepreneur known for her cosmetics brand and social media influence.');
} else if (message.includes("david beckham")) {
  speak('david beckham is a former professional soccer player and global ambassador for several charities.');
} else if (message.includes("malcolm x")) {
  speak('malcolm x was a prominent civil rights activist who advocated for the rights of african americans in the 1960s.');
} else if (message.includes("greta garbo")) {
  speak('greta garbo was a famous swedish-american actress known for her performances in classic films during the silent and early sound eras.');
} else if (message.includes("naomi osaka")) {
  speak('naomi osaka is a professional tennis player known for her activism and being a four-time grand slam champion.');
} else if (message.includes("brittany spears")) {
  speak('brittany spears is a pop singer and cultural icon known for her influence on the music industry and her legal battles.');
} else if (message.includes("james cameron")) {
  speak('james cameron is a canadian filmmaker known for directing blockbuster films such as "titanic" and "avatar."');
} else if (message.includes("pablo picasso")) {
  speak('pablo picasso was a spanish painter and sculptor, one of the most influential artists of the 20th century.');
} else if (message.includes("angelina jolie")) {
  speak('angelina jolie is an actress and humanitarian known for her films and work with refugees.');
} else if (message.includes("roger federer")) {
  speak('roger federer is a swiss professional tennis player, widely regarded as one of the greatest players of all time.');
} else if (message.includes("brad pitt")) {
  speak('brad pitt is an american actor and film producer known for his roles in numerous successful films.');
} else if (message.includes("ariana grande")) {
  speak('ariana grande is a pop singer and actress known for her powerful vocals and hit songs.');
} else if (message.includes("hillary clinton")) {
  speak('hillary clinton is a politician, diplomat, and former first lady of the united states, known for her presidential campaign in 2016.');
} else if (message.includes("condoleezza rice")) {
  speak('condoleezza rice served as the 66th united states secretary of state and is a prominent political scientist.');
} else if (message.includes("kamala harris")) {
  speak('kamala harris is the first female vice president of the united states and the first african-american and asian-american vice president.');
} else if (message.includes("jacinda ardern")) {
  speak('jacinda ardern is the prime minister of new zealand, known for her empathetic leadership and progressive policies.');
} else if (message.includes("emmanuel macron")) {
  speak('emmanuel macron is the president of france, known for his centrist policies and pro-european stance.');
} else if (message.includes("boris johnson")) {
  speak('boris johnson is a british politician who served as the prime minister of the united kingdom from 2019 to 2022.');
} else if (message.includes("xi jinping")) {
  speak('xi jinping is the general secretary of the communist party of china and the president of the people\'s republic of china.');
} else if (message.includes("putin")) {
  speak('vladimir putin has been the president of russia since 1999, known for his authoritative')}



// countries 
let lowerCaseMessage = message.toLowerCase();

if (lowerCaseMessage.includes("united states")) {
  speak('The U.S. is located in North America and is the third-largest country by total area and population. It is known for its diverse landscapes, including mountains, forests, and deserts.');
} else if (lowerCaseMessage.includes("canada")) {
  speak('Canada is in North America and is the second-largest country in the world by total area. It is known for its natural beauty, including national parks and wildlife, and has two official languages: English and French.');
} else if (lowerCaseMessage.includes("mexico")) {
  speak('Mexico is located in North America and is known for its rich cultural heritage, including ancient civilizations like the Aztecs and Mayans. It has beautiful beaches along the Caribbean Sea and Pacific Ocean.');
} else if (lowerCaseMessage.includes("brazil")) {
  speak('Brazil is in South America and is the largest country in the continent. It is home to the Amazon Rainforest, which has a significant percentage of the world’s biodiversity, and is famous for its vibrant culture, including Carnival celebrations.');
} else if (lowerCaseMessage.includes("argentina")) {
  speak('Argentina is located in South America and is known for its diverse geography, from the Andes mountains to the Pampas grasslands. It is famous for tango music and dance, as well as delicious beef.');
} else if (lowerCaseMessage.includes("united kingdom")) {
  speak('The United Kingdom is in Europe and comprises England, Scotland, Wales, and Northern Ireland. It is known for its rich history, iconic landmarks like Big Ben, and contributions to literature and science.');
} else if (lowerCaseMessage.includes("france")) {
  speak('France is located in Europe and is known for its art, fashion, gastronomy, and culture. It is home to famous landmarks such as the Eiffel Tower and the Louvre Museum, and the French Riviera is famous for its stunning coastline.');
} else if (lowerCaseMessage.includes("germany")) {
  speak('Germany is in Europe and is known for its engineering, automobiles, and beer culture. It features a rich history, including significant contributions to philosophy and music.');
} else if (lowerCaseMessage.includes("italy")) {
  speak('Italy is located in Europe and is famous for its historical sites, delicious cuisine, and contributions to art and architecture. It is home to the Vatican City, the smallest independent state in the world.');
} else if (lowerCaseMessage.includes("japan")) {
  speak('Japan is in Asia and is an archipelago of over 6,800 islands known for its technology and cultural traditions. It is famous for cherry blossoms, sushi, and historic temples.');
} else if (lowerCaseMessage.includes("china")) {
  speak('China is located in Asia and is the most populous country in the world. It has one of the world’s oldest civilizations, with historical landmarks like the Great Wall of China.');
} else if (lowerCaseMessage.includes("india")) {
  speak('India is in Asia and is the seventh-largest country by land area and the second-most populous. It is known for its diverse cultures, languages, and cuisine.');
} else if (lowerCaseMessage.includes("australia")) {
  speak('Australia is located in Oceania and is both a country and a continent. It is known for its unique wildlife, the Great Barrier Reef, and vibrant cities like Sydney and Melbourne.');
} else if (lowerCaseMessage.includes("south africa")) {
  speak('South Africa is in Africa and is known for its diverse cultures, languages, and landscapes. It is famous for its national parks, including Kruger National Park, and the historic city of Cape Town.');
} else if (lowerCaseMessage.includes("russia")) {
  speak('Russia is located in both Europe and Asia and is the largest country in the world by land area. It has a rich history, with many iconic landmarks such as the Kremlin and Red Square in Moscow.');
} else if (lowerCaseMessage.includes("egypt")) {
  speak('Egypt is in North Africa and is known for its ancient civilization and historical monuments, including the pyramids and the Sphinx. The Nile River, the longest river in the world, flows through Egypt.');
} else if (lowerCaseMessage.includes("saudi arabia")) {
  speak('Saudi Arabia is located in the Middle East and is known for its vast deserts and as the birthplace of Islam. It is home to the holy cities of Mecca and Medina.');
} else if (lowerCaseMessage.includes("indonesia")) {
  speak('Indonesia is located in Southeast Asia and is the largest archipelago in the world, consisting of over 17,000 islands. It is known for its diverse cultures, languages, and natural beauty, including Bali.');
} else if (lowerCaseMessage.includes("turkey")) {
  speak('Turkey is a transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a smaller portion on the Balkan Peninsula in Southeast Europe. It is known for its rich history and cultural heritage.');
} else if (lowerCaseMessage.includes("afghanistan")) {
  speak('Afghanistan is located in South Asia and Central Asia. It is known for its mountainous terrain and has a rich history influenced by various cultures.');
} else if (lowerCaseMessage.includes("albania")) {
  speak('Albania is in Southeast Europe on the Balkan Peninsula. It is known for its mountainous landscapes and beautiful coastline along the Adriatic and Ionian Seas.');
} else if (lowerCaseMessage.includes("algeria")) {
  speak('Algeria is located in North Africa and is the largest country in Africa. It is known for its vast desert landscapes, including a large portion of the Sahara Desert.');
} else if (lowerCaseMessage.includes("andorra")) {
  speak('Andorra is a small landlocked country in the eastern Pyrenees mountains, bordered by France and Spain. It is known for its ski resorts and beautiful mountain scenery.');
} else if (lowerCaseMessage.includes("angola")) {
  speak('Angola is located in Southern Africa. It is rich in natural resources and has a growing economy, with significant oil and diamond exports.');
} else if (lowerCaseMessage.includes("antigua and barbuda")) {
  speak('Antigua and Barbuda is located in the Caribbean and is known for its stunning beaches and vibrant culture. It is a popular tourist destination.');
} else if (lowerCaseMessage.includes("armenia")) {
  speak('Armenia is located in the South Caucasus region of Eurasia. It is known for its rich history and is one of the earliest countries to adopt Christianity.');
} else if (lowerCaseMessage.includes("austria")) {
  speak('Austria is a landlocked country in Central Europe, known for its rich cultural heritage, beautiful Alpine scenery, and classical music history.');
}

else if (message.includes("azerbaijan")) {
  speak('azerbaijan is located at the crossroads of eastern europe and western asia. it is known for its rich history, diverse culture, and significant oil reserves.');
}

else if (message.includes("bahamas")) {
  speak('the bahamas is an archipelago located in the caribbean. it is known for its beautiful beaches, clear blue waters, and vibrant marine life.');
}

else if (message.includes("bahrain")) {
  speak('bahrain is an island nation in the persian gulf. it is known for its financial services, oil production, and rich cultural heritage.');
}

else if (message.includes("bangladesh")) {
  speak('bangladesh is located in south asia and is known for its rich cultural heritage, biodiversity, and being one of the most densely populated countries in the world.');
}

else if (message.includes("barbados")) {
  speak('barbados is an island country located in the caribbean. it is known for its beautiful beaches, vibrant culture, and historical significance in the sugar trade.');
}

else if (message.includes("belarus")) {
  speak('belarus is located in eastern europe and is known for its rich history, beautiful landscapes, and being one of the last european dictatorships.');
}

else if (message.includes("belgium")) {
  speak('belgium is in western europe and is known for its medieval towns, renaissance architecture, and as the headquarters of the european union and nato.');
}

else if (message.includes("belize")) {
  speak('belize is located on the eastern coast of central america. it is known for its barrier reef, mayan ruins, and diverse ecosystems.');
}

else if (message.includes("benin")) {
  speak('benin is located in west africa and is known for its rich history as the birthplace of the vodun religion and for its vibrant culture.');
}

else if (message.includes("bhutan")) {
  speak('bhutan is a landlocked country in south asia, known for its stunning natural beauty, commitment to preserving its culture, and the concept of gross national happiness.');
}

else if (message.includes("bolivia")) {
  speak('bolivia is located in south america and is known for its diverse geography, including the andes mountains, amazon rainforest, and rich indigenous culture.');
}

else if (message.includes("bosnia and herzegovina")) {
  speak('bosnia and herzegovina is located in southeast europe on the balkan peninsula. it is known for its diverse culture and historical significance from the ottoman empire.');
}

else if (message.includes("botswana")) {
  speak('botswana is located in southern africa and is known for its stable economy, diamond mining, and significant wildlife populations in national parks like the okavango delta.');
}

else if (message.includes("brazil")) {
  speak('brazil is in south america and is the largest country in the continent. it is home to the amazon rainforest and famous for its vibrant culture, including carnival celebrations.');
}

else if (message.includes("brunei")) {
  speak('brunei is a small, wealthy nation located on the island of borneo in southeast asia. it is known for its oil wealth and pristine rainforests.');
}

else if (message.includes("bulgaria")) {
  speak('bulgaria is located in southeast europe and is known for its rich history, beautiful landscapes, and cultural heritage, including ancient thracian sites.');
}

else if (message.includes("burkina faso")) {
  speak('burkina faso is located in west africa and is known for its cultural diversity and as one of the leading producers of cotton in africa.');
}

else if (message.includes("burundi")) {
  speak('burundi is a small landlocked country in east africa. it is known for its hilly terrain, coffee production, and vibrant culture.');
}

else if (message.includes("cabo verde")) {
  speak('cabo verde is an island nation located in the central atlantic ocean. it is known for its creole portuguese-african culture and beautiful beaches.');
}

else if (message.includes("cambodia")) {
  speak('cambodia is located in southeast asia and is known for its rich history, particularly the angkor wat temple complex and the khmer rouge regime.');
}

else if (message.includes("cameroon")) {
  speak('cameroon is located in central africa and is known for its diverse culture, languages, and geographical features ranging from beaches to mountains.');
}

else if (message.includes("canada")) {
  speak('canada is in north america and is the second-largest country in the world by total area. it is known for its natural beauty, including national parks and wildlife.');
}

else if (message.includes("central african republic")) {
  speak('the central african republic is located in central africa and is known for its biodiversity, including national parks that are home to various wildlife species.');
}

else if (message.includes("chad")) {
  speak('chad is located in north-central africa and is known for its diverse landscapes, including deserts, mountains, and lakes.');
}

else if (message.includes("chile")) {
  speak('chile is located in south america, stretching along the western edge of the continent. it is known for its long coastline, diverse climates, and beautiful landscapes.');
}

else if (message.includes("china")) {
  speak('china is located in east asia and is the most populous country in the world. it has one of the world’s oldest civilizations and significant historical landmarks.');
}

else if (message.includes("colombia")) {
  speak('colombia is located in south america and is known for its coffee, beautiful landscapes, and cultural diversity, including a rich history influenced by indigenous and spanish cultures.');
}

else if (message.includes("comoros")) {
  speak('comoros is an island nation located in the indian ocean, off the east coast of africa. it is known for its stunning beaches and volcanic landscapes.');
}

else if (message.includes("congo, democratic republic of the")) {
  speak('the democratic republic of the congo is located in central africa and is known for its rich natural resources, including minerals and biodiversity in the congo basin.');
}

else if (message.includes("congo, republic of the")) {
  speak('the republic of the congo is located in central africa and is known for its rainforests and wildlife, as well as its cultural heritage.');
}

else if (message.includes("costa rica")) {
  speak('costa rica is located in central america and is known for its biodiversity, eco-tourism, and commitment to conservation and sustainability.');
}

else if (message.includes("croatia")) {
  speak('croatia is located in southeast europe and is known for its beautiful coastline along the adriatic sea and rich cultural heritage, including historic cities like dubrovnik.');
}

else if (message.includes("cuba")) {
  speak('cuba is located in the caribbean and is known for its vibrant culture, classic cars, and historic significance in the cold war era.');
}

else if (message.includes("cyprus")) {
  speak('cyprus is an island nation in the eastern mediterranean. it is known for its historical sites and as a crossroads of civilizations.');
}

else if (message.includes("czech republic")) {
  speak('the czech republic is located in central europe and is known for its beautiful cities, particularly prague, and rich history.');
}

else if (message.includes("denmark")) {
  speak('denmark is located in northern europe and is known for its strong welfare state, high quality of life, and beautiful landscapes.');
}

else if (message.includes("djibouti")) {
  speak('djibouti is located in the horn of africa. it is known for its strategic location along the red sea and is a key port for shipping and military operations.');
}

else if (message.includes("dominica")) {
  speak('dominica is an island nation in the caribbean known for its natural hot springs, rainforests, and mountainous terrain.');
}

else if (message.includes("dominican republic")) {
  speak('the dominican republic is located on the island of hispaniola in the caribbean and is known for its beautiful beaches, golf courses, and vibrant culture.');
}

else if (message.includes("ecuador")) {
  speak('ecuador is located in south america and is known for its biodiversity, including the galápagos islands, and its rich indigenous culture.');
}

else if (message.includes("egypt")) {
  speak('egypt is located in north africa and is famous for its ancient civilization, including the pyramids of giza and the nile river, the longest river in the world.');
}

else if (message.includes("el salvador")) {
  speak('el salvador is located in central america and is known for its beautiful beaches, coffee production, and vibrant culture.');
}

else if (message.includes("equatorial guinea")) {
  speak('equatorial guinea is located on the west coast of central africa. it is known for its oil reserves and diverse wildlife.');
}


else if (message.includes("eritrea")) {
  speak('eritrea is located in the horn of africa and is known for its rich history, diverse cultures, and beautiful red sea coastline.');
}

else if (message.includes("estonia")) {
  speak('estonia is located in northern europe and is known for its advanced digital society, beautiful forests, and medieval architecture.');
}

else if (message.includes("eswatini")) {
  speak('eswatini, formerly known as swaziland, is a small landlocked country in southern africa, known for its rich culture and traditions.');
}

else if (message.includes("ethiopia")) {
  speak('ethiopia is located in east africa and is known for its ancient history, being one of the oldest nations in the world, and its diverse cultures.');
}

else if (message.includes("fiji")) {
  speak('fiji is an island nation located in the south pacific. it is known for its stunning coral reefs, warm climate, and friendly culture.');
}

else if (message.includes("finland")) {
  speak('finland is located in northern europe and is known for its beautiful lakes, forests, and high quality of life, including an excellent education system.');
}

else if (message.includes("france")) {
  speak('france is located in western europe and is known for its art, fashion, cuisine, and landmarks like the eiffel tower and the louvre museum.');
}

else if (message.includes("gabon")) {
  speak('gabon is located on the west coast of central africa. it is known for its rich biodiversity and national parks, including loango national park.');
}

else if (message.includes("gambia")) {
  speak('the gambia is a small country in west africa, known for its river, the gambia river, and its diverse wildlife and bird species.');
}

else if (message.includes("georgia")) {
  speak('georgia is located at the crossroads of eastern europe and western asia. it is known for its diverse landscapes, wine production, and rich history.');
}

else if (message.includes("germany")) {
  speak('germany is located in central europe and is known for its engineering, historical sites, and cultural contributions to art and philosophy.');
}

else if (message.includes("ghana")) {
  speak('ghana is located in west africa and is known for its rich history, including its role in the transatlantic slave trade and vibrant culture.');
}

else if (message.includes("greece")) {
  speak('greece is located in southeastern europe and is known for its ancient history, beautiful islands, and contributions to western civilization.');
}

else if (message.includes("grenada")) {
  speak('grenada is an island nation in the caribbean known for its nutmeg production and stunning beaches.');
}

else if (message.includes("guatemala")) {
  speak('guatemala is located in central america and is known for its rich mayan heritage, beautiful landscapes, and vibrant culture.');
}

else if (message.includes("guinea")) {
  speak('guinea is located in west africa and is known for its rich mineral resources, including bauxite and diamonds.');
}

else if (message.includes("guinea-bissau")) {
  speak('guinea-bissau is located in west africa and is known for its diverse wildlife and rich cultural heritage.');
}

else if (message.includes("guyana")) {
  speak('guyana is located on the northeastern coast of south america and is known for its dense rainforests, diverse ecosystems, and cultural diversity.');
}

else if (message.includes("haiti")) {
  speak('haiti is located on the island of hispaniola in the caribbean and is known for its vibrant culture, history, and significant contributions to art and music.');
}

else if (message.includes("honduras")) {
  speak('honduras is located in central america and is known for its mayan ruins, beautiful beaches, and biodiversity, including the mesoamerican barrier reef.');
}

else if (message.includes("hungary")) {
  speak('hungary is located in central europe and is known for its rich history, thermal baths, and stunning architecture, particularly in budapest.');
}

else if (message.includes("iceland")) {
  speak('iceland is an island nation in the north atlantic and is known for its stunning natural landscapes, including geysers, hot springs, and glaciers.');
}

else if (message.includes("india")) {
  speak('india is located in south asia and is the seventh-largest country by land area and the second-most populous. it is known for its diverse cultures, languages, and cuisine.');
}

else if (message.includes("indonesia")) {
  speak('indonesia is located in southeast asia and is known for its vast archipelago of over 17,000 islands, rich biodiversity, and cultural diversity.');
}

else if (message.includes("iran")) {
  speak('iran is located in western asia and is known for its rich history, cultural heritage, and significant contributions to art and science.');
}

else if (message.includes("iraq")) {
  speak('iraq is located in western asia and is known for its ancient civilizations, including mesopotamia, often referred to as the cradle of civilization.');
}

else if (message.includes("ireland")) {
  speak('ireland is an island nation in the north atlantic, known for its stunning landscapes, rich history, and vibrant culture, including traditional music.');
}

else if (message.includes("israel")) {
  speak('israel is located in the middle east and is known for its historical and religious significance, as well as its diverse culture and advanced technology sector.');
}

else if (message.includes("italy")) {
  speak('italy is located in southern europe and is famous for its historical sites, delicious cuisine, and contributions to art and architecture.');
}

else if (message.includes("jamaica")) {
  speak('jamaica is an island nation in the caribbean known for its reggae music, beautiful beaches, and rich cultural heritage.');
}

else if (message.includes("japan")) {
  speak('japan is located in east asia and is an archipelago of over 6,800 islands known for its technology and cultural traditions.');
}

else if (message.includes("jordan")) {
  speak('jordan is located in the middle east and is known for its ancient monuments, including petra, and its rich cultural heritage.');
}

else if (message.includes("kazakhstan")) {
  speak('kazakhstan is located in central asia and is the largest landlocked country in the world, known for its diverse landscapes and rich natural resources.');
}

else if (message.includes("kenya")) {
  speak('kenya is located in east africa and is known for its diverse wildlife, national parks, and vibrant cultures, including the maasai people.');
}

else if (message.includes("kiribati")) {
  speak('kiribati is an island nation in the central pacific ocean known for its unique geography and beautiful coral reefs.');
}

else if (message.includes("korea, north")) {
  speak('north korea is located in east asia and is known for its strict government control and military presence, along with its significant historical sites.');
}

else if (message.includes("korea, south")) {
  speak('south korea is located in east asia and is known for its advanced technology, pop culture, and rich history.');
}

else if (message.includes("kuwait")) {
  speak('kuwait is located in the middle east and is known for its oil reserves and modern architecture, including the kuwait towers.');
}

else if (message.includes("kyrgyzstan")) {
  speak('kyrgyzstan is located in central asia and is known for its mountainous terrain and nomadic culture.');
}

else if (message.includes("laos")) {
  speak('laos is a landlocked country in southeast asia and is known for its mountainous terrain, buddhist monasteries, and french colonial architecture.');
}

else if (message.includes("latvia")) {
  speak('latvia is located in northern europe and is known for its beautiful forests, rich culture, and medieval architecture.');
}

else if (message.includes("lebanon")) {
  speak('lebanon is located in the middle east and is known for its diverse culture, historic cities, and beautiful mediterranean coastline.');
}

else if (message.includes("lesotho")) {
  speak('lesotho is a landlocked country in southern africa, known for its mountainous terrain and rich cultural heritage, including traditional basotho crafts and music.');
}

else if (message.includes("liberia")) {
  speak('liberia is located on the west african coast and is known for its rich history, including its founding by freed american slaves, and diverse wildlife.');
}

else if (message.includes("libya")) {
  speak('libya is located in north africa and is known for its vast desert landscapes, ancient ruins, and significant oil reserves.');
}

else if (message.includes("liechtenstein")) {
  speak('liechtenstein is a small landlocked country in central europe, known for its mountainous terrain, medieval castles, and strong financial sector.');
}

else if (message.includes("lithuania")) {
  speak('lithuania is located in northern europe and is known for its rich history, beautiful landscapes, and being one of the first countries to declare independence from the soviet union.');
}

else if (message.includes("luxembourg")) {
  speak('luxembourg is a small landlocked country in western europe, known for its wealth, historic fortifications, and role as one of the founding members of the eu.');
}

else if (message.includes("madagascar")) {
  speak('madagascar is an island nation off the southeast coast of africa, known for its unique wildlife')
}

  // Opening Link

  else if (message.includes("youtube")){
    speak("Opening youtube")
    window.open("https://www.youtube.com/", "_blank")
  }

  else if (message.includes("play music")) {
    speak('I can’t play music directly yet, but I can open YouTube or a music site for you!')
    window.open('https://www.spotify.com', '_blank')
}

  else if (message.includes("facebook")){
    speak("Opening facebook")
    window.open("https://www.facebook.com/", "_blank")
  }

  else if (message.includes("instagram")){
    speak("Opening instagram")
    window.open("https://www.instagram.com/", "_blank")
  }

  else if (message.includes("google")){
    speak("Opening google")
    window.open("https://www.google.com/", "_blank")
  }
  else if (message.includes("gmail")){
    speak("Opening gmail")
    window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank")
  }
  else if (message.includes("whatapp")){
    speak("Opening whatapp")
    window.open("https://web.whatsapp.com/", "_blank")
  }
  else if (message.includes("calculator")){
    speak("Opening calculator")
    window.open("calculator://")
  }
  else if (message.includes("open twitter")) {
    speak('opening twitter for you!');
    window.open('https://www.twitter.com', '_blank');
}

else if (message.includes("open github")) {
    speak('sure, opening github for you!');
    window.open('https://www.github.com', '_blank');
}

else if (message.includes("open linkedin")) {
    speak('opening linkedin for you!');
    window.open('https://www.linkedin.com', '_blank');
}

else if (message.includes("open netflix")) {
    speak('opening netflix for you!');
    window.open('https://www.netflix.com', '_blank');
}

else if (message.includes("open reddit")) {
    speak('opening reddit for you!');
    window.open('https://www.reddit.com', '_blank');
}

else if (message.includes("open amazon")) {
    speak('opening amazon for you!');
    window.open('https://www.amazon.com', '_blank');
}

else if (message.includes("open ebay")) {
    speak('opening ebay for you!');
    window.open('https://www.ebay.com', '_blank');
}

else if (message.includes("open wikipedia")) {
    speak('opening wikipedia for you!');
    window.open('https://www.wikipedia.org', '_blank');
}

else if (message.includes("open pinterest")) {
    speak('opening pinterest for you!');
    window.open('https://www.pinterest.com', '_blank');
}

else if (message.includes("open zoom")) {
    speak('opening zoom for you!');
    window.open('https://www.zoom.us', '_blank');
}

else if (message.includes("open microsoft")) {
    speak('opening microsoft for you!');
    window.open('https://www.microsoft.com', '_blank');
}

else if (message.includes("open apple")) {
    speak('opening apple website for you!');
    window.open('https://www.apple.com', '_blank');
}

else if (message.includes("open google drive")) {
    speak('opening google drive for you!');
    window.open('https://drive.google.com', '_blank');
}

else if (message.includes("open google docs")) {
    speak('opening google docs for you!');
    window.open('https://docs.google.com', '_blank');
}

else if (message.includes("open google maps")) {
    speak('opening google maps for you!');
    window.open('https://maps.google.com', '_blank');
}

else if (message.includes("open whatsapp")) {
    speak('opening whatsapp web for you!');
    window.open('https://web.whatsapp.com', '_blank');
}

else if (message.includes("open telegram")) {
    speak('opening telegram web for you!');
    window.open('https://web.telegram.org', '_blank');
}

else if (message.includes("open discord")) {
    speak('opening discord for you!');
    window.open('https://discord.com', '_blank');
}

else if (message.includes("open trello")) {
    speak('opening trello for you!');
    window.open('https://trello.com', '_blank');
}

else if (message.includes("open dropbox")) {
    speak('opening dropbox for you!');
    window.open('https://www.dropbox.com', '_blank');
}

else if (message.includes("open notion")) {
    speak('opening notion for you!');
    window.open('https://www.notion.so', '_blank');
}

else if (message.includes("open slack")) {
    speak('opening slack for you!');
    window.open('https://slack.com', '_blank');
}

else if (message.includes("open skype")) {
    speak('opening skype for you!');
    window.open('https://web.skype.com', '_blank');
}

else if (message.includes("open hulu")) {
    speak('opening hulu for you!');
    window.open('https://www.hulu.com', '_blank');
}

else if (message.includes("open spotify")) {
    speak('opening spotify for you!');
    window.open('https://www.spotify.com', '_blank');
}

else if (message.includes("open soundcloud")) {
    speak('opening soundcloud for you!');
    window.open('https://www.soundcloud.com', '_blank');
}

else if (message.includes("open vimeo")) {
    speak('opening vimeo for you!');
    window.open('https://www.vimeo.com', '_blank');
}

else if (message.includes("open quora")) {
    speak('opening quora for you!');
    window.open('https://www.quora.com', '_blank');
}

else if (message.includes("open stack overflow")) {
    speak('opening stack overflow for you!');
    window.open('https://stackoverflow.com', '_blank');
}

else if (message.includes("open coursera")) {
    speak('opening coursera for you!');
    window.open('https://www.coursera.org', '_blank');
}

else if (message.includes("open udemy")) {
    speak('opening udemy for you!');
    window.open('https://www.udemy.com', '_blank');
}

else if (message.includes("open khan academy")) {
    speak('opening khan academy for you!');
    window.open('https://www.khanacademy.org', '_blank');
}

else if (message.includes("open medium")) {
    speak('opening medium for you!');
    window.open('https://medium.com', '_blank');
}

else if (message.includes("open yelp")) {
    speak('opening yelp for you!');
    window.open('https://www.yelp.com', '_blank');
}

else if (message.includes("open tripadvisor")) {
    speak('opening tripadvisor for you!');
    window.open('https://www.tripadvisor.com', '_blank');
}

else if (message.includes("open booking.com")) {
    speak('opening booking.com for you!');
    window.open('https://www.booking.com', '_blank');
}

else if (message.includes("open airbnb")) {
    speak('opening airbnb for you!');
    window.open('https://www.airbnb.com', '_blank');
}

else if (message.includes("open grammarly")) {
    speak('opening grammarly for you!');
    window.open('https://www.grammarly.com', '_blank');
}

else if (message.includes("open evernote")) {
    speak('opening evernote for you!');
    window.open('https://www.evernote.com', '_blank');
}

else if (message.includes("open canva")) {
    speak('opening canva for you!');
    window.open('https://www.canva.com', '_blank');
}

else if (message.includes("open figma")) {
    speak('opening figma for you!');
    window.open('https://www.figma.com', '_blank');
}

else if (message.includes("open twitch")) {
    speak('opening twitch for you!');
    window.open('https://www.twitch.tv', '_blank');
}

else if (message.includes("open espn")) {
    speak('opening espn for you!');
    window.open('https://www.espn.com', '_blank');
}

else if (message.includes("open bbc")) {
    speak('opening bbc for you!');
    window.open('https://www.bbc.com', '_blank');
}

else if (message.includes("open cnn")) {
    speak('opening cnn for you!');
    window.open('https://www.cnn.com', '_blank');
}

else if (message.includes("open tiktok")) {
    speak('opening tiktok for you!');
    window.open('https://www.tiktok.com', '_blank');
}

else if (message.includes("open shopify")) {
    speak('opening shopify for you!');
    window.open('https://www.shopify.com', '_blank');
}

else if (message.includes("open wix")) {
    speak('opening wix for you!');
    window.open('https://www.wix.com', '_blank');
}

else if (message.includes("open squarespace")) {
    speak('opening squarespace for you!');
    window.open('https://www.squarespace.com', '_blank');
}

else if (message.includes("open weebly")) {
    speak('opening weebly for you!');
    window.open('https://www.weebly.com', '_blank');
}

else if (message.includes("open kickstarter")) {
    speak('opening kickstarter for you!');
    window.open('https://www.kickstarter.com', '_blank');
}

else if (message.includes("open indiegogo")) {
    speak('opening indiegogo for you!');
    window.open('https://www.indiegogo.com', '_blank');
}

else if (message.includes("open etsy")) {
    speak('opening etsy for you!');
    window.open('https://www.etsy.com', '_blank');
}

else if (message.includes("open target")) {
    speak('opening target for you!');
    window.open('https://www.target.com', '_blank');
}

else if (message.includes("open walmart")) {
    speak('opening walmart for you!');
    window.open('https://www.walmart.com', '_blank');
}

else if (message.includes("open costco")) {
    speak('opening costco for you!');
    window.open('https://www.costco.com', '_blank');
}

else if (message.includes("open sam's club")) {
    speak('opening sam\'s club for you!');
    window.open('https://www.samsclub.com', '_blank');
}

else if (message.includes("open home depot")) {
    speak('opening home depot for you!');
    window.open('https://www.homedepot.com', '_blank');
}

else if (message.includes("open lowe's")) {
    speak('opening lowe\'s for you!');
    window.open('https://www.lowes.com', '_blank');
}

  // Laptop Applications
  else if (message.includes("open microsoft word")) {
    speak('opening microsoft word for you!');
    window.open('ms-word:', '_blank');
  }
  
  else if (message.includes("open microsoft excel")) {
    speak('opening microsoft excel for you!');
    window.open('ms-excel:', '_blank');
  }
  
  else if (message.includes("open microsoft powerpoint")) {
    speak('opening microsoft powerpoint for you!');
    window.open('ms-powerpoint:', '_blank');
  }
  
  else if (message.includes("open google chrome")) {
    speak('opening google chrome for you!');
    window.open('googlechrome://', '_blank');
  }
  
  else if (message.includes("open mozilla firefox")) {
    speak('opening mozilla firefox for you!');
    window.open('firefox://', '_blank');
  }
  
  else if (message.includes("open microsoft edge")) {
    speak('opening microsoft edge for you!');
    window.open('microsoft-edge://', '_blank');
  }
  
  else if (message.includes("open visual studio code")) {
    speak('opening visual studio code for you!');
    window.open('vscode://', '_blank');
  }
  
  else if (message.includes("open zoom")) {
    speak('opening zoom for you!');
    window.open('zoomus://', '_blank');
  }
  
  else if (message.includes("open slack")) {
    speak('opening slack for you!');
    window.open('slack://', '_blank');
  }
  
  else if (message.includes("open discord")) {
    speak('opening discord for you!');
    window.open('discord://', '_blank');
  }
  
  else if (message.includes("open adobe photoshop")) {
    speak('opening adobe photoshop for you!');
    window.open('photoshop://', '_blank');
  }
  
  else if (message.includes("open adobe illustrator")) {
    speak('opening adobe illustrator for you!');
    window.open('illustrator://', '_blank');
  }
  
  else if (message.includes("open skype")) {
    speak('opening skype for you!');
    window.open('skype://', '_blank');
  }
  
  else if (message.includes("open teamviewer")) {
    speak('opening teamviewer for you!');
    window.open('teamviewer://', '_blank');
  }
  
  else if (message.includes("open vlc media player")) {
    speak('opening vlc media player for you!');
    window.open('vlc://', '_blank');
  }
  
  else if (message.includes("open microsoft outlook")) {
    speak('opening microsoft outlook for you!');
    window.open('outlook://', '_blank');
  }
  
  else if (message.includes("open apple mail")) {
    speak('opening apple mail for you!');
    window.open('message://', '_blank');
  }
  
  else if (message.includes("open notepad")) {
    speak('opening notepad for you!');
    window.open('notepad://', '_blank');
  }
  
  else if (message.includes("open windows media player")) {
    speak('opening windows media player for you!');
    window.open('wmplayer://', '_blank');
  }
  
  else if (message.includes("open file explorer")) {
    speak('opening file explorer for you!');
    window.open('explorer://', '_blank');
  }
  
  else if (message.includes("open control panel")) {
    speak('opening control panel for you!');
    window.open('control panel://', '_blank');
  }
  
  else if (message.includes("open settings")) {
    speak('opening settings for you!');
    window.open('ms-settings://', '_blank');
  }
  
  else if (message.includes("open snipping tool")) {
    speak('opening snipping tool for you!');
    window.open('snippingtool://', '_blank');
  }
  
  else if (message.includes("open task manager")) {
    speak('opening task manager for you!');
    window.open('taskmgr://', '_blank');
  }
  

  else if (message.includes("time")){
    let time = new Date().toLocaleString(undefined, {hour:"numeric", minute:"numeric"})
    speak(time);
  }

  else {
    // Remove unwanted phrases from the message
    let cleanedMessage = message.replace(/shifra|shipra|chup raho/gi, "").trim();
    
    // Prepare the final text for speech
    let finalText = `This is what I found on Google regarding "${cleanedMessage}"`;
    
    // Use the speak function to vocalize the final text
    speak(finalText);
    
    // Open a Google search for the original message
    window.open(`https://www.google.com/search?q=${encodeURIComponent(message)}`);
}
    
}

