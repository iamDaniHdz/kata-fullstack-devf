import "./App.css";
import { Home } from "./components/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Form } from "./components/Form";
import { Login } from "./components/Login";
import { MovieSubList } from "./components/MovieSublist";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:3000/"
  })

  return (
		<Router>
			<ApolloProvider client={client}>
				<Navbar />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/create-movie" element={<Form />} />
					<Route index element={<Login />} />
					<Route path="/movie" element={<MovieSubList />} />
				</Routes>
			</ApolloProvider>
		</Router>
	);
}

export default App
