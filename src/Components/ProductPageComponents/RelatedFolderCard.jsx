import React from "react";
import "./RelatedFolderCard.css";
import cart from "../../assets/product/bi_cart.png";

const RelatedFolderCard = ({ buttonText, imgSrc, desc, price, status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "green";
      case "warranty":
        return "purple";
      case "hot":
        return "orange";
      case "discount":
        return "red";
      default:
        return "gray";
    }
  };
  return (
    <div id="related-card">
      <div className="container">
        <div
          className="status"
          style={{ backgroundColor: getStatusColor(status) }}
        >
          <span className="status-text">{status}</span>
        </div>
        <img className="img" src={imgSrc} alt="Related Folder" />

        <div className="button">
          <img src={cart} alt="cart" />
          <span>{buttonText}</span>
        </div>
      </div>

      <div className="inner-text">
        <span className="desc">{desc}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};
export default RelatedFolderCard;
