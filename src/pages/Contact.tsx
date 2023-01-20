import React, { FormEvent } from "react";
import ContactEnvelopeIcon from "../components/icons/ContactEnvelopIcon";
import Location from "../components/Location";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import ResumeHeader from "../components/ResumeHeader";

const Contact = () => {
    function sendEmail(e: FormEvent<HTMLFormElement> & { target: any }) {
        console.log(e.currentTarget.type);
        e.preventDefault();
        emailjs
            .sendForm(
                "portfolio.1995",
                "portfolio_template.1995",
                e.currentTarget,
                "YoR-HqOyLGpenVETJ"
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
        e.target.reset();
    }
    return (
        <motion.div
            initial={{ translateX: "100%" }}
            animate={{ opacity: 1, translateX: "0%" }}
            exit={{ opacity: "100%" }}
            transition={{ duration: 1 }}
        >
            <form id="contact-form" onSubmit={sendEmail}>
                <ResumeHeader
                    iconComponent={<ContactEnvelopeIcon />}
                    pageName="Contact Me."
                >
                    <div className="lets-talk-area">
                        <div className="subheading">
                            <span>LET'S TALK</span>
                        </div>
                        <div className="name-email-area">
                            <div className="field-holder">
                                <input
                                    type="text"
                                    name="user_name"
                                    className="form-input"
                                    required
                                />
                                <label>Name</label>
                            </div>
                            <div className="field-holder">
                                <input
                                    type="email"
                                    name="user_email"
                                    className="form-input"
                                    required
                                />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="messsage-area">
                            <textarea required name="message" />
                            <label className="text-area-label">
                                How can we help you?
                            </label>
                            <button
                                type="submit"
                                className="send-messsage-btn"
                                value="Send Message"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>
                    {/* need refactor with props */}
                    <Location />
                </ResumeHeader>
            </form>
        </motion.div>
    );
};

export default Contact;
