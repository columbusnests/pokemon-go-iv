import React, { PropTypes } from 'react';
import '~/assets/stylesheets/IVFinder/OutputRow.scss';
import '~/assets/stylesheets/utility.scss';

const MinmaxOutputRow = (props) => (
  <tr>
    <th>{props.level}</th>
    <th><div className="text-center">{props.dust}</div></th>
    <th><div className="text-center">{props.minCP}cp <br /> {props.minHP}hp</div></th>
    <th><div className="text-center">{props.avgCP}cp <br /> {props.avgHP}hp</div></th>
    <th><div className="text-center">{props.maxCP}cp <br /> {props.maxHP}hp</div></th>
  </tr>
);

MinmaxOutputRow.propTypes = {
  level: PropTypes.number.isRequired,
  dust: PropTypes.number.isRequired,
  minCP: PropTypes.number.isRequired,
  avgCP: PropTypes.number.isRequired,
  maxCP: PropTypes.number.isRequired,
  minHP: PropTypes.number.isRequired,
  avgHP: PropTypes.number.isRequired,
  maxHP: PropTypes.number.isRequired,
};

export default MinmaxOutputRow;