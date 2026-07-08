const fs = require('fs');
const https = require('https');

const filePath = './lib/data.ts';
let dataContent = fs.readFileSync(filePath, 'utf8');

const playersMatch = dataContent.match(/export const players: Player\[\] = (\[[\s\S]*?\])\n\nexport function/);
let players = eval(playersMatch[1]);

async function searchWikiImage(name) {
  return new Promise((resolve) => {
    const titleStr = encodeURIComponent(name + ' football');
    const options = {
      hostname: 'en.wikipedia.org',
      path: `/w/api.php?action=query&generator=search&gsrsearch=${titleStr}&gsrlimit=1&prop=pageimages&format=json&pithumbsize=500`,
      headers: { 'User-Agent': 'ScoutIQ/1.0' }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          if (pages) {
            const pageId = Object.keys(pages)[0];
            if (pages[pageId] && pages[pageId].thumbnail) {
              resolve(pages[pageId].thumbnail.source);
              return;
            }
          }
          resolve(null);
        } catch(e) {
          resolve(null);
        }
      });
    });
  });
}

(async () => {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.photoUrl.includes('pravatar.cc')) {
       console.log('Searching fallback for ' + player.name);
       const photo = await searchWikiImage(player.name);
       if (photo) {
         console.log('Found! ' + photo);
         player.photoUrl = photo;
       } else {
         console.log('Still no photo for ' + player.name);
       }
    }
  }

  let newArrayStr = JSON.stringify(players, null, 2);
  newArrayStr = newArrayStr.replace(/"([a-zA-Z0-9_]+)":/g, '$1:');
  dataContent = dataContent.replace(playersMatch[1], newArrayStr);
  fs.writeFileSync(filePath, dataContent);
})();
