import React from "react"
import styled from 'styled-components'

const TagsElement = styled.div`
margin-right: 30px;
color: #FFFFFF;
background: #FF6060;
border-radius: 10px;
padding: 10px 30px;
`

function Tags({tag}) {
    return (
        <TagsElement>
            <p>{tag}</p>
        </TagsElement>
    )
}

export default Tags;