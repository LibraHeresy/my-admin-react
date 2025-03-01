import PropTypes from "prop-types";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import "./MyCard.less";
const MyCard = ({
  title = "这是标题",
  number = "0",
  desc = "这是描述",
  introduce = "这是介绍",
  children,
  numberSlot,
  descSlot,
}) => {
  return (
    <div className="my-card">
      <div className="my-card_header">
        <div className="my-card_header-title">{title}</div>
        <Tooltip title={introduce}>
          <InfoCircleOutlined className="my-card_header-icon" />
        </Tooltip>
      </div>
      <div className="my-card_content">
        <div className="my-card_content-number">
          {numberSlot ? numberSlot : <div>{number}</div>}
        </div>
        <div className="my-card_content-info">{children}</div>
      </div>
      <div className="my-card_footer">
        {descSlot ? descSlot : <div>{desc}</div>}
      </div>
    </div>
  );
};

MyCard.propTypes = {
  title: PropTypes.string,
  number: PropTypes.string,
  desc: PropTypes.string,
  introduce: PropTypes.string,
  children: PropTypes.node,
  numberSlot: PropTypes.node,
  descSlot: PropTypes.node,
};

export default MyCard;
