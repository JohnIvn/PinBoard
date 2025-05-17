export const backgroundColors = [
  "#ffdddd",
  "#ddffdd",
  "#ddddff",
  "#ffffdd",
  "#ffddff",
  "#ddffff",
  "#ffe0c1",
  "#e1e1e1",
];

export const textColors = [
  "#000000",
  "#ffffff",
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ff00ff",
  "#00ffff",
  "#800080",
  "#ffa500",
  "#a52a2a",
  "#008000",
];

export const getRandomColor = (colors: string[]) => {
  return colors[Math.floor(Math.random() * colors.length)];
};
