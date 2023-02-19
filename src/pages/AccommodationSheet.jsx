import React from "react"
import { useParams } from 'react-router-dom'
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
`

const AccommodationSheetContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 30px;
`

const TitleCityAndTags = styled.div`
display: flex;
flex-direction: column;
`

const Title = styled.div`
width: 100%;
`

const City = styled.div`
width: 100%;
margin: 10px 0 20px 0;
`

const Tags = styled.div`
width: 100%;
display: flex;
margin-right: 30px;
`

const NamePictureAndStars = styled.div`
display: flex;
flex-direction: column;
align-content: space-between;
`

const NameAndPicture = styled.div`
width: 175px;
display: flex;
margin-bottom: 20px;
justify-content: flex-end;
font-size: 21px;
color: #FF6060;
`

const Name = styled.div`
width: 110px;
display: flex;
align-items: center;
text-align: right;
margin-right: 15px;
`

const Picture = styled.img`
width: 64px;
height: 64px;
border-radius: 64px;
background: #C4C4C4;
`

const DescriptionAndEquipment = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 10px;
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
	const { title, location, rating, equipments, description, host, pictures } = accommodationDetails;
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
			<AccommodationSheetContainer>
				<TitleCityAndTags>
					<Title><h1>{title}</h1></Title>
					<City><h2>{location}</h2></City>
					<Tags>
						{accommodationDetails.tags.map((tag, index) => (
							<Tag key={index} tag={tag} />
						))}
					</Tags>
				</TitleCityAndTags>
				<NamePictureAndStars>
					<NameAndPicture>
						<Name>{host.name}</Name>
						<Picture img src={host.picture} alt="Photo du propriétaire" />
					</NameAndPicture>
					<RatingSystem accommodationRating={rating} />		
				</NamePictureAndStars>
			</AccommodationSheetContainer>

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