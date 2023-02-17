import React from "react"
import { Link } from "react-router-dom";
import styled from 'styled-components'

const PageNotFoundContainer = styled.div`
    width: 100%;
    display: flex;
	flex-direction: column;
	@media (max-width: 768px) {
	    width: 767px;
		margin-top: 250px;
	}   
`

const Error404 = styled.span`
    font-size: 150px;
	color: #FF6060;
    display: flex;
    justify-content: center;
	margin-top: 100px;
`

const NotFound = styled.span`
    font-size: 36px;
	color: #FF6060;
    display: flex;
    justify-content: center;
	margin-top: 30px;
	@media (max-width: 768px) {
		text-align: center;
	}   
`

const ReturnToHome = styled.a`
    font-size: 18px;
	color: #FF6060;
	text-decoration: underline;
    display: flex;
    justify-content: center;
	margin-top: 100px;
	margin-bottom: 100px;
	@media (max-width: 768px) {
		margin-top: 150px;
		margin-bottom: 300px;
	}   
`

function PageNotFound() {
	return (
		<PageNotFoundContainer>
			<Error404>404</Error404>
			<NotFound>Oups ! La page que vous demandez n'existe pas</NotFound>			
				<Link to="/" >
					<ReturnToHome>Retourner sur la page d'accueil</ReturnToHome>
				</Link>			
		</PageNotFoundContainer>
	);
}

export default PageNotFound;