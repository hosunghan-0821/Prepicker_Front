import Header from '../common/Header'
import styles from '../../style/Admin.module.css'
import SidebarContent from './SidebarContent';
import Product from '../common/Product';
export default function Admin() {

    return (<div className={styles.admin_page}>
        <Header />
        <div className={styles.content}>
            {/* 사이드바 */}
            <div className={styles.sidebar}>
                <SidebarContent contentName="상품조회" />
                <SidebarContent contentName="주문조회" />
                <SidebarContent contentName="SMS 발송" />

            </div >

            {/* 메인컨텐츠 */}
            <div className={styles.main_content}>

                <div className={styles.content_container}>
                { /*여기에 이제, 아이템 요소들 기본적인 */}
                
                    <Product />
                    <Product />
                    <Product />
           
                </div>
            </div>

        </div>
    </div>);
}