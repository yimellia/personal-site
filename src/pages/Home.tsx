import { useNavigate } from "react-router-dom";
import Photo from "../components/images/photo.jpg"

const Home: React.FC = () => {
    const navigate = useNavigate();

    function ButtonHandler(){
        navigate('/about-me', { replace: true });
    }

    return (<div className="bg-white">
        <div className="mt-10 mb-10 mx-16">
            <div className="text-xl font-bold font-serif text-brown">Personal Website</div>
            <hr className="h-1 bg-brown mt-2" />
        </div>
        <div className="space-x-10 columns-2">
            <img className="w-4/5 h-auto mx-16" src={Photo} alt="" />
            <div className="justify-left">
                <div className="text-lightbrown font-Gabriela text-8xl leading-tight pt-16">
                    <h1>Yim</h1>
                    <h1>Ki Nok,</h1>
                    <h1>Ellia</h1>
                </div>
                <button className="btn-hollow my-4" onClick={ButtonHandler}>GET TO KNOW ME</button>
            </div>
        </div>
    </div>);
}
export default Home;