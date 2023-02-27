import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Banner from "../components/Banner"
import Card from "../components/Card"
import Data from "../api/data.json"
import { device } from '../device'
import bannerHome from '../images/home/banner.png'

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; 
    margin-top: 50px;	
    @media ${device.mobileS} { 
		flex-direction: column;
        margin-top: 20px;
    }
    @media ${device.mobileM} { 
		flex-direction: column;
        margin-top: 20px;
    }
    @media ${device.mobileL} { 
		flex-direction: column;
        margin-top: 20px;
    }
    @media ${device.laptop} { 
		flex-direction: row;
    }
    @media ${device.laptopL} { 
		flex-direction: row;
    }
`

function Home() {
	return (
		<div>
			<Banner picture={bannerHome} title="Chez vous, partout et ailleurs" />
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