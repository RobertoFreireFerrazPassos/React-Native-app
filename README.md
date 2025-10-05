# React-Native-app

# Game

Roguelike game where the challenges are mini-games.

All mini-games are based on memory, lucky and/or logical reasoning

Player:
- Has lifes

All mini-games:
- Based on attempts
- Everytime you try/attempt, you loose life
- Max amount of attempts

Changes in Minigames based on probability:
- Guess the Number. It can increase/decrease number to guess.
- Memory Match. It can swap cards.
- Memory sequency. it can swap sequence

Hints:
- Guess the Number. Say less/bigger than.
- Memory Match. Flip 1 random card.
- Memory sequency. Say next color in sequence

Note: Player will always be informed of what changed

Why is Rougelike?
- Each round, you play 3 mini games until next boss
- Boss will be only one of all minigames. hint is in the minigame you played int the same round
- After you beat the boss you can choose a card

Cards:
- Increase number of attempt per mini game
- Increase number of attempt for boss only
- Increase number of total attempt
- Recover life
- Extra life
- you gain a hint if you are about to die

Each round:
- Increase the probability for changes minigames

## Mini-games

- Guess the Number. Classic high/low guessing.
- Memory Match. Cards flip over.
- Memory sequency. Simon color game

## References: