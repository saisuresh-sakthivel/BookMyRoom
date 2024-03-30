import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Header,
  CenterDiv,
  ContentSpace,
  InputContainer,
  InputBox,
  SearchIconContainer,
  Box,
  ImageContainer,
  SearchIcon,
  CityIcon,
  SearchContainer,
} from "./styles/Header";
import { cities, title } from "./constants/ui";
import { fetchHotels } from "./utils/resthelper.siteManager";
import Search from "./svg/Search";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const hotelState = (state) => state.hotelmanager.hotels;

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (param) => {
    const city = param.toLowerCase();
    dispatch(fetchHotels(city));
  };

  const hotels = useSelector(hotelState);
  const destinations = cities.map((item) => {
    return (
      <Box>
        <CityIcon onClick={() => handleClick(item)}>
          <img src={"/assets/images/" + item + ".jpeg"}></img>
          <p>{item}</p>
        </CityIcon>
      </Box>
    );
  });

  useEffect(() => {
    if (hotels.length > 0) {
      navigate("/hotel");
    }
  }, [hotels]);

  return (
    <>
      <Header>{title}</Header>
      <SearchContainer>
        <ContentSpace>
          <InputContainer>
            <InputBox></InputBox>
          </InputContainer>
          <SearchIconContainer>
            <SearchIcon onClick={handleClick}>
              <Search></Search>
            </SearchIcon>
          </SearchIconContainer>
        </ContentSpace>
      </SearchContainer>
      <CenterDiv>
        <ImageContainer>{destinations}</ImageContainer>
      </CenterDiv>
    </>
  );
}

export default Home;
