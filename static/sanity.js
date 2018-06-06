import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '0jzrcm4a',
  dataset: 'production',
  useCdn: true
});
