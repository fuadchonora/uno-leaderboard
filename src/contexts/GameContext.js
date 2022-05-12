import React, { createContext, useContext, useEffect, useState } from 'react';

// Pages
import HomePage from '../pages/HomePage';
import PlayerCountPage from '../pages/PlayerCountPage';

const GameContext = createContext();

function useGame() {
	return useContext(GameContext);
}

const PAGES = {
	home: {
		id: 'home',
		component: HomePage,
		nextPage(input) {
			return PAGES.playerCount;
		},
	},
	playerCount: {
		id: 'playerCount',
		component: PlayerCountPage,
		nextPage(input) {
			return PAGES.home;
		},
	},
};

function GameContextProvider({ children }) {
	const [players, setPlayers] = useState([]);
	const [game, setGame] = useState({
		currentPage: PAGES['home'],
		playerCount: 0,
		round: 0,
		startTime: null,
		finishTime: null,
	});

	const nextPage = (input) => {
		const nextPage = game.currentPage.nextPage(input);
		setGame({ ...game, currentPage: nextPage });
	};

	const setPlayerCount = (playerCount) => {
		setGame({ ...game, playerCount });
	};

	const addPlayer = (name) => {
		const player = { name, score: 0, wins: 0 };
		setPlayers([...players, player]);
	};

	const removePlayer = (name) => {
		setPlayers(players.filter((player) => player.name !== name));
	};

	const startGame = () => {
		setGame({ ...game, round: 1, startTime: Date.now() });
	};

	const calculate = (newScores) => {
		//add scores to players
		const _players = players.map((player) => (player.score += newScores[player.name]));
		setPlayers(_players);

		//check for winner
		for (const player of _players) {
			if (player.score >= 500) return finishGame();
		}

		//else, next round
		setGame({ ...game, round: game.round + 1 });
	};

	const finishGame = () => {
		setGame({ ...game, finishTime: Date.now() });
	};

	const getLeaderboard = () => {
		return players.sort((a, b) => b.score - a.score);
	};

	useEffect(() => {
		console.log('current page', game.currentPage);
	}, [game.currentPage]);

	const value = {
		CurrentPageComponent: game.currentPage.component,
		nextPage,
		setPlayerCount,
		addPlayer,
		removePlayer,
		startGame,
		calculate,
		getLeaderboard,
	};
	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameContext;
export { useGame, GameContextProvider };
