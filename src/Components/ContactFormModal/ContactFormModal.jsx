import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";

const ContactFormModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const modelRef = useRef();
  const onSubmit = (data) => {
    console.log(data);
    onClose();
  };

  const closeModel = (e) => {
    if (modelRef.current === e.target) onClose();
  };
  return (
    <>
      <div
        ref={modelRef}
        onClick={closeModel}
        className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-30 backdrop-blur-sm cursor-default"
      >
        <div className="bg-gray-50 p-4 rounded-md flex backdrop-blur-none flex-col max-w-[640px]  max-h-screen opacity-95">
          <div className="place-self-end">
            <button>
              <FaXmark onClick={onClose} className=" text-black" />
            </button>
          </div>
          <h1 className="text-xl font-bold text-center text-black">
            Book Your <span className="text-purple-500">FREE consultation</span>{" "}
            with Certified Counsellors
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-purple-900 px-8 cursor-default"
          >
            <div className=" text-ellipsis overflow-hidden text-nowrap h-12">
              {errors.firstname && (
                <p role="alert" className="text-left text-red-600">
                  ** {errors.firstname.message}
                </p>
              )}
              {errors.lastname && (
                <p role="alert" className="text-left text-red-600">
                  ** {errors.lastname.message}
                </p>
              )}
              {errors.email && (
                <p role="alert" className="text-left text-red-600">
                  ** {errors.email.message}
                </p>
              )}
              {errors.mobile && (
                <p role="alert" className="text-left text-red-600">
                  ** {errors.mobile.message}
                </p>
              )}
              {errors.location && (
                <p role="alert" className="text-left text-red-600">
                  ** {errors.location.message}
                </p>
              )}
              {errors.question && (
                <p role="alert" className="text-left text-red-600">
                  ** {errors.question.message}
                </p>
              )}
              {errors.destination && (
                <p role="alert" className="text-left text-red-600">
                  ** {errors.destination.message}
                </p>
              )}
            </div>

            <input
              className="text-primary-dark w-full rounded-lg   border border-violet-700 p-2 m-1 font-medium focus:outline-none "
              type="text"
              placeholder="First Name"
              {...register("firstname", {
                required: "First Name is required",
              })}
            />

            <input
              className="text-primary-dark w-full rounded-lg   border border-violet-700 p-2 m-1 font-medium focus:outline-none "
              type="text"
              placeholder="Last Name"
              {...register("lastname", {
                required: "Lastname is required",
              })}
            />

            <input
              className="text-primary-dark w-full rounded-lg border border-violet-700 p-2 m-1 font-medium focus:outline-none"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />

            <div className="flex gap-2 ">
              <input
                className="text-primary-dark w-full rounded-lg   border border-violet-700 p-2 m-1 font-medium focus:outline-none max-w-20 "
                readOnly
                defaultValue={"+977"}
                placeholder="+977"
                {...register("code", {
                  required: true,
                })}
              />
              <input
                className="text-primary-dark w-full rounded-lg border border-violet-700 p-2 my-1 font-medium focus:outline-none appearance-none"
                type="text"
                placeholder="Mobile Number"
                {...register("mobile", {
                  required: "Mobile Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit mobile number",
                  },
                })}
                onWheel={(e) => e.target.blur()}
              />
            </div>

            <select
              className="text-primary-dark w-full rounded-lg border border-violet-500 p-2 m-1 font-medium focus:outline-none"
              {...register("location", {
                required: "Select Location ",
              })}
            >
              <option value="" hidden>
                Select Location
              </option>
              <option value="Pokhara">Pokhara</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Lalitpur">Lalitpur</option>
              <option value="Bhaktapur">Bhaktapur</option>
            </select>

            <select
              className="text-primary-dark w-full rounded-lg border border-violet-500 p-2 m-1 font-medium focus:outline-none"
              {...register("question", {
                required: "Select a question",
              })}
            >
              <option value="" hidden>
                My Question is Regarding
              </option>
              <option value="Course">Course</option>
              <option value="Visa">Visa</option>
              <option value="language">Language Preperation</option>
              <option value="english">English Test Voucher</option>
            </select>

            <select
              className="text-primary-dark w-full rounded-lg border border-violet-500 p-2 m-1 font-medium focus:outline-none"
              {...register("destination", {
                required: "Select a destination",
              })}
            >
              <option value="" hidden>
                Preferred Destination Country
              </option>
              <option value="Australia">Australia</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="helpme">Help me decide</option>
            </select>

            <div className="flex items-center justify-center gap-2">
              <input type="checkbox" name="" id="" defaultChecked />
              <h1>
                By clicking you agree to our{" "}
                <span className="text-purple-500">Privacy Policy </span>and{" "}
                <span className="text-purple-500"> Terms & Conditions *</span>
              </h1>
            </div>
            <div className="mt-2 flex  justify-center items-center mb-4 ">
              <button
                type="submit"
                className="bg-primary-dark text-center p-4 w-max h-min text-white rounded-full "
              >
                Meet Us Online
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFormModal;
