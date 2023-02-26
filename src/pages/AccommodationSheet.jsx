import React from "react"
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Data from "../api/data.json"
import SlideShow from "../components/SlideShow"
import Tag from "../components/Tags"
import Collapse from "../components/Collapse"
import RatingSystem from "../components/RatingSystem"
import { device } from '../device'

const SlideContainer = styled.div`
width: 100%;
margin-top: 50px;
`

const AccommodationSheetContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 30px;
@media ${device.mobileS} { 
	flex-direction: column; 
}
@media ${device.mobileM} { 
	flex-direction: column; 
}
@media ${device.mobileL} { 
	flex-direction: column; 
}
@media ${device.laptop} { 
	flex-direction: row;
}
@media ${device.laptopL} { 
	flex-direction: row;
}
`

const TitleCityAndTags = styled.div`
display: flex;
flex-direction: column;
@media ${device.mobileS} { 
	width: 100%;
}
@media ${device.mobileM} { 
	width: 80%;
}
@media ${device.mobileL} { 
	width: 70%;
}
@media ${device.laptop} { 
	width: 100%;
}
@media ${device.laptopL} { 
	width: 100%;
}
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
flex-wrap: wrap;
`

const NamePictureAndStars = styled.div`
display: flex;
margin-top: 30px;
@media ${device.mobileS} { 
	flex-direction: row-reverse;
	align-items: center;
	width: 90%;
}
@media ${device.mobileM} { 
	flex-direction: row-reverse;
	align-items: center;
	width: 80%;
}
@media ${device.mobileL} { 
	flex-direction: row-reverse;
	align-items: center;
	width: 70%;
}
@media ${device.laptop} { 
	flex-direction: column;
	align-items: end;
	margin-top: 0;
}
@media ${device.laptopL} { 
	flex-direction: column;
	align-items: end;
	margin-top: 0;
}
`

const NameAndPicture = styled.div`
width: 175px;
display: flex;
color: #FF6060;
@media ${device.laptop} { 
	margin-bottom: 20px;
}
@media ${device.laptopL} { 
	margin-bottom: 20px;
}
`

const Name = styled.div`
width: 110px;
display: flex;
align-items: center;
text-align: right;
margin-right: 5px;
@media ${device.mobileS} { 
	font-size: 16px;
}
@media ${device.mobileM} { 
	font-size: 16px;
}
@media ${device.mobileL} { 
	font-size: 16px;
}
@media ${device.laptop} { 
	font-size: 21px;
}
@media ${device.laptopL} { 
	font-size: 21px;
}
`

const Picture = styled.img`
background: #C4C4C4;
@media ${device.mobileS} { 
	width: 32px;
	height: 32px;
	border-radius: 32px;
}
@media ${device.mobileM} { 
	width: 32px;
	height: 32px;
	border-radius: 32px;
}
@media ${device.mobileL} { 
	width: 32px;
	height: 32px;
	border-radius: 32px;
}
@media ${device.laptop} { 
	width: 64px;
	height: 64px;
	border-radius: 64px;
}
@media ${device.laptopL} { 
	width: 64px;
	height: 64px;
	border-radius: 64px;
}
`

const DescriptionAndEquipment = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 10px;
@media ${device.mobileS} { 
	flex-direction: column;
}
@media ${device.mobileM} { 
	flex-direction: column;
}
@media ${device.mobileL} { 
	flex-direction: column;
}
@media ${device.laptop} { 
	flex-direction: row;
}
@media ${device.laptopL} { 
	flex-direction: row;
}
`

const DescriptionAndEquipmentElement = styled.div`
width: 45%;
@media ${device.mobileS} { 
	width: 90%;
}
@media ${device.mobileM} { 
	width: 80%;
}
@media ${device.mobileL} { 
	width: 70%;
}
@media ${device.laptop} { 
	width: 45%;
	flex-direction: row;
}
@media ${device.laptopL} { 
	width: 45%;
	flex-direction: row;
}
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