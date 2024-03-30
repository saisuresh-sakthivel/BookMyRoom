import Styled from "styled-components";
export const Header = Styled.div`
background-color: #000;
top: 0px;
width: 100%;
height: 80px;
color:white;
display:flex;
justify-content:center;
font-weight:Bold;
font-size:40px;
`;
export const InputContainer = Styled.div`
width:90%;
`;
export const InputBox = Styled.input`
    width: 91%;
    padding: 10px;
    border: none;
    margin: 1px;
    margin-left: 5%;
    margin-top: 4px;
`;
export const SearchIconContainer = Styled.div`
width:10%
`;
export const SearchIcon = Styled.button`
    margin-left: 5px;
    width: 100%;
    background: transparent;
    border: none;
    padding-top: 10px;
    cursor:pointer;
`;
export const CityIcon = Styled.button`
    background: transparent;
    border: none;
    cursor:pointer;
`;
export const CenterDiv = Styled.div`
margin: 0;
display: flex;
justify-content: center;
align-items: center;
`;
export const SearchContainer = Styled(CenterDiv)`
margin-top:15%;
`;
export const ContentSpace = Styled.div`
width:70%;
height:20px;
border:2px solid grey;
border-radius:30px;
height:47px;
display:flex;
`;

export const ImageContainer = Styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 200px;
width:78%;
margin-top:100px;
`;
export const HotelContainer = Styled.div`
width:50%;
`;
export const HotelPage = Styled.div`
display:flex;
justify-content: center;
width:80%;
`;
export const Box = Styled.div`
text-align: center;
`;
export const ImgBox = Styled.img`
height:85%;
padding:10px;
`;
export const HotelBox = Styled.div`
height:150px;
border:1px solid grey;
display:flex;
margin-top:10px;
`;
export const HotelInfoContainer = Styled.div`
padding:10px;
`;
