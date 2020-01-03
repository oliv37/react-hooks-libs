import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const selectCompany = createSelector(
  state => state.companies,
  (_, companyId) => +companyId,
  (companies, companyId) => companies.filter(company => company.id === companyId)[0]
);

function Company() {
  const { companyId } = useParams();
  const company = useSelector(state => selectCompany(state, companyId));

  if (!company) {
    return <Redirect to='/404'/>;
  }

  return <pre>{JSON.stringify(company, null, 2)}</pre>;
}

export default Company;
