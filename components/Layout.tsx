import { PrismicDocument } from '@prismicio/types';
import { ReactNode } from 'react';
import Footer from './Footer';
import { Navigation } from './Navigation';

interface Props {
  navigation: PrismicDocument<Record<string, any>, string, string>;
  settings: PrismicDocument<Record<string, any>, string, string>;
  children: ReactNode;
}

export const Layout = ({ navigation, settings, children }: Props) => {
  return (
    <div>
      <Navigation navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer navigation={navigation} />
    </div>
  );
};
