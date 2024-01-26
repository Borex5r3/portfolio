import { Intro } from "./Intro";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const styleLabel =
    "text-[0.7rem] translate-y-[-21px] bg-black border-x-2 opacity-100 px-2";
  const styleMsgLabel =
    "text-[0.7rem] translate-y-[-18px] bg-black border-x-2 opacity-100 px-2";

  const handleNameInput = (e: any) => {
    setNameValue(e.target.value);
  };
  const handleEmailInput = (e: any) => {
    setEmailValue(e.target.value);
  };
  const handleMessageInput = (e: any) => {
    setMessageValue(e.target.value);
  };
  const form = useRef<HTMLFormElement>(null);
  const toastMessage = (isSuccess: boolean) => {
    const successMessage = "Thank you for reaching out!";
    const failureMessage =
      "Oops! It seems there was an issue submitting your message.";
    return isSuccess
      ? toast.success(successMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      : toast.error(failureMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
  };
  const onSubmit = async (_data: any) => {

    const data = form.current ? form.current : String(null);
    emailjs
      .sendForm(
        "service_qhkm9we",
        "template_sf7v53y",
        data,
        "1wBoR0yffa0rLnKVI"
      )
      .then(
        (_result) => {
          toastMessage(true);
          // show the user a success message
        },
        (_error) => {
          toastMessage(false);
          // show the user an error
        }
      );
    reset();
    setMessageValue("");
    setNameValue("");
    setEmailValue("");
  };

  return (
    <div
      className="h-[736px] min-w-[280px] flex flex-col bg-black text-[#C8C8C8] items-center pt-[86px] pb-[46px] px-[23px] lg:px-[15vw] font-light space-y-[50px]"
      id="contact"
    >
      <Intro />
      <form
        ref={form}
        className="w-full flex flex-col space-y-[35px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-[30px]">
          <div className="flex flex-col space-y-[30px] lg:flex-row lg:space-y-0 lg:space-x-5">
            <div className="group relative flex items-center lg:w-1/2">
              <label
                htmlFor="Name"
                className={`absolute text-gray-500 ml-[15px] transition-all duration-200 ${
                  nameValue
                    ? styleLabel
                    : "group-focus-within:text-[0.7rem] group-focus-within:translate-y-[-21px] group-focus-within:bg-black group-focus-within:border-x-2 group-focus-within:opacity-100  group-focus-within:px-2 opacity-80"
                }`}
              >
                Name
              </label>
              <input
                {...register("name", {
                  required: "required",
                })}
                onChange={handleNameInput}
                type="text"
                id="Name"
                className="w-full bg-inherit border border-[#D9D9D9] rounded-[6px] h-[35px] px-[15px] outline-none py-[20px]"
              />
              <p
                className={
                  errors.name
                    ? `absolute bottom-[-28px] text-[12px] lg:text-[13px] text-[#e87c03] py-[6px] px-[3px]`
                    : "hidden"
                }
              >
                {String(errors.name?.message)}
              </p>
            </div>
            <div className="group relative flex items-center lg:w-1/2">
              <label
                htmlFor="Email"
                className={`absolute text-gray-500 ml-[15px] transition-all duration-200 ${
                  emailValue
                    ? styleLabel
                    : "group-focus-within:text-[0.7rem] group-focus-within:translate-y-[-21px] group-focus-within:bg-black group-focus-within:border-x-2 group-focus-within:opacity-100  group-focus-within:px-2 opacity-80"
                }`}
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message:
                      "Please enter a valid email address in the format user@example.com.",
                  },
                })}
                onChange={handleEmailInput}
                type="email"
                id="Email"
                className="w-full bg-inherit border border-[#D9D9D9] rounded-[6px] h-[35px] px-[15px] outline-none py-[20px]"
              />
              <p
                className={
                  errors.email
                    ? `absolute bottom-[-28px] text-[12px] lg:text-[13px] text-[#e87c03] py-[6px] px-[3px]`
                    : "hidden"
                }
              >
                {String(errors.email?.message)}
              </p>
            </div>
          </div>
          <div className="relative flex group">
            <label
              htmlFor="userMessage"
              className={`absolute text-gray-500 ml-[15px] mt-[10px]  transition-all duration-200 ${
                messageValue
                  ? styleMsgLabel
                  : "opacity-80 group-focus-within:text-[0.7rem] group-focus-within:translate-y-[-18px] group-focus-within:bg-black group-focus-within:border-x-2 group-focus-within:opacity-100  group-focus-within:px-2"
              }`}
            >
              Your Message
            </label>
            <textarea
              {...register("userMessage", {
                required: "required",
                maxLength: {
                  value: 1000,
                  message: "Description cannot be longer than 1000 characters",
                },
                minLength: {
                  value: 1,
                  message: "Please enter your message.",
                },
              })}
              onChange={handleMessageInput}
              id="userMessage"
              rows={4}
              className="w-full bg-inherit border border-[#D9D9D9] rounded-[6px] px-[15px] pt-[10px] outline-none"
            />
            <p
              className={
                errors.userMessage
                  ? `absolute bottom-[-28px] text-[12px] lg:text-[13px] text-[#e87c03] py-[6px] px-[3px]`
                  : "hidden"
              }
            >
              {String(errors.userMessage?.message)}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="relative border rounded-[6px] py-[5px] border-[#7AFBB9] text-[#7AFBB9] font-medium hover:text-black transition-all duration-200 ease-in-out lg:w-1/3 xl:w-1/4 2xl:w-1/5 group z-10"
        >
          Submit
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#7AFBB9] -z-10 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-300 rounded-[4px] origin-left"></div>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactMe;
