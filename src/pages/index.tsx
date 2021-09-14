import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HomeContainer from '../components/container/home';

const Home: NextPage = () => {
  return HomeContainer();
};

export default Home;
