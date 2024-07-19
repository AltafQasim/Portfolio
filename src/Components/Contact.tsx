import { useEffect, useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconCheck, IconHexagon, IconTopologyStar3, IconX } from "@tabler/icons-react";
import emailjs from '@emailjs/browser';
import { Loader } from "./Loader";

const Contact = () => {
  const xIcon = <IconX style={{ width: '20rem', height: '20rem' }} />;
  const checkIcon = <IconCheck style={{ width: '20rem', height: '20rem' }} />;
  const form = {
    name: "",
    email: "",
    phone: "",
    message: ""
  }
  const [formData, setFormData] = useState(form);
  const [isToast, setIsToast] = useState({ success: false, faild: false });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  }
  const btn = useMatches({
    xsm: 'xs',
    sm: "sm",
    md: 'md',
    lg: "lg"
  })

  useEffect(() => {
    if (isToast.faild || isToast.success) {
      setTimeout(() => {
        setIsToast({ success: false, faild: false })
      }, 1000);
    }
  }, [isToast])


  const handleSubmit = () => {
    setIsLoading(true)
    emailjs
      .send("service_62rej4n", "template_yff23m7",
        formData, {
        publicKey: 'UXg2SQRcvtIv7UxPn',
      })
      .then(
        (res) => {
          setIsToast(prev => ({ ...prev, success: true }))
          setFormData(form)
        },
        (error) => {
          setIsToast(prev => ({ ...prev, faild: true }))
        },
      ).finally(() => setIsLoading(false))
  }

  return (
    <div className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0   my-10  font-mono" id="Contact">
      <h1 className="text-4xl  sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white"><span className="text-primaryColor">05.&nbsp;</span>Contact</h1>
      <div data-aos="flip-left" data-aos-duration="800" className="w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl sm-mx:p-4">
        <div className=" text-3xl flex gap-2 items-center text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">Let's Connect<IconTopologyStar3 className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" /></div>
        <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} />
        <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} />
        {isLoading && <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_4.5s] items-center justify-center">
          <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]" size={120} color="#64FFDA" stroke={1.25} />
          <div className=" absolute font-mono text-primaryColor font-semibold text-6xl -z-10">C</div>
        </div>}
        <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange} />
        <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} />
        <Button fullWidth rightSection={<IconArrowRight size={20} />}
          className="!text-bgColor !font-bold " variant="filled" size={btn} radius="lg" color={isToast.success ? '#16a34a' : isToast.success ? "#e11d48" : "#64FFDA"} onClick={() => { handleSubmit() }}>{isToast.success ? 'Success' : isToast.success ? "Faild" : 'Send'}</Button>
      </div>
    </div>
  )
}
export default Contact;