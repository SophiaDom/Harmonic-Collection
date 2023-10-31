

* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: antiquewhite;
}
.my-element {
  background-image:url(images/background.jpg);
  opacity: 80%;
}
h1 {
  font-size: 20px;
  letter-spacing: 20px;
  color: antiquewhite;
  text-align: right;
}

a {
  display:hidden;
  color:rgb(89, 89, 39, 0.8);
  text-decoration: none;
}
.entrytop {
  background-color: rgb(89, 89, 39, 0.7);
  position:fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  height: 50px;
  z-index: 2;
}

.menu {
  background-color: rgba(250, 235, 215, 0.7);
  left: 40px;
  position: fixed;
  top: 16px;
  width: 10%;
  z-index: 2;
  max-height:20px;
  min-width: 88px;
}
.menu p {
  font-size: 15px;
  color: rgb(89, 89, 39, 0.8);
  font-weight: 400;
  text-align: center;
  line-height: 15px;
  margin: auto;
  background-color: rgba(250, 235, 215, 0.7);
  border-style:double;
  border-color: rgb(89, 89, 39);
  border-width: 5px;
  padding: 5px;
  letter-spacing: 0px;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.spotify-container {
display: flex;
justify-content: right;
align-items: right;
height: 100px;
opacity: 80%;
width: 100%;
autoplay: auto;

}
body {
  background-image: url(images/background.jpg);
  background-size: cover;
  background-repeat: repeat-y;
  background-attachment: fixed;
  background-position: center center;
}
.material-icons {
  position:fixed;
  top: 13px;
  color:antiquewhite;
  left: 10px;
}
summary {
  color:rgb(89, 89, 39);
}
body{
  margin:0 auto;
  padding:10px;
  font-family:sans-serif;
  background:none
  overflow:hidden;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,900&display=swap');

body {
  padding: 0;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  background: none
  height: 100vh;
  width: 100vw;
}

span {
  position: absolute;
  left: 50vw;
  top: 320px;
  transform: translate(-50%, -50%);
  display: block;
  color: rgb(89, 89, 39);
  font-size: 20vw;
  letter-spacing: 8px;
  cursor: pointer;
}

span::before {
  content: "NORTH WOODS";
  position: absolute;
  color: transparent;
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0,
    transparent 2px,
    antiquewhite 2px,
    antiquewhite 4px
  );
  -webkit-background-clip: text;
  top: 0px;
  left: 0;
  z-index: -1;
  transition: 1s;
}

span::after {
  content: "NORTH WOODS";
  position: absolute;
  color: transparent;
  background-image: repeating-linear-gradient(
    135deg,
    transparent 0,
    transparent 2px,
    antiquewhite 2px,
    antiquewhite 4px
  );
  -webkit-background-clip: text;
  top: 0px;
  left: 0px;
  transition: 1s;
}

span:hover:before {
  top: 10vh;
  left: 10vw;
}

span:hover:after {
  top: -10vh;
  left: -10vw;
} 

section {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
    "orange1 orange2 orange3"
    "paragraph1 paragraph1 paragraph1"
    "paths1 paths2 paths3"
    "paragraph2 paragraph2 paragraph2"
    "water1 water2 water3"
    "paragraph3 paragraph3 paragraph3";
  gap: 25px; 
}


section img {
  max-width: 100%;
  height: auto;
  transition: transform 0.3s;
}
section div:hover img{
  transform: scale(1.22);
}

div:nth-child(2) {
  grid-row: 1;
  grid-column:2/3;
}
div:nth-child(3) {
  grid-row: 1;
  grid-column: 3/4;
  align-self: end;
}
div:nth-child(4) {
  grid-column:2/4;
  background-color: rgba(250, 235, 215, 0.7);
  margin-left:150px;
  margin-right: 0px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 15px;
  text-align: center;
  font-size: 2.5vw;
  border: 5px double rgb(89, 89, 39);
}
div:nth-child(5) {
  align-self: end;
}
div:nth-child(8) {
  grid-column:1/3;
  background-color: rgba(250, 235, 215, 0.7);
  margin-left:0px;
  margin-right: 150px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 15px;
  text-align: center;
  font-size: 2.5vw;
  border: 5px double rgb(89, 89, 39);
}
div:nth-child(9) {
  grid-column: 1/2;
}
div:nth-child(11) {
  grid-column: 3/4;
  align-self: end;
}
div:nth-child(12) {
  grid-column:2/4;
  background-color: rgba(250, 235, 215, 0.7);
  margin-left:150px;
  margin-right: 0px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
  text-align: center;
  font-size: 2.5vw;
  border: 5px double rgb(89, 89, 39);
}
