import { Ball, GameObject, Player } from "./interface";
import { gameSize } from "./constants";

const empty = 0;
const player = 1;
const ball = 2;
const brick = 3;

const createElement = (col) => {
  const div = document.createElement("div");
  div.classList.add("board");
  div.style.display = "inline-block";
  div.style.marginLeft = "10px";
  div.style.height = "6px";
  div.style.width = "6px";
  div.style.backgroundColor =
    col === empty
      ? "white"
      : col === player
      ? "cornflowerblue"
      : col === ball
      ? "gray"
      : "silver";
  div.style.borderRadius = col === ball ? "100%" : "0%";

  return div;
};

export const paint = ([player, ball, bricks]: [Player, Ball, GameObject[]]) => {
  document.body.innerHTML = `Lives: ${player.lives}, Score: ${player.score}`;

  const game = Array(gameSize)
    .fill(0)
    .map((e) => Array(gameSize).fill(0));
  game[player.x][player.y] = player;
  game[ball.x][ball.y] = ball;
  bricks.forEach((b) => (game[b.x][b.y] = brick));

  game.forEach((row) => {
    const rowContainer = document.createElement("div");
    row.forEach((col) => rowContainer.appendChild(createElement(col)));
    document.body.appendChild(rowContainer);
  });
};
