import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Banner from "../components/Banner"
import Card from "../components/Card"
import Data from "../api/data.json"
import { device } from '../device'

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; 
    margin-top: 50px;	
    @media ${device.mobileS} { 
        width: 90%;
		flex-direction: column;
    }
    @media ${device.mobileM} { 
        width: 80%;
		flex-direction: column;
    }
    @media ${device.mobileL} { 
        width: 70%;
		flex-direction: column;
    }
    @media ${device.laptop} { 
        width: 100%;
		flex-direction: row;
    }
    @media ${device.laptopL} { 
        width: 100%;
		flex-direction: row;
    }
`

function Home() {
	return (
		<div>
			<Banner />
			<CardContainer>
				{Data.map((lodging, id) => (
					<div key={id}>
						<Link to={`/AccommodationSheet/${lodging.id}`}>
							<Card cover={lodging.cover} title={lodging.title} />
						</Link>
					</div>
				))}
			</CardContainer>	
		</div>
	);
}

export default Home;