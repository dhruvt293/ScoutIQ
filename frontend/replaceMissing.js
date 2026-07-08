const fs = require('fs');

const filePath = './lib/data.ts';
let dataContent = fs.readFileSync(filePath, 'utf8');

const playersMatch = dataContent.match(/export const players: Player\[\] = (\[[\s\S]*?\])\n\nexport function/);
let players = eval(playersMatch[1]);

// Replace 1: Manvir Singh -> Jeje Lalpekhlua
const idx1 = players.findIndex(p => p.name === 'Manvir Singh');
if (idx1 !== -1) {
  players[idx1].id = 'j-lalpekhlua';
  players[idx1].name = 'Jeje Lalpekhlua';
  players[idx1].photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jeje_Lalpekhlua_MLA.jpg/500px-Jeje_Lalpekhlua_MLA.jpg';
  players[idx1].initials = 'JL';
}

// Replace 2: Nandha Kumar Sekar -> Udanta Singh
const idx2 = players.findIndex(p => p.name === 'Nandha Kumar Sekar');
if (idx2 !== -1) {
  players[idx2].id = 'u-singh';
  players[idx2].name = 'Udanta Singh';
  players[idx2].photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Uddanta_Singh_2019.jpg/500px-Uddanta_Singh_2019.jpg';
  players[idx2].initials = 'US';
}

// Replace 3: Mourtada Fall -> Pritam Kotal
const idx3 = players.findIndex(p => p.name === 'Mourtada Fall');
if (idx3 !== -1) {
  players[idx3].id = 'p-kotal';
  players[idx3].name = 'Pritam Kotal';
  players[idx3].photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Pritam_Kotal_2019.jpg';
  players[idx3].initials = 'PK';
  players[idx3].nation = 'India';
}

// Replace 4: Nikhil Poojary -> Bhaichung Bhutia
const idx4 = players.findIndex(p => p.name === 'Nikhil Poojary');
if (idx4 !== -1) {
  players[idx4].id = 'b-bhutia';
  players[idx4].name = 'Bhaichung Bhutia';
  players[idx4].photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Bhaichung_Bhutia_at_the_NDTV_Marks_for_Sports_event_21.jpg/500px-Bhaichung_Bhutia_at_the_NDTV_Marks_for_Sports_event_21.jpg';
  players[idx4].initials = 'BB';
  players[idx4].summary = 'A legend of Indian football. Exceptional finisher and leader on the pitch.';
}

let newArrayStr = JSON.stringify(players, null, 2);
newArrayStr = newArrayStr.replace(/"([a-zA-Z0-9_]+)":/g, '$1:');
dataContent = dataContent.replace(playersMatch[1], newArrayStr);
fs.writeFileSync(filePath, dataContent);
console.log('Replaced the 4 missing players successfully.');
