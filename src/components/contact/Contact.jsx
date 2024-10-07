import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}>Have an idea?</motion.h1>
        </motion.div>
        <div className="formContainer">
          <motion.div
            className="phoneSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
              <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M 7 9 H 17 M 7 13 H 17 M 21 20 L 17.6757 18.3378 C 17.4237 18.2118 17.2977 18.1488 17.1656 18.1044 C 17.0484 18.065 16.9277 18.0365 16.8052 18.0193 C 16.6672 18 16.5263 18 16.2446 18 H 6.2 C 5.07989 18 4.51984 18 4.09202 17.782 C 3.71569 17.5903 3.40973 17.2843 3.21799 16.908 C 3 16.4802 3 15.9201 3 14.8 V 7.2 C 3 6.07989 3 5.51984 3.21799 5.09202 C 3.40973 4.71569 3.71569 4.40973 4.09202 4.21799 C 4.51984 4 5.0799 4 6.2 4 H 17.8 C 18.9201 4 19.4802 4 19.908 4.21799 C 20.2843 4.40973 20.5903 4.71569 20.782 5.09202 C 21 5.51984 21 6.0799 21 7.2 V 20 Z"
              />
            </svg>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button>Submit</button>
            {error && "Error"}
            {success && "Success"}
          </motion.form>
        </div>
      </motion.div>
      <motion.div className="mail" variants={variants}>
        <span>avzkitchen@gmail.com</span>
      </motion.div>
    </>
  );
};

export default Contact;
