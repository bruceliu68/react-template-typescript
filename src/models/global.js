export default {
	state: {
		headerActive: null,
		count: 100
	},
	effects: {

	},
	reducers: {
		changeState(state, action) {
			return {
				...state,
				...action
			};
		}
	}
};
