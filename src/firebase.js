// Import the functions you need from firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA4bOsNXr7qr34A5-DCqxoM4ZIbwIpGw04',
	authDomain: 'uno-leaderboard.firebaseapp.com',
	projectId: 'uno-leaderboard',
	storageBucket: 'uno-leaderboard.appspot.com',
	messagingSenderId: '458647929769',
	appId: '1:458647929769:web:a4bc72edf07390c506fab8',
	measurementId: 'G-DYL5Y8ZXDW',
};

export default class Firebase {
	init() {
		this.app = initializeApp(firebaseConfig);
		this.analytics = getAnalytics(this.app);
	}
}

const firebase = new Firebase();

export { firebase };
