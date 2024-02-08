
import React from "react";
import { NavLink } from "react-router-dom";
import { Title,Div } from "../styles/homeStyle";


export default function Home() {
	return (
		
		<Div>
			
			<Title>Choix Utilisateur:</Title>
      <NavLink to="user/12"> -Karl </NavLink>
      <NavLink to="user/18"> -Cecilia </NavLink>

		</Div>
	)
}