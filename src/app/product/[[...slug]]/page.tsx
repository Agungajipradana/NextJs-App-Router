type DetailProductPageProps = { params: { slug: string[] } };

const DetailProductPage = (props: DetailProductPageProps) => {
  const { params } = props;
  // console.log(params);

  return (
    <>
      <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1>
      {params.slug && (
        <>
          <p>Category: {params.slug[0]}</p>
          <p>Gender: {params.slug[1]}</p>
          <p>Top: {params.slug[2]}</p>
        </>
      )}
    </>
  );
};

export default DetailProductPage;