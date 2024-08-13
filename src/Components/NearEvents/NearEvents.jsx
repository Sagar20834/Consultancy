import React from "react";
import kathmandu from "../../assets/kathmandu.png";
import pokhara from "../../assets/pokhara.png";
import butwal from "../../assets/butwal.jpg";

const NearEvents = () => {
  return (
    <>
      <div className="my-8">
        <div>
          <h1 className="text-3xl text-primary-dark text-center mt-4">
            Find events near you{" "}
          </h1>
        </div>
        <div>
          <h1 className="text-2xl text-primary-light text-center mt-4 ">
            From your hometown to the world: Find study abroad events in your
            city today
          </h1>
        </div>

        <div className="grid grid-cols-3 items-center mx-24 my-6">
          <div className="flex flex-col max-w-80">
            <img
              src={kathmandu}
              alt="kathamndu"
              className=" border-primary-light border   rounded-lg"
            />
            <h2 className="text-xl text-primary-dark text-center mt-2">
              Kathmandu
            </h2>
          </div>
          <div className="flex flex-col max-w-80 ">
            <img
              src={pokhara}
              alt="kathamndu"
              className=" border-primary-light border   rounded-lg"
            />
            <h2 className="text-xl text-primary-dark text-center mt-2">
              Pokhara
            </h2>
          </div>
          <div className="flex flex-col max-w-80 ">
            <img
              src={butwal}
              alt="kathamndu"
              className=" border-primary-light border   rounded-lg"
            />
            <h2 className="text-xl text-primary-dark text-center mt-2">
              Butwal
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default NearEvents;
