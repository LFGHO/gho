import React from "react";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from "react-tooltip";
import InfoOutlined from "@mui/icons-material/InfoOutlined";

function TextWithHint({ text, hint }) {
  return (
    <div>
      <a className="my-anchor-element-class m-3 text-xs inline">
        <div className="inline mr-1">{text}</div>
        <InfoOutlined sx={{ fontSize: 15 }}/>
      </a>
      <Tooltip anchorSelect=".my-anchor-element-class" data-tooltip-place="top" data-tooltip-variant="success" content={hint} />
    </div>
  );
}

export default TextWithHint;
