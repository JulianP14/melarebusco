import Inputs from './Inputs';
import Donations from './Donations';
import MainTitle from './MainTitle';
import Footer from './Footer';
import Volver from './Volver';

const Structure = () => {

    return (
        <>
            <div className='flex flex-col px-4 pt-10'>
                <MainTitle />
                {/* <Donations /> */}
            </div>
            <Inputs />
            <Volver />
            <Footer />
        </>
    )
};

export default Structure;