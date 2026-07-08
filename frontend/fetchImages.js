const fs = require('fs');
const https = require('https');

const filePath = './lib/data.ts';
let dataContent = fs.readFileSync(filePath, 'utf8');

const playersMatch = dataContent.match(/export const players: Player\[\] = (\[[\s\S]*?\])\n\nexport function/);
if (!playersMatch) {
  console.log('Could not find players array');
  process.exit(1);
}

let players;
try {
  // Hack to parse the players array
  players = eval(playersMatch[1]);
} catch(e) {
  console.error(e);
  process.exit(1);
}

async function getWikiImage(name) {
  return new Promise((resolve) => {
    // encode name
    const title = encodeURIComponent(name);
    const options = {
      hostname: 'en.wikipedia.org',
      path: `/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=500`,
      headers: { 'User-Agent': 'ScoutIQ/1.0 (contact@scoutiq.com)' }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pageId !== '-1' && pages[pageId].thumbnail) {
            resolve(pages[pageId].thumbnail.source);
          } else {
            resolve(null);
          }
        } catch(e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

(async () => {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    let photo = await getWikiImage(player.name);
    
    if (!photo && player.name === 'Lallianzuala Chhangte') photo = await getWikiImage('Lallianzuala_Chhangte');
    if (!photo && player.name === 'Sahal Abdul Samad') photo = await getWikiImage('Sahal_Abdul_Samad');
    if (!photo && player.name === 'Nandha Kumar Sekar') photo = await getWikiImage('Nandhakumar_Sekar');
    if (!photo && player.name === 'Gurpreet Singh Sandhu') photo = await getWikiImage('Gurpreet_Singh_Sandhu');
    
    if (photo) {
      console.log('Found photo for ' + player.name + ': ' + photo);
      player.photoUrl = photo;
    } else {
      console.log('NO PHOTO FOUND for ' + player.name);
      if (player.name === 'Hugo Boumous') player.photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Hugo_Boumous.jpg/500px-Hugo_Boumous.jpg';
      if (player.name === 'Akash Mishra') player.photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Akash_Mishra_in_2022.jpg/500px-Akash_Mishra_in_2022.jpg';
      if (player.name === 'Liston Colaco') player.photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Liston_Colaco.jpg/500px-Liston_Colaco.jpg';
      if (player.name === 'Dimitri Petratos') player.photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Dimitri_Petratos.jpg/500px-Dimitri_Petratos.jpg';
      if (player.name === 'Ashique Kuruniyan') player.photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ashique_Kuruniyan.jpg/500px-Ashique_Kuruniyan.jpg';
      if (player.name === 'Cy Goddard') player.photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Cy_Goddard.jpg/500px-Cy_Goddard.jpg';
      if (player.name === 'Jamie Maclaren') player.photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jamie_Maclaren_2018.jpg/500px-Jamie_Maclaren_2018.jpg';
      if (player.name === 'Rahim Ali') player.photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Rahim_Ali_in_2022.jpg/500px-Rahim_Ali_in_2022.jpg';
      if (player.name === 'Subhasish Bose') player.photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Subhasish_Bose_in_2022.jpg/500px-Subhasish_Bose_in_2022.jpg';
    }
  }

  let newArrayStr = JSON.stringify(players, null, 2);
  newArrayStr = newArrayStr.replace(/"([a-zA-Z0-9_]+)":/g, '$1:');
  
  dataContent = dataContent.replace(playersMatch[1], newArrayStr);
  fs.writeFileSync(filePath, dataContent);
  console.log('Done replacing images!');
})();
