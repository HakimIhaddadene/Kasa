import React from 'react'
import styled from 'styled-components'
import { device } from '../device'

const TagsElement = styled.div`
color: #FFFFFF;
background: #FF6060;
border-radius: 10px;
padding: 10px 30px;
margin-bottom: 10px;
@media ${device.mobileS} { 
    margin-right: 15px;
}
@media ${device.mobileM} { 
    margin-right: 15px;
}
@media ${device.mobileL} { 
    margin-right: 15px;
}
@media ${device.laptop} { 
    margin-right: 30px;
}
@media ${device.laptopL} { 
    margin-right: 30px;
}
`

function Tags({tag}) {
    return (
        <TagsElement>
            <p>{tag}</p>
        </TagsElement>
    )
}

export default Tags;