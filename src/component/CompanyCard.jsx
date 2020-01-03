import React from 'react';
import styles from './CompanyCard.module.scss';

const IMG_STAR_URL = "https://images.assetsdelivery.com/compings_v2/yuliaglam/yuliaglam1706/yuliaglam170600008.jpg";

function CompanyCard({name, role, thumbnail, withStar}) {
    return (
        <div className={styles.companyCard}>
            { withStar && 
                <img className={styles.companyCardStar} src={IMG_STAR_URL} alt="star"/>
            }
            <img className={styles.companyCardThumbnail} src={thumbnail} alt=""/>
            <h1 className={styles.companyCardTitle}>{name}</h1>
            <h2 className={styles.companyCardSubtitle}>{role}</h2>
        </div>
    )
}

export default CompanyCard;
