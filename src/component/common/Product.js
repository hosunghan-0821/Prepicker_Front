import styles from '../../style/Product.module.css'
export default function Product() {

    const apiUrl = "http://localhost:8080/api/v1/products";
    const queryParams={page:"0",size:"10"};
    const queryString = new URLSearchParams(queryParams).toString();
    const urlWithParams = `${apiUrl}?${queryString}`;
    console.log(1);
    fetch(urlWithParams)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
    })

    return (
        <div className={styles.product}>
            {/* 상품정보 */}
            <div className={styles.product_text}>
                {/* 상품명 */}
                <div className={styles.prodcut_title}>
                    마이넘버원
                </div>
             
                {/* 상품 설명  */}
                <div className={styles.product_detail}>
                    6가지 맛을 동시에 즐길 수 있는
                </div>
                {/* 가격 */}
                <div className={styles.product_price}>
                    23000원 
                </div>
            </div>
            {/* 이미지 */}
            <img className={styles.product_img} src="https://hosunghan2.s3.ap-northeast-2.amazonaws.com/PICKER_PENG/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202023-01-06%20155856_20230916_144431.PNG" >

            </img>
        </div>
    );
}