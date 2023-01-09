import { Layout } from '@/components/Layout';
import { createClient } from '@/prismicio';
import getNavigationAndSettings from '@/utils/getNavigationAndSettings';
import { Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { PrismicDocument } from '@prismicio/types';
import { GetStaticProps } from 'next';
import Link from 'next/link';

interface Props {
  navigation: PrismicDocument<Record<string, any>, string, string>;
  settings: PrismicDocument<Record<string, any>, string, string>;
}

const NotFound = ({ navigation, settings }: Props) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Container sx={{ mt: '10%' }}>
        <Paper variant="padded" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" mb={3}>
            Page Not Found
          </Typography>
          <Typography>
            Return to the <Link href="/">home page.</Link>
          </Typography>
        </Paper>
      </Container>
    </Layout>
  );
};

export default NotFound;

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
  previewData,
}) => {
  const client = createClient({ previewData });

  const { navigation, settings } = await getNavigationAndSettings(
    client,
    locale
  );

  return {
    props: {
      navigation,
      settings,
    },
  };
};
