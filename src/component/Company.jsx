import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import CompanyCard from './CompanyCard';
import styles from './Company.module.scss';

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

  const { salesman, workers = [] } = company;
  return (
    <>
      <h1 className={styles.companyTitle}>{company.name}</h1>

      <div className={styles.companyContainer}>
        {salesman && 
          <CompanyCard name={salesman.name} role="commercial" thumbnail={salesman.thumbnail} withStar/>
        }
        {workers.map(({name, role, thumbnail}, index) => (
          <CompanyCard key={index} name={name} role={role} thumbnail={thumbnail}/>
        ))}
      </div>
    </>
  );
}

export default Company;
