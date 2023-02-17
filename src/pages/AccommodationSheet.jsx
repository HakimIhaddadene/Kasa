import React from "react"
import { useParams, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import Data from "../api/data.json"
import SlideShow from "../components/SlideShow"
import Tag from "../components/Tags"
import Collapse from "../components/Collapse"
import RatingSystem from "../components/RatingSystem"

const SlideContainer = styled.div`
width: 100%;
height: 415px;
margin-top: 50px;
@media (max-width: 768px) {
  width: 767px;
}
`

const Title = styled.div`
width: 100%;
padding: 10px 0;
margin-top: 20px;
@media (max-width: 768px) {
  width: 767px;
}
`

const City = styled.div`
width: 100%;
@media (max-width: 768px) {
  width: 767px;
}
`

const TagsAndStars = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 20px;
@media (max-width: 768px) {
  width: 767px;
  flex-direction: column;
}
`

const Tags = styled.div`
width: 100%;
display: flex;
margin-right: 30px;
`

const Stars = styled.div`
width: 100%;
display: flex;
`

const DescriptionAndEquipment = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 30px;
@media (max-width: 768px) {
  width: 100%;  
  flex-direction: column;
}
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
	const { id, title, location, rating, equipments, description, pictures } = accommodationDetails;
	const equipmentsList =
		equipments.map((item, index) => (
			<li key={index}>
				{item}
			</li>
		));

	return (
		<div>
			<SlideContainer>
				<SlideShow pics={pictures} />
			</SlideContainer>
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
					<RatingSystem accommodationRating={rating} />
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