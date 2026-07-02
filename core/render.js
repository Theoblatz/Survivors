const bootLog = [
  { text: 'Connexion au serveur...', delay: 0 },
  { text: 'Serveur connecté', delay: 1000 }
];

let bootStartTime = null;
let bootDone = false;
const displayedLines = [];

export function render(gameState) {
  const container = document.getElementById('game-container');

  if (!bootStartTime) bootStartTime = Date.now();
  const elapsed = Date.now() - bootStartTime;

  if (!bootDone) {
    // Ajoute les lignes de log dont le délai est atteint
    bootLog.forEach((line, i) => {
      if (elapsed >= line.delay && !displayedLines[i]) {
        displayedLines[i] = line.text;
      }
    });

    container.innerHTML = displayedLines.filter(Boolean).join('<br>');

    // Fin du boot une fois toutes les lignes affichées + petit délai
    if (displayedLines.filter(Boolean).length === bootLog.length && elapsed > bootLog[bootLog.length - 1].delay + 500) {
      bootDone = true;
    }
    return;
  }

  // Mode horloge live
  const now = new Date();
  const time = now.toLocaleTimeString('fr-FR');
  container.innerHTML = displayedLines.filter(Boolean).join('<br>') + `<br><br>${time}`;
}
