import React from "react"
import { Link } from "react-router-dom";
import styled from 'styled-components'

const PageNotFoundContainer = styled.div`
    width: 100%;
    display: flex;
	flex-direction: column;
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
`

const ReturnToHome = styled.a`
    font-size: 18px;
	color: #FF6060;
	text-decoration: underline;
    display: flex;
    justify-content: center;
	margin-top: 100px;
	margin-bottom: 100px;
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