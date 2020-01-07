import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Home.module.scss";

function Home() {
  const companies = useSelector(state => state.companies);
  return (
    <div className={styles.companyContainer}>
      {companies.map(company => (
        <Link to={`/company/${company.id}`} className={styles.link}>
          <div className={styles.companyCard}>
            <img src={company.logo} className={styles.companyCardThumbnail} />
            <div key={company.id} className={styles.info}>
              <h1 className={styles.companyCardTitle}>{company.name}</h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
