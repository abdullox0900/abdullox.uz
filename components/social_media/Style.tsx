import styled from "styled-components";

interface IconProps {
    colorWhite: string
}

export const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

export const SocialListItem = styled.li`
    transition: all 0.5s ease;

`

export const SocialListLink = styled.a`

    svg {
        transition: all 0.5s ease !important;
        stroke-dashoffset: 4500;
        animation: draw 8s ease;
        stroke-width:10px;

    }

   ${SocialListItem}:nth-child(1):hover &{

      svg {
        stroke-width: 0.5px;
        stroke: white;
        fill: black;
      
      }
    }

   ${SocialListItem}:nth-child(2):hover &{
      svg {
        stroke-width: 0.5px;
         stroke: white;
         fill: #0077B5;
      }
    }

    ${SocialListItem}:nth-child(3):hover &{
      svg {
         stroke-width:5px;
         stroke: white;
         fill: #FF0000;
      }
    }

    ${SocialListItem}:nth-child(4):hover &{
      svg {
         stroke-width: 0.5px;
         stroke: white;
         fill: #229ED9;
      }
    }

    @keyframes draw {
        0% {
            stroke-dashoffset: 4500;
        } 
        100% {
            stroke-dashoffset: 0;
        }
    }

`