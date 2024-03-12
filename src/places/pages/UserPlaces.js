import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.748127,
      lng: -73.984938,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Statue of Liberty",
    description:
      "A colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, United States",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/08/13/03/01/new-york-1590176_1280.jpg",
    address: "New York, NY 10004, United States",
    location: {
      lat: 40.6892534,
      lng: -74.0470753,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  console.log(userId, "userId");
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
