import React from "react";
import Head from "next/head";

interface MetaProps {
  data: {
    metaTitle: string;
    metaDescription: string;
  };
}

const NextSEO = ({ data }: MetaProps) => {
  const { metaTitle, metaDescription } = data;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta
        name="google-site-verification"
        content="F046ObHYj9XEf_1NLV-X5-GnQ0ohQ8hWQArJfuBMzWw"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav-icons/apple-touch-icon.png"
      />
    </Head>
  );
};

export default NextSEO;
