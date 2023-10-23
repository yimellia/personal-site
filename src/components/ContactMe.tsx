import ContactForm, { enquiriesProps } from "./ContactForm";
import backgroundImage from "./images/letter.png";

interface stateProps {
	SetContactMeOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactMe: React.FC<stateProps> = ({SetContactMeOpen}) => {
	const closeWindowHandler = () => {
		SetContactMeOpen(false);
	};
	const addEnquiryHandler = (enquiry: enquiriesProps) => {
		fetch(
			"https://personal-si-cafb6-default-rtdb.firebaseio.com/enquiries.json",
			{
				method: "POST",
				body: JSON.stringify(enquiry),
				headers: {
					"Contenr-Type": "application/json",
				},
			}
		).then(() => {
			closeWindowHandler();
		});
	};
return (
    <div className="fixed top-1/6 left-1/3 bg-white w-1/3 h-full rounded-lg pr-28 pl-32 py-28 bg-transparent bg-contain bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
    {/* // <div className="fixed top-1/3 left-1/3 w-1/3 bg-white shadow-lg rounded-lg p-8"> */}
        <div className="flex flex-row justify-between mb-3">
            <h1 className="font-['Oregano'] text-3xl font-semibold text-darkbrown" >Contact Me</h1>
            <button className="bg-red-400 text-white rounded-full w-6 h-6 flex items-center justify-center" onClick={closeWindowHandler}>X</button>
        </div>
        <ContactForm onAddEnquiry={addEnquiryHandler} />
        {backgroundImage ? null : <p>Error: Background image not found</p>}
    </div>
);
};

export default ContactMe;
