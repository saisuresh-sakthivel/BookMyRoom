import React from "react";
import { useSelector } from "react-redux";
import {
  CenterDiv,
  HotelContainer,
  HotelBox,
  HotelPage,
  ImgBox,
  HotelInfoContainer,
  Header,
} from "./styles/Header";
import { title } from "./constants/ui";
const hotelState = (state) => state.hotelmanager.hotels;

function Hotel() {
  const hotels = useSelector(hotelState);
  const hotelComponent = hotels.map((item) => {
    return (
      <>
        <HotelBox>
          <ImgBox
            src={"/assets/images/" + item.city + "/" + item.image}
          ></ImgBox>
          <HotelInfoContainer>
            <h2>{item.name}</h2>
            <div>
              <div>{item.city}</div>
              <div>{item.Address}</div>
            </div>
          </HotelInfoContainer>
        </HotelBox>
      </>
    );
  });
  const hotelsAvailable = hotels.length > 0;
  return hotelsAvailable ? (
    <>
      <Header>{title}</Header>
      <CenterDiv>
        <HotelPage>
          <div></div>
          <HotelContainer>{hotelComponent}</HotelContainer>
        </HotelPage>
      </CenterDiv>
    </>
  ) : (
    <div>No Hotels</div>
  );
}

export default Hotel;
