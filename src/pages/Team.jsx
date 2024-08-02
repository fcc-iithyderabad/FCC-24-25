import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "../assets/team/consulting/5.jpg";

function TeamPic({ title, head, coordinators }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="overflow-x-hidden p-6 mb-20">
      <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>
      {head && (
        <div className="flex flex-col items-center mb-8">
          <div
            className="flex flex-col items-center p-6"
            style={{
              backgroundColor: "#153556",
              borderRadius: "12px",
              width: "264px",
              height: "319px",
            }}
          >
            <img
              src={head.photo}
              alt={head.name}
              className="w-45 h-45 rounded-full object-cover mb-2"
              style={{ height: "180px", width: "180px", objectFit: "cover" }}
            />
            <h2 className="text-xl font-semibold text-white">{head.name}</h2>
          </div>
        </div>
      )}
      <div className="mt-8">
        <Carousel responsive={responsive}>
          {coordinators.map((coordinator, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div
                className="flex flex-col items-center p-6"
                style={{
                  backgroundColor: "#153556",
                  borderRadius: "12px",
                  width: "239px",
                  height: "289px",
                }}
              >
                <img
                  src={coordinator.photo}
                  alt={coordinator.name}
                  className="w-40 h-40 rounded-full object-cover mb-2"
                />
                <h3 className="text-lg text-white">{coordinator.name}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

TeamPic.propTypes = {
  title: PropTypes.string.isRequired,
  head: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  coordinators: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Team() {
  const consHead = {
    name: "",
    photo: "",
  };
  const finHead = {
    name: "",
    photo: "",
  };
  const multHead = {
    name: "multHead",
    photo: "src/assets/team/multimedia/1.jpg",
  };
  const opraHead = {
    name: "",
    photo: "src/assets/team/operations/1.jpg",
  };
  const prHead = {
    name: "",
    photo: "src/assets/team/pr/1.jpg",
  };
  const webHead = {
    name: "",
    photo: "src/assets/team/web/1.jpeg",
  };

  const coordinators = [
    { name: "Coordinator 1", photo: "src/assets/team/finance/2.jpg" },
    { name: "Coordinator 2", photo: "src/assets/team/finance/3.jpg" },
    { name: "Coordinator 3", photo: "src/assets/team/finance/4.jpg" },
    { name: "Coordinator 4", photo: "src/assets/team/finance/5.jpg" },
    { name: "Coordinator 5", photo: "src/assets/team/finance/6.jpg" },
    { name: "Coordinator 6", photo: "src/assets/team/finance/7.jpeg" },
    // Add more coordinators as needed
  ];
  const consCoords = [
    { name: "Coordinator 1", photo: "src/assets/team/consulting/2.jpeg" },
    { name: "Coordinator 2", photo: "src/assets/team/consulting/3.JPG" },
    { name: "Coordinator 3", photo: "src/assets/team/consulting/4.jpg" },
    { name: "Coordinator 4", photo: "src/assets/team/consulting/5.jpg" },
    { name: "Coordinator 5", photo: "src/assets/team/consulting/6.jpeg" },
    { name: "Coordinator 6", photo: "src/assets/team/consulting/7.jpg" },
    { name: "Coordinator 6", photo: "src/assets/team/consulting/8.jpeg" },
    // Add more coordinators as needed
  ];
  const multCoords = [
    { name: "Coordinator 1", photo: "src/assets/team/multimedia/2.jpg" },
    { name: "Coordinator 2", photo: "src/assets/team/multimedia/3.jpg" },
    { name: "Coordinator 3", photo: "src/assets/team/multimedia/4.jpg" },
    // Add more coordinators as needed
  ];
  const opraCoords = [
    { name: "Coordinator 1", photo: "src/assets/team/operations/2.jpg" },
    { name: "Coordinator 2", photo: "src/assets/team/operations/3.jpg" },
    { name: "Coordinator 3", photo: "src/assets/team/operations/4.jpg" },
    // Add more coordinators as needed
  ];
  const prCoords = [
    { name: "Coordinator 1", photo: "src/assets/team/pr/2.jpg" },
    { name: "Coordinator 2", photo: "src/assets/team/pr/3.jpg" },
    { name: "Coordinator 3", photo: "src/assets/team/pr/4.jpg" },
    { name: "Coordinator 4", photo: "src/assets/team/pr/5.jpg" },
    { name: "Coordinator 5", photo: "src/assets/team/pr/6.jpg" },
  ];
  const webCoords = [
    { name: "Coordinator 1", photo: "src/assets/team/web/5.jpg" },
    { name: "Coordinator 2", photo: "src/assets/team/web/3.JPG" },
    { name: "Coordinator 3", photo: "src/assets/team/web/4.png" },
    { name: "Coordinator 3", photo: "src/assets/team/web/2.jpg" },
  ];


  return (
    <div className="overflow-x-hidden">
      {/* <TeamPic title="Core Team" head={head} coordinators={coordinators} /> */}
      {/* meet the team heading */}
      <h1 className="text-7xl font-semibold text-center mb-30 mt-15">
        Meet The Team
      </h1>

      <h2 className="text-3xl font-bold text-center mb-8 mt-20">Overall Coordinators</h2>

      <div className="flex flex-row justify-evenly items-center mb-20">
        
      <div className="flex flex-col items-center mb-8">
        <div
          className="flex flex-col items-center p-6"
          style={{
            backgroundColor: "#153556",
            borderRadius: "12px",
            width: "264px",
            height: "319px",
          }}
          >
          <img
            src="src/assets/team/1.jpeg"
            alt="overall head"
            className="w-45 h-45 rounded-full object-cover mb-2"
            style={{ height: "180px", width: "180px", objectFit: "cover" }}
            />
          <h2 className="text-xl font-semibold text-white">oc1</h2>
        </div>
      </div>
      <div className="flex flex-col items-center mb-8">
        <div
          className="flex flex-col items-center p-6"
          style={{
            backgroundColor: "#153556",
            borderRadius: "12px",
            width: "264px",
            height: "319px",
          }}
          >
          <img
            src="src/assets/team/2.jpg"
            alt="overall head"
            className="w-45 h-45 rounded-full object-cover mb-2"
            style={{ height: "180px", width: "180px", objectFit: "cover" }}
            />
          <h2 className="text-xl font-semibold text-white">oc2</h2>
        </div>
      </div>
      </div>
      <TeamPic
        title="Consulting Team"
        head={consHead}
        coordinators={consCoords}
      />
      <TeamPic
        title="Finance Team"
        head={finHead}
        coordinators={coordinators}
      />
      <TeamPic
        title="Multimedia Team"
        head={multHead}
        coordinators={multCoords}
      />
      <TeamPic
        title="Operations Team"
        head={opraHead}
        coordinators={opraCoords}
      />
      <TeamPic
        title="Public Relations Team"
        head={prHead}
        coordinators={prCoords}
      />
      <TeamPic
        title="Web Development Team"
        head={webHead}
        coordinators={webCoords}
      />
    </div>
  );
}

export default Team;
