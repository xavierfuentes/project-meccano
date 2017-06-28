import React from 'react';
import PropTypes from 'prop-types';
import { Table, Column, Cell } from 'fixed-data-table-2';

import 'fixed-data-table-2/dist/fixed-data-table.min.css';

const TextCell = ({ data, rowIndex, columnKey, ...props }) =>
  <Cell {...props}>
    {data[rowIndex][columnKey]}
  </Cell>;

TextCell.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
    })
  ).isRequired,
  rowIndex: PropTypes.number.isRequired,
  columnKey: PropTypes.string.isRequired,
};

const Grid = ({ data }) =>
  <Table rowsCount={data.length} headerHeight={50} rowHeight={50} width={1000} height={500}>
    <Column columnKey="fullName" header={<Cell>Full Name</Cell>} cell={<TextCell data={data} />} width={100} />
    <Column columnKey="firstName" header={<Cell>First Name</Cell>} cell={<TextCell data={data} />} width={100} />
    <Column columnKey="lastName" header={<Cell>Last Name</Cell>} cell={<TextCell data={data} />} width={100} />
  </Table>;

Grid.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Grid;
