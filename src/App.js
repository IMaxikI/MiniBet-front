import './styles/index.scss';
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useGetKralbetDataQuery} from "./redux/api/kralbetApi";
import Loader from "./components/Loader/Loader";

function App() {
    const { data, error, isLoading } = useGetKralbetDataQuery();

    if (isLoading) return <Loader/>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <Header/>
            <Layout/>
            <Footer/>
        </div>
    );
}

export default App;