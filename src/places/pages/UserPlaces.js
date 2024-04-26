import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";

const UserPlaces = () => {
  const userId = useParams().userId;

  const auth = useContext(AuthContext);

  const [places, setPlaces] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/user/${encodeURIComponent(userId)}`
        );

        setPlaces(responseData.places);
      } catch (err) {}
    };

    fetchPlaces();
  }, [userId, sendRequest, auth.token]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && places && (
        <PlaceList
          items={places}
          isLoading={isLoading}
          onDeletePlace={placeDeletedHandler}
        />
      )}
    </>
  );
};

export default UserPlaces;
