// This script targets an everyday robotic vacuum cleaner by highlighting its pointless navigation loops and entrapment.
// The punch lands by contrasting robotic stubbornness with a dramatic, helpless finale under low furniture.

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const fs = require('node:fs');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// This comment highlights the annoying daily ritual of autonomous vacuums relentlessly ramming furniture legs and getting wedged.
const roastLine = "My Roomba spends twenty minutes aggressively headbutting the exact same table leg before committing suicide under the couch.";
fs.writeFileSync(outputDir + '/entry.txt', roastLine, 'utf8');
