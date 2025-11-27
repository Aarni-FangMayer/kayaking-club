import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import TourService from "../../../services/tours";
import Modal from "../../modals/modalLayout/Modal";
import RoutesModal from "../../modals/routesModal/RoutesModal";

import "./sliderSmall.css";
import SelectedTour from "../../../pages/tours/toursCatalog/SelectedTour";

const SliderSmall = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTour, setCurrentTour] = useState([]);

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 2, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 2, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const getFirstSix = (tours) => tours.slice(0, 6);
  const repeatList = (arr, count) => Array(count).fill(arr).flat();

  useEffect(() => {
    TourService.getAll().then((response) => {
      const six = getFirstSix(response.data);
      setProducts(repeatList(six, 20));
    });
  }, []);


  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3" 
      onClick={() => {
        setModalOpen(true);
        setCurrentTour(product);
      }}>
        <h4 className="mb-1">difficulty: {product.difficulty}</h4>
        <h6 className="mt-0 mb-3">{product.name}</h6>
        <h4 className="mb-1">{product.shortDescription}</h4>
      </div>
    );
  };

  return (
    <>
      <Carousel
        value={products}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
      <RoutesModal isModalOpen={modalOpen} closeModal={() => setModalOpen(false)} >
        <SelectedTour currentTour={currentTour} handleChangeSelectedTour={""} showBackButton={false} />
      </RoutesModal>
    </>
  );
};

export default SliderSmall;
