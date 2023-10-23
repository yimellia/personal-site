import { useRef } from "react";

export interface enquiriesProps {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface ContactFormProps {
    onAddEnquiry: (enquiry: enquiriesProps) => void;
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enquiry = {
            name: nameRef.current?.value || '',
            email: emailRef.current?.value || '',
            phone: phoneRef.current?.value || '',
            message: messageRef.current?.value || ''
        };
        props.onAddEnquiry(enquiry);
        alert("Thank you for your message! I'll get back to you as soon as possible.");
    };

    return (
        <form onSubmit={SubmitHandler} className="bg-cover bg-center flex flex-col gap-2">
                <input placeholder="Name" className="bg-[#F1ECEA] rounded-t border-b border-[#C0B5AB] focus:border-darkbrown text-l py-1 px-3" type="text" id="name" name="name" ref={nameRef} required />
                <input placeholder="Emai Address" className="bg-[#F1ECEA] rounded-t border-b border-[#C0B5AB] focus:border-darkbrown text-l py-1 px-3" type="email" id="email" name="email" ref={emailRef} required />
                <input placeholder="Phone Number" className="bg-[#F1ECEA] rounded-t border-b border-[#C0B5AB] focus:border-darkbrown text-l py-1 px-3" type="text" id="phone" name="phone" ref={phoneRef} />
                <textarea placeholder="Leave your message here" className="bg-[#F1ECEA] rounded-t border-b border-[#C0B5AB] focus:border-darkbrown text-l py-1 px-3" id="message" name="message" rows={5} ref={messageRef} required></textarea>
            <button className=" bg-lightbrown hover:bg-darkbrown text-white font-sans text-l font-bold w-1/3 ml-20 mt-2 px-3 py-2" type="submit">Submit</button>
        </form>
    );
}
export default ContactForm;