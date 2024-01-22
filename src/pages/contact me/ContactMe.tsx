import React, { useState } from "react";

function ContactMe() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const styleLabel =
    "text-[0.7rem] translate-y-[-21px] bg-black border-x-2 opacity-100 px-2";
  const styleMsgLabel =
    "text-[0.7rem] translate-y-[-18px] bg-black border-x-2 opacity-100 px-2";

  const handleNameInput = (e) => {
    setNameValue(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmailValue(e.target.value);
  };
  const handleMessageInput = (e) => {
    setMessageValue(e.target.value);
  };
  return (
    <div className="h-[736px] min-w-[280px] flex flex-col bg-black text-[#C8C8C8] items-center pt-[86px] pb-[46px] px-[23px] font-light space-y-[40px]">
      <div className="space-y-[17px] flex flex-col w-full">
        <p className="w-full text-[20px] lg:text-[30px] text-[#7AFBB9] font-medium">
          Contact Me
        </p>
        <p className="text-[15px] lg:text-[20px]">
          Ready to bring your vision to life? Reach out, and let's build
          something amazing together!
        </p>
      </div>
      <div className="w-full flex flex-col space-y-[35px]">
        <div className="space-y-[20px]">
          <div className="flex flex-col space-y-[20px] lg:flex-row lg:space-y-0 lg:space-x-5">
            <div className="group relative flex items-center lg:w-1/2">
              <label
                htmlFor="Name"
                className={`absolute text-gray-500 ml-[15px] opacity-80 transition-all duration-200 ${nameValue ? styleLabel : "group-focus-within:text-[0.7rem] group-focus-within:translate-y-[-21px] group-focus-within:bg-black group-focus-within:border-x-2 group-focus-within:opacity-100  group-focus-within:px-2"}`}
              >
                Name
              </label>
              <input
                onChange={handleNameInput}
                type="text"
                id="Name"
                className="w-full bg-inherit border border-[#D9D9D9] rounded-[6px] h-[35px] px-[15px] outline-none py-[20px]"
              />
            </div>
            <div className="group relative flex items-center lg:w-1/2">
              <label
                htmlFor="Email"
                className={`absolute text-gray-500 ml-[15px] opacity-80 group-focus-within:text-[0.7rem] transition-all duration-200 ${emailValue ? styleLabel : "group-focus-within:translate-y-[-21px] group-focus-within:bg-black group-focus-within:border-x-2 group-focus-within:opacity-100  group-focus-within:px-2"}`}
              >
                Email
              </label>
              <input
                onChange={handleEmailInput}
                type="email"
                id="Email"
                className="w-full bg-inherit border border-[#D9D9D9] rounded-[6px] h-[35px] px-[15px] outline-none py-[20px]"
              />
            </div>
          </div>
          <div className="relative flex group">
            <label
              htmlFor="Message"
              className={`absolute text-gray-500 ml-[15px] mt-[10px] opacity-80 transition-all duration-200 ${messageValue ? styleMsgLabel : "group-focus-within:text-[0.7rem] group-focus-within:translate-y-[-18px] group-focus-within:bg-black group-focus-within:border-x-2 group-focus-within:opacity-100  group-focus-within:px-2"}`}
            >
              Your Message
            </label>
            <textarea
              onChange={handleMessageInput}
              name="Message"
              id="Message"
              rows="4"
              className="w-full bg-inherit border border-[#D9D9D9] rounded-[6px] px-[15px] pt-[10px] outline-none"
            ></textarea>
          </div>
        </div>
        <button className="border rounded-[6px] py-[5px] border-[#7AFBB9] text-[#7AFBB9] font-medium hover:text-black hover:bg-[#7AFBB9] hover:border-0 duration-200">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactMe;
