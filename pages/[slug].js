// pages/[slug].tsx

export const getStaticProps = async (context) => {
  const slug = context.params?.slug;
  const draftKey = context.previewData?.draftKey;
  const content = await fetch(
   `https://c7vy9jnix6.microcms.io/api/v1/blog/${slug}${
    draftKey !== undefined ? `?draftKey=${draftKey}` : ''
   }`,
   { headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY || '' } }
  )
   .then((res) => res.json());
   return {
     props: {
       content
     }
   };
 };