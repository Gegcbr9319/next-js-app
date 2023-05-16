import Head from 'next/head';
import { Home } from '../components';

const MainPage = () => {
    return (
        <>
            <Head>
                <title> Main page</title>
            </Head>

            <Home />
        </>
    );
};

export default MainPage;
