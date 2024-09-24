let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
let voice = document.querySelector('#voice-img');


function speak (text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-GB"
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

  else if (message.includes("do you love me")){
    speak('offCourse I love you')
  }
  else if (message.includes("how are you") || message.includes("how r u")){
    speak('I am fine how are you')
  }
  else if (message.includes("I need your help")){
    speak('Please tell me how can i help you')
  }

  // Opening Link

  else if (message.includes("youtube")){
    speak("Opening youtube")
    window.open("https://www.youtube.com/", "_blank")
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
  else if (message.includes("Whatapp")){
    speak("Opening whatapp")
    window.open("https://web.whatsapp.com/", "_blank")
  }
  else if (message.includes("calculator")){
    speak("Opening calculator")
    window.open("calculator://")
  }
  else if (message.includes("notepad")){
    speak("Opening NoatPad")
    window.open("Notepad://")
  }

  else if (message.includes("time")){
    let time = new Date().toLocaleString(undefined, {hour:"numeric", minute:"numeric"})
    speak(time);
  }

  else{
    let finalText = "This is what in found on Google regarding" + message.replace("shifra", "") || message.replace("shipra", "") || message.replace('chup raho', "") 

    speak(finalText)
    window.open(`https://www.google.com/search?q=${message.replace("shifra", "") || message.replace("shipra", "")}`)
  }
}

