const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: async (email, password) => {
				const opts = {
				  method: "POST",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify({
					email: email,
					password: password,
				  }),
				};
				try {
				  const response = await fetch(
					"https://friendly-space-invention-w6qw7g9wpg7f5j7w-3001.app.github.dev/token",
					opts
				  );
				  if (response.status !== 200) {
					alert("Response was not a code 200.");
					return false;
				  }
				  const data = await response.json();
				  console.log("backend token: " + data);
				  sessionStorage.setItem("token", data.access_token);
				  setStore({ token: data.access_token });
				  return true;
				} catch (error) {
				  console.error("Error! Description: " + error);
				}
			  },

			//reset the global store
		}
	}
};


export default getState;
