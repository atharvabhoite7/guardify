import React from "react";
import Layout from "./Layout";
import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

const FileComplaint = ({ name }) => {
  console.log(name);
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    address: "",
    city: "",
    code: "",
    phone: "",
    email: "",
    complaint: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [output, setOutput] = useState(null);
  const handleChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsDisabled(true);
    setIsLoading(true);
    console.log(formData);
    let data = null;

    await axios
      .post("http://localhost:3000/api/file-complaint", {
        subject: formData.subject,
        name: formData.name,
        address: formData.address,
        city: formData.city,
        code: formData.code,
        phone: formData.phone,
        email: formData.email,
        complaint: formData.complaint,
        reportedName: name,
      })
      .then(function (response) {
        setIsDisabled(false);
        setIsLoading(false);
        data = response.data;
        console.log(data);
        setOutput(data);
        console.log(output);
      })
      .catch(function (error) {
        console.log(error);
      });
    setFormData({
      subject: "",
      name: "",
      address: "",
      city: "",
      code: "",
      phone: "",
      email: "",
      complaint: "",
    });
  };
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="flex-auto px-4 lg:px-10 py-10">
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="subject"
                type="text"
                placeholder="Subject"
                name="subject"
                required
                onChange={handleChange}
                value={formData.subject}
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="name"
                placeholder="Name"
                name="name"
                required
                onChange={handleChange}
                value={formData.name}
              />
            </div>

            <div className="ml-2 mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="address"
                type="text"
                placeholder="Address"
                name="address"
                required
                onChange={handleChange}
                value={formData.address}
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mr-2 mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="city"
                type="text"
                placeholder="City"
                name="city"
                required
                onChange={handleChange}
                value={formData.city}
              />
            </div>

            <div className="ml-2 mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="code"
              >
                Postal Code
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="code"
                type="number"
                placeholder="Postal Code"
                name="code"
                required
                onChange={handleChange}
                value={formData.code}
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mr-2 mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="phone"
                type="number"
                placeholder="Phone"
                name="phone"
                required
                onChange={handleChange}
                value={formData.phone}
              />
            </div>

            <div className="ml-2 mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>
          <div className="mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="complaint"
            >
              Complaint
            </label>
            <textarea
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              id="complaint"
              placeholder="Complaint"
              name="complaint"
              required
              rows={10}
              onChange={handleChange}
              value={formData.complaint}
            />
          </div>

          {/* <div className="mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="Soil"
            >
              Soil Type
            </label>
            <select
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              id="Soil"
              name="Soil"
              required
              onChange={handleChange}
              value={formData.Soil}
            >
              <option value="0">Black</option>
              <option value="1" selected>
                Clayey
              </option>
              <option value="2">Loamy</option>
              <option value="3">Red</option>
              <option value="4">Sandy</option>
            </select>
          </div> */}

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isDisabled}
              className="w-96 h-12 flex justify-center items-center text-md text-white bg-blueGray-800 hover:bg-blueGray-800 transition-all font-medium rounded-lg px-5 py-2.5 text-center"
            >
              {isLoading ? (
                <ReactLoading
                  type="bars"
                  color="#ffffff"
                  height={25}
                  width={25}
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>

          {output ? (
            <div className="px-6 py-4 border-0 rounded relative my-4">
              <div
                class="bg-blue-100 border-t-4 border-blue-500 rounded-b flex text-blue-900 px-4 py-3 shadow-md"
                role="alert"
              >
                <div class="flex">
                  <div class="py-1">
                    <svg
                      class="fill-current h-6 w-6 text-blue-500 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center">
                  <p class="font-bold text-xl">Recommended Fertilizer: </p>
                  <p class="text-lg ml-4">{output.name}</p>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <img className="w-96" src={output.img} alt="" />
              </div>
              <div className="mt-4">
                <p class="font-bold text-xl">How to use: </p>
                <p class="text-lg">{output.how_to_use}</p>
              </div>
              <div className="flex justify-center">
                <span className="inline-block align-middle">
                  <b className="capitalize"> </b>{" "}
                </span>
              </div>
              <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                <span></span>
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <img src="https://res.cloudinary.com/sarveshp46/image/upload/v1673158646/nothing-here_w38mzj.webp" />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FileComplaint;
