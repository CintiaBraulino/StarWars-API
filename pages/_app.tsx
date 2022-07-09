import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';
import { ColorModeProvider } from '../contexts/ColorModeContext';
import WelcomePage from '../layouts/Welcome';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const theme = createTheme({})

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeProvider>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
        <Footer/>
      </ColorModeProvider>
      
    </CacheProvider>
  );
}
