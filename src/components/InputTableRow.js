import React, { PropTypes } from 'react';
import '../assets/stylesheets/OutputRow.scss';
import '../assets/stylesheets/utility.scss';

const InputTableRow = (props) => (
    <tr>
      <th><div className="text-center">{props.cp}</div></th>
      <th><div className="text-center">{props.hp}</div></th>
      <th><div className="text-center">{props.dust}</div></th>
    </tr>
);

InputTableRow.propTypes = {
  cp: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
  dust: PropTypes.number.isRequired,
};

export default InputTableRow;
