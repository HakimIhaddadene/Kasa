import React, { useState } from 'react'
import styled from 'styled-components'
import arrow from '../images/about/arrow.png'

const CollapseContainer = styled.div`
    width: 100%;
`

const CollapseTitle = styled.div`
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    border-radius: 5px;
    background: #FF6060;
    padding: 0 10px;
    margin-top: 25px;
`

const CollapseDescription = styled.div`
    padding: 20px 10px 10px 10px;
    color: #FF6060;
    background: #F6F6F6;
`

function Collapse({title, description}) {

    const [open, setOpen] = useState(false);

    return (
        <CollapseContainer>
            <div open onClick={() => setOpen(!open)}>
                <CollapseTitle>
                    {title}
                    <img src={arrow} alt="Flèche" />
                </CollapseTitle>
            </div>
                {
                    open && <CollapseDescription><p>{description}</p></CollapseDescription>
                }
        </CollapseContainer>
    )
}

export default Collapse;

