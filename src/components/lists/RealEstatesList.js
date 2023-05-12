import React, { useEffect, useState } from "react";
import { realEstateAPI } from "../../api/api";
import RealEstateCard from "./RealEstateCard";
import Pagination from "../common/Pagination";
import "./RealEstatesList.css";

const RealEstatesList = () => {
  const [realEstates, setRealEstates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [realEstatesPerPage] = useState(5);

  useEffect(() => {
    const fetchRealEstates = async () => {
      try {
        const estates = await realEstateAPI.fetchAll();
        setRealEstates(estates);
      } catch (error) {
        console.error("Error fetching real estates:", error);
      }
    };

    fetchRealEstates();
  }, []);

  // Get current real estates
  const indexOfLastRealEstate = currentPage * realEstatesPerPage;
  const indexOfFirstRealEstate = indexOfLastRealEstate - realEstatesPerPage;
  const currentRealEstates = realEstates.slice(
    indexOfFirstRealEstate,
    indexOfLastRealEstate
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="real-estates-list">
      {currentRealEstates.map((estate) => (
        <RealEstateCard key={estate._id} estate={estate} cardType="big" />
      ))}
      <Pagination
        totalItems={realEstates.length}
        itemsPerPage={realEstatesPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default RealEstatesList;
