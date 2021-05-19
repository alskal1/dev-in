import React from 'react';
import styles from './Header.module.css';

function Header() {
    return(
        <div className="styles.nav">
            <ul>
                <li className={styles.logo}>Dev-in</li>
                <li className={styles.intro}>소개</li>
                <li className={styles.community}>커뮤니티</li>
                <li className={styles.ranking}>랭킹</li>
                <li className={styles.cs}>고객센터</li>
                <li><input type="text" className={styles.search} placeholder="내용을 입력해주세요."></input></li>
                <li className={styles.profile}>프로필</li>
            </ul>
        </div>
    );
}

export default Header;
