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
            //Traer informacion de personajes del API
            getPersonajes: async () => {
                await fetch(callPeople)
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(err => console.error(err))
                    setStore({ people: data.results })
            },

            //Traer informacion de planetas del API
            getPlanetas: async () => {
                await fetch(callPlanet)
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(err => console.error(err))
                    setStore({ planets: data.results })				
            },

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

    export default getState;