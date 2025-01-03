import Inputs from './Inputs';
import MainTitle from './MainTitle';
import Footer from './Footer';
import Volver from './Volver';

const Structure = () => {

    return (
        <>
            <div className='px-4 pt-10'>
                <MainTitle />
            </div>
            <Inputs />
            <Volver />
            <Footer />
        </>
    )
};

export default Structure;