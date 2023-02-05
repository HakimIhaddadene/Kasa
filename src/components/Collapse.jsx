import React, { useState } from 'react'
import styled from 'styled-components'
import arrow from '../images/about/arrow.png'

const CollapseContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
`

const CollapseTitle = styled.div`
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    border-radius: 5px;
    background: #FF6060;
    padding: 0 5px;
    margin-top: 25px;
`

const CollapseDescription = styled.div`
    width: 100%;
    padding: 20px 5px 10px 5px;
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

