import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar/SideBar'
import { Div, Title } from "../styles/errorStyle";


export default function Error() {
	return (
        <Div>
             <SideBar />
        <Title>404</Title>
        <p>La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d’accueil</Link>
			
			<SideBar />

            </Div>
	)
}   