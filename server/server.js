const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');
const path = require("path")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(serveStatic(path.join(__dirname, '..', '/dist')));
// Inserted this so that client-side routing works
app.use(history({
  verbose: true
}));
// Documentation for connect-history-api-fallback requires this again...
app.use(serveStatic(path.join(__dirname, '..', '/dist')));

app.get('/getEventInfo/:id', (req, res) => {
  let response = {
    eventInfo: {
      time: new Date(),
      position: "TUMO",
      id: 1,
      host: "Arthur Kasumyan",
      topic: "Get familiar with Vue.js",
      description: "Some node.js skills",
      img: "/card1.jpg",
      guests: 10,
      color: 'grey'
    }
  }
  console.log(response.eventInfo)
  res.status(200)
  res.json(response)
})

app.get('/getMainEvents', (req, res) => {
  console.log('reached endpoint')
  let response = {
    events: [
      {
        time: new Date(),
        position: "TUMO",
        id: 1,
        host: "Arthur Kasumyan",
        topic: "Get familiar with Vue.js",
        description: "Some node.js skills",
        img: "card1.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Shahumyan square",
        id: 2,
        host: "Nemra concert",
        topic: "Rock music",
        description: "Christmas mood",
        img: "card5.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Marriot hotel",
        id: 3,
        host: "Galactical Jedis",
        topic: "Angular.js",
        description: "Some node.js skills",
        img: "card3.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "V.Sargsyan stadium",
        id: 4,
        host: "Yerevan Derby",
        topic: "For first place",
        description: "particular match",
        img: "card6.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Opera and Ballet hall",
        id: 5,
        host: "Simphony",
        topic: "Classical music",
        description: "Philarmonic chor",
        img: "card7.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "TUMO",
        id: 6,
        host: "Arthin Kasumyan",
        topic: "Get familiar with Ruby",
        description: "Ruby on Rails",
        img: "card2.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Abovyan 34",
        id: 7,
        host: "CEO Adobe",
        topic: "Photoshop",
        description: "Illustrator",
        img: "card8.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Hayat hotel",
        id: 8,
        host: "Tim Cook",
        topic: "Swift programming language",
        description: "Swift for IOS",
        img: "card4.jpg",
        guests: 10,
        color: 'grey'
      }
    ]
  }
  res.status(200)
  res.json(response)
})

app.get('/getAllEvents', (req, res) => {
  console.log('reached endpoint')
  let response = {
    techEvents: [
      {
        time: new Date(),
        position: "TUMO",
        id: 1,
        host: "Arthur Kasumyan",
        topic: "Get familiar with Vue.js",
        description: "Some node.js skills",
        img: "card1.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Marriot hotel",
        id: 3,
        host: "Galactical Jedis",
        topic: "Angular.js",
        description: "Some node.js skills",
        img: "card3.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Abovyan 34",
        id: 7,
        host: "CEO Adobe",
        topic: "Photoshop",
        description: "Illustrator",
        img: "card8.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "TUMO",
        id: 6,
        host: "Arthin Kasumyan",
        topic: "Get familiar with Ruby",
        description: "Ruby on Rails",
        img: "card2.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Hayat hotel",
        id: 8,
        host: "Tim Cook",
        topic: "Swift programming language",
        description: "Swift for IOS",
        img: "card4.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "TUMO",
        id: 9,
        host: "Dylan Moore",
        topic: "Python programming language",
        description: "Python in machine learning",
        img: "card9.jpg",
        guests: 10,
        color: 'grey'
      }
    ],
    musicEvents: [
      {
        time: new Date(),
        position: "Shahumyan square",
        id: 2,
        host: "Nemra concert",
        topic: "Rock music",
        description: "Christmas mood",
        img: "card5.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Opera and Ballet hall",
        id: 5,
        host: "Simphony",
        topic: "Classical music",
        description: "Philarmonic chor",
        img: "card7.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Sport-concert hall ",
        id: 10,
        host: "Timati",
        topic: "RAP music",
        description: "All best RAP songs",
        img: "card10.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Sport-concert hall ",
        id: 11,
        host: "Tigran Smbatyan",
        topic: "Classical Jackson",
        description: "Best songs of Jackson",
        img: "card11.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Sport-concert hall ",
        id: 12,
        host: "Project LA",
        topic: "Rock music",
        description: "Gor Sujyan  and friends",
        img: "card12.jpg",
        guests: 10,
        color: 'grey'
      }
    ],
    sportEvents: [
      {
        time: new Date(),
        position: "V.Sargsyan stadium",
        id: 4,
        host: "Yerevan Derby",
        topic: "For first place",
        description: "particular match",
        img: "card6.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Ice hall named I.Rodnina",
        id: 13,
        host: "Yerevan municipilaty",
        topic: "Skate championship",
        description: "Pretty dancing",
        img: "card13.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Mika sport hall",
        id: 14,
        host: "Basketball A league",
        topic: "Urartu vs Aragats",
        description: "Hot fight",
        img: "card14.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Ararat sport complex",
        id: 15,
        host: "Volleyball A league",
        topic: "Yerevan vs Hrazdan",
        description: "Men's final match",
        img: "card15.jpg",
        guests: 10,
        color: 'grey'
      },
      {
        time: new Date(),
        position: "Incourt tennis club",
        id: 16,
        host: "Armenian tennis champ",
        topic: "Mkrtchyan vs Abelyan",
        description: "Men's final match",
        img: "card16.jpg",
        guests: 10,
        color: 'grey'
      }
    ]
  }
  res.status(200)
  res.json(response)
})

let port = process.env.PORT || 4000;

app.listen(port, function(){
  console.log('Node js at port', port);
});
