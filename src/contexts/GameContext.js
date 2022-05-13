import React, { createContext, useContext, useEffect, useState } from 'react';

// Pages
import HomePage from '../pages/HomePage';
import NewGamePage from '../pages/NewGamePage';
import AddPlayerPage from '../pages/AddPlayerPage';
import RoundStartPage from '../pages/RoundStartPage';
import RoundProgressPage from '../pages/RoundProgressPage';
import AddScoresPage from '../pages/AddScoresPage';
import RoundBoardPage from '../pages/RoundBoardPage';
import FinalBoardPage from '../pages/FinalBoardPage';

const GameContext = createContext();

function useGame() {
	return useContext(GameContext);
}

const PAGES = {
	home: {
		id: 'home',
		component: HomePage,
	},
	newGame: {
		id: 'newGame',
		component: NewGamePage,
	},
	addPlayer: {
		id: 'addPlayer',
		component: AddPlayerPage,
	},
	roundStart: {
		id: 'roundStart',
		component: RoundStartPage,
	},
	roundProgress: {
		id: 'roundProgress',
		component: RoundProgressPage,
	},
	addScores: {
		id: 'addScores',
		component: AddScoresPage,
	},
	roundBoard: {
		id: 'roundBoard',
		component: RoundBoardPage,
	},
	finalBoard: {
		id: 'finalBoard',
		component: FinalBoardPage,
	},
};

function GameContextProvider({ children }) {
	const [players, setPlayers] = useState([]);
	const [game, setGame] = useState({
		currentPage: PAGES['home'],
		round: 0,
		startTime: null,
		finishTime: null,
	});

	const changePageTo = (pageId) => {
		console.log('Moving to', pageId);
		const newPage = PAGES[pageId];
		setGame({ ...game, currentPage: newPage });
	};

	const addPlayer = (name) => {
		const player = { name, score: 0, wins: 0 };
		setPlayers([...players, player]);
	};

	const removePlayer = (name) => {
		console.log('removing player', name);
		setPlayers(players.filter((player) => player.name !== name));
	};

	const startGame = () => {
		setPlayers(players.map((player) => ({ ...player, score: 0, wins: 0 })));
		setGame({ currentPage: PAGES['newGame'], round: 1, startTime: Date.now(), finishTime: null });
	};

	const calculate = (newScores) => {
		//add scores to players
		const _players = players.map((player) => {
			players
				.filter((_player) => _player.name !== player.name)
				.forEach((_player) => (player.score += newScores[_player.name]));
			return player;
		});
		setPlayers(_players);

		//check for winner
		for (const player of _players) {
			if (player.score >= 500) return finishGame();
		}

		//else, next round
		setGame({ ...game, round: game.round + 1, currentPage: PAGES['roundBoard'] });
	};

	const finishGame = () => {
		setGame({ ...game, currentPage: PAGES['finalBoard'], finishTime: Date.now() });
	};

	const getLeaderboard = () => {
		return players.sort((a, b) => b.score - a.score);
	};

	useEffect(() => {
		console.log('current page', game.currentPage);
	}, [game.currentPage]);

	const value = {
		players,
		round: game.round,
		CurrentPageComponent: game.currentPage.component,
		changePageTo,
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
