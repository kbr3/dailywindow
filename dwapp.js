d=document.getElementById("dte");
now=moment().format('dddd MMMM Do YYYY');
d.innerText=now;


day0 = {
  morning: {
    text: 'Before you know it, a sense of God’s wholeness, everything coming together for good, will come and settle you down. It’s wonderful what happens when Christ displaces worry at the center of your life.',
    source: 'Philippians 4:7, The Message'
     },
  evening: {
    text: 'Love is God’s preservative. It surrounds our souls with a power greater than the power of the devil and the world around us. It keeps us balanced; it insulates us against the hostility that exists in our world. Love is the shelter of the Most High; it is the substance of the Place of Immunity.',
    source: 'Francis Frangipane'
  }
}

alldays = {
  20170729: day0
}

// getting the correct question for day of the week

questions = [
  "What would help you find rest and value in the LORD?",
  "What do you want to surrender today – and what do you want to ask for in exchange?",
  "What would help you be more aware of God’s presence today?",
  "What reminds you of all the reasons you have to be grateful?",
  "What is the next step of commitment and action for you to join what God is doing in the world?",
  "What nagging and persistent habits or patterns do you need to confess?",
  "What areas of need are difficult for you to admit?"
]
weekday=moment().format('d');
activeday=moment().format('YYYYMMDD');

q=document.getElementById("question");
quest=questions[weekday]
q.innerText=quest;

//



// evening text



// create a function called "setwindow"
var setwindow=function(timeofday) {
evening=document.getElementById(timeofday);
text=evening.getElementsByTagName("blockquote");
today=alldays[activeday];
text[0].innerHTML=today[timeofday].text + "<br>" + "<em>" +today[timeofday].source + "</em>" ;
  };

    setwindow("morning");
    setwindow("evening");


