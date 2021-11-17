import Image from "next/image";
import Link from "next/link";
import { data } from "../../data";
import styles from "../../styles/Product.module.css";

const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardLg}>
        {product.images.map((img) => (
          <div className={styles.imgContainer}>
            <Image
              key={img.id}
              src={img.url}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className={styles.cardSm}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];

  return {
    props: { product },
  };
};

export default Product;
