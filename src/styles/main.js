import styled from "styled-components";
 export const Container=styled.div`
  display: grid-flow;
  justify-content: center;
  align-content: center;
  width: 400px;
  margin: 40px auto;
  grid-template-column: repeat(4,100px);
  grid-template-rows: minmax(100px,auto) repeat(5,100px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
`;

export const Screen=styled.div`
  grid-column: 1/-1;
  background-color: rgba(60,64,67,0.75);
  display: flex;  
  justify-content: space-around;
  flex-direction:column;
  padding: 18px;
  width: 400px;
  height:100px;
  word-wrap: break-word;
  break-word: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Previous=styled.div`
  background-color: rgba(255,255,255,0.75)
  font-size: 3rem;
`;

export const Current=styled.div`
  color: white;
  font-size: 2.5rem;
  
`;

export const Button=styled.div`
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  height: 25px;
  border: 1px outset white;
  background-color: rgba(255,255,255,0.75);
  &:hover{
    background-color: rgba(255,255,255,0.9);
  }
  ${function({gridSpan}){
    if(gridSpan){
      return `grid-column:span ${gridSpan}`;
    }
  }}
  ${({operation})=>operation && "background-color:grey"};
  ${({control})=>control && "background-color:skyBlue"};
  ${({equals})=>equals && "background-color:grey;border-bottom-right-radius:10px;border-bottom-left-radius:10px"};
`;

 