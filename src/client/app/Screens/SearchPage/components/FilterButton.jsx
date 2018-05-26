import React from 'react';

const FilterButton = ({
  filter, searchFilter, children, setSearchFilter,
}) => (
  <button onClick={setSearchFilter.bind(null, filter)} className={filter === searchFilter ? 'active searchForm__searchCriteriaBtns' : 'searchForm__searchCriteriaBtns'}>{children}</button>
);
export default FilterButton;
