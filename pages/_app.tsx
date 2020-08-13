import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { wrapper } from '../store';
import '../mobile-menu.scss';
import '../styles.scss';
import '../theme.scss';
import '../variable.scss';
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../public/css/header.scss';
import '../public/css/category.scss';
import '../public/css/headermenu.scss';
import '../public/css/home.scss';
import '../public/css/slider.scss';
import '../public/css/footer.scss';
import '../public/css/footermenu.scss';
const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
