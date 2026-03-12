export const displayFancyLogs = () => {
  console.log(
    "%c  ______   _____                 \n |___  /  |___ /   ___  _ __ ___  \n    / /     |_ \\  / _ \\| '_ ` _ \\ \n   / /_    ___) ||  __/| | | | | |\n  /____|  |____/  \\___||_| |_| |_|\n",
    "color: #8A2BE2;"
  );

  console.log(
    "%c Hope you like what you see :)",
    "color: #8A2BE2; padding: 6px;"
  );

  // Easter egg hint
  console.log(
    "%c 💡 Psst! There's a secret hiding in plain sight. Follow your heart, it might lead to something... interesting.",
    "color: #8A2BE2; font-style: italic; padding: 6px;"
  );
};
