import React from "react"
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Data from "../api/data.json"
import SlideShow from "../components/SlideShow"
import Tag from "../components/Tags"
import Collapse from "../components/Collapse"

const SlideShowContainer = styled.div`
width: 100%;
margin-top: 50px;
`

const Image = styled.img`
width: 100%;
height: 415px;
object-fit: cover;
`

const Title = styled.div`
width: 100%;
padding: 10px 0;
margin-top: 20px;
`

const City = styled.div`
width: 100%;
`

const TagsAndStars = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 20px;
`

const Tags = styled.div`
width: 100%;
display: flex;
margin-right: 30px;
`

const Stars = styled.div`
width: 100%;
display: flex;
justify-content: end;
margin-right: 30px;
`

const DescriptionAndEquipment = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 30px;
`

const DescriptionAndEquipmentElement = styled.div`
width: 45%;
`

const List = styled.li`
list-style: none;
`

function AccommodationSheet() {

	const lodgingId = useParams();
	const accommodationDetails = Data.find(lodging => lodging.id === lodgingId.id);
	const { title, location, rating, equipments, description, cover } = accommodationDetails;
	const equipmentsList =
		equipments.map((item, index) => (
			<li key={index}>
				{item}
			</li>
		));

	return (
		<div>
			<SlideShowContainer>
				<SlideShow />
				<Image img src={cover} alt="#" />
			</SlideShowContainer>
			<Title>
				<h1>{title}</h1>
			</Title>
			<City>
				<h2>{location}</h2>
			</City>
			<TagsAndStars>
				<Tags>
					{accommodationDetails.tags.map((tag, index) => (
						<Tag key={index} tag={tag} />
					))}
				</Tags>
				<Stars>
					<p>{rating}</p>
				</Stars>
			</TagsAndStars>
			<DescriptionAndEquipment>
				<DescriptionAndEquipmentElement>
					<Collapse title="Description" description={description} />
				</DescriptionAndEquipmentElement>
				<DescriptionAndEquipmentElement>
					<List>
						<Collapse title="Équipements" description={equipmentsList} />
					</List>
				</DescriptionAndEquipmentElement>
			</DescriptionAndEquipment>
		</div>
	);
}

export default AccommodationSheet;