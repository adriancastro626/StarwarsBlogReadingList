const getState = ({ getStore, getActions, setStore }) => {
	const callPeople = "https://swapi.dev/api/people/";
	const callPlanet = "https://swapi.dev/api/planets/";

	return {
		store: {
			planets: [],
			people: [],
			favoritos: []
		},
		actions: {
			//agregar al local storage
			setLocalStorage: (people, planets, favorites) => {
				setStore(JSON.parse(people));
				setStore(JSON.parse(planets));
				setStore(JSON.parse(favorites));
			},
			//Traer informacion de personajes del API
			getPersonajes: async () => {
				await fetch(callPeople, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						setStore({ people: data.results });
						localStorage.setItem("people", JSON.stringify({ people: data.results }));
					})
					.catch(err => console.error(err));
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
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data.results });
						localStorage.setItem("planets", JSON.stringify({ planets: data.results }));
					})
					.catch(err => console.error(err));
			},

			//agregar personaje favorito
			addCharacterFavorite: index => {
				const store = getStore();

				let obj = store.favorites.find(obj => obj.name == store.people[index].name);

				if (obj == undefined) {
					store.favorites.push(store.people[index]);
					setStore(store);
					localStorage.setItem("favorites", JSON.stringify({ favorites: store.favorites }));
				}
			},
			//agregar planeta favorito
			addPlanetFavorite: id => {
				const store = getStore();

				let obj = store.favorites.find(favorite => favorite.name == store.planets[id].name);

				if (obj == undefined) {
					store.favorites.push(store.planets[id]);
					setStore(store);
					localStorage.setItem("favorites", JSON.stringify({ favorites: store.favorites }));
				}
			},
			//eliminar favorito
			deleteFavorite: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore(store);
				localStorage.setItem("favorites", JSON.stringify({ favorites: store.favorites }));
			}

			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }

			//crear funcion para agregar y quitar favoritos para people and planets, boton, onclick
		}
	};
};

export default getState;
