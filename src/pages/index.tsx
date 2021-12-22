import Head from "next/head";

import styles from "./home.module.scss";

import { stripe } from "../services/stripe";
import { SubscribeButton } from "../components/SubscribeButton";
import { GetServerSideProps, GetStaticProps } from "next";

type IProductProps = {
  product: {
    priceId: string;
    amount: number;
  };
};

export default function Home({ product }: IProductProps) {
  console.log(product);
  return (
    <>
      <Head>
        <title>Home | ig.news </title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br /> the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/Mulher.svg" alt="Girls coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1K9HCiCMBGQdEhfgLBOatn7h", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
