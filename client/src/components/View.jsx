import React from "react";
import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";

const View = ({ data, changeView, openModal }) => {
  function closeModal() {
    changeView();
  }

  if (Object.keys(data).length === 0) {
    return null;
  } else {
    let width = Math.floor(data.productMatches[0].averageRating * 100);

    return (
      <div>
        <Modal
          isOpen={openModal}
          appElement={document.getElementById("app")}
          style={{
            overlay: {
              position: "fixed",
              top: 100,
              left: 300,
              right: 300,
              bottom: 50,
              backgroundColor: "rgba(255, 255, 255, 0.75)",
            },
            content: {
              position: "absolute",
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <FaWindowClose onClick={() => closeModal()} className="fa-btn" />
          <p>{data.pairingText}</p>

          <div className="flex">
            <div>
              <img src={data.productMatches[0].imageUrl} alt="" />
            </div>

            <div className="info">
              <div>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Name:
                </span>
                {data.productMatches[0].title}
              </div>

              <p>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  {" "}
                  Description:
                </span>
                {data.productMatches[0].description}
              </p>
              <div>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Price:
                </span>
                {data.productMatches[0].price}
              </div>

              <div className="star">
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Average rating:
                </span>
                <div className="starContainer">
                  <div id="fullStarContainer" style={{ width: width + "px" }}>
                    <div id="fullStar"></div>
                  </div>
                  <div id="emptyStarContainer">
                    <div id="emptyStar"></div>
                  </div>
                </div>
              </div>

              <a href={data.productMatches[0].link} target="_blank">
                Buy here
              </a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
};

export default View;
