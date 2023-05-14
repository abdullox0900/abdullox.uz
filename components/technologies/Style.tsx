import styled from "styled-components";

export const TechList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    width: 70%;
    margin: 0 auto;
`

export const TechItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background-image: url('https://techcells.com/wp-content/themes/techcells/images/icons/tech-front.svg');
    background-size: cover;
    background-repeat: no-repeat;
`