const getState = ({ getStore, getActions, setStore }) => {
	const callPeople = "https://www.swapi.tech/api/people";
	const callPlanet = "https://www.swapi.tech/api/planets";

	return {
		store: {
			planets: [],
			people: []
		},
		actions: {
			//Traer informacion de personajes del API
			getPersonajes: async () => {
				await fetch(callPeople, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ people: data });
					});
			},
			//Traer informacion de planetas del API
			getPlanetas: async () => {
				await fetch(callPlanet, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ planets: data });
					});
			}
		},

		changeColor: (index, color) => {
			//get the store
			const store = getStore();

			//we have to loop the entire demo array to look for the respective index
			//and change its color
			const demo = store.demo.map((elm, i) => {
				if (i === index) elm.background = color;
				return elm;
			});

			//reset the global store
			setStore({ demo: demo });
		}
	};
};

export default getState;
