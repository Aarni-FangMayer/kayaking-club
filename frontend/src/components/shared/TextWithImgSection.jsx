import React from "react";
import DecorationIcon from "../ui/decorationIcon/DecorationIcon";
import "./textWithImgSection.css";
import Icon1 from "../../assets/icons/icon_1.png"
import Icon2 from "../../assets/icons/icon_2.png"
import Icon3 from "../../assets/icons/icon_3.png"
import Icon4 from "../../assets/icons/icon_4.png"

const TextWithImgSection = ({ image, decor, children }) => {
  return (
    <div className="text-section__content">
      <div className="text-section__content-text">
        {children}
        {decor && (
          <div className="content-decor">
            <DecorationIcon
              icon={Icon1}
              text={"80% of first-time customers return to us every season"}
            />
            <DecorationIcon
              icon={Icon2}
              text={"A lot of unique routes through Canada's nature reserves"}
            />
            <DecorationIcon
              icon={Icon3}
              text={"More than kayakers have already joined our club"}
            />
            <DecorationIcon
              icon={Icon4}
              text={"At least three new locations exploring every year"}
            />
          </div>
        )}
      </div>
      <div
        className="text-section__content-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
};

export default TextWithImgSection;
