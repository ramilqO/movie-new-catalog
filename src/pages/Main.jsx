import Carousel from '../components/Carousel';

const Main = () => {
    return (
        <div className="container-fluid bg-light" style={{height: '1000px', display: 'inline-flex'}}>
            <div className='container col-md-12 col-lg-6 h-100 bg-dark'>
                <Carousel />
            </div>
        </div>
    );
}

export default Main;
