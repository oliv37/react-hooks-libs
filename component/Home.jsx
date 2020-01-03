import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const companies = useSelector(state => state.companies);
  return companies.map(company => 
    <div key={company.id}>
      <Link to={`/company/${company.id}`}>
        {company.name}
      </Link>
    </div>
  );
}

export default Home;
