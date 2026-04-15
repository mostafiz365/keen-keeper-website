import React, { useContext, useState } from "react";
import { FriendContext } from "../../context/FriendContext";
import CallImg from "../../assets/images/call.png";
import SmsImg from "../../assets/images/text.png";
import VideoImg from "../../assets/images/video.png";
import { IoIosArrowDown } from "react-icons/io";

const Timeline = () => {
  const { calling, sms, video } = useContext(FriendContext);
  const [filter, setFilter] = useState("all");

  const getFilteredData = () => {
    if (filter === "call") {
      return calling.map((item) => ({ ...item, type: "call" }));
    }

    if (filter === "text") {
      return sms.map((item) => ({ ...item, type: "text" }));
    }

    if (filter === "video") {
      return video.map((item) => ({ ...item, type: "video" }));
    }

    return [
      ...calling.map((item) => ({ ...item, type: "call" })),
      ...sms.map((item) => ({ ...item, type: "text" })),
      ...video.map((item) => ({ ...item, type: "video" })),
    ];
  };

  const filteredData = getFilteredData();

  return (
    <div className="py-20 bg-[#F8FAFC]">
      <div className="max-w-10/12 mx-auto space-y-6">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-[#1F2937]">Timeline</h2>
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 text-lg text-[#64748B] border border-[#E9E9E9] bg-transparent shadow-sm p-4 rounded-lg items-center gap-20"
            >
              Filter timeline <IoIosArrowDown />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu rounded-box z-1 w-64 p-2 bg-base-100 shadow-sm"
            >
              <li className="text-lg text-[#64748B]">
                <a onClick={() => setFilter("call")}>Call</a>
              </li>
              <li className="text-lg text-[#64748B]">
                <a onClick={() => setFilter("text")}>Text</a>
              </li>
              <li className="text-lg text-[#64748B]">
                <a onClick={() => setFilter("video")}>Video Call</a>
              </li>
              <li className="text-lg text-[#64748B]">
                <a onClick={() => setFilter("all")}>All</a>
              </li>
            </ul>
          </div>
        </div>
        {filteredData.length == 0 ? (
          <h2 className="text-6xl font-semibold text-[#1F2937] text-center py-20">
            No Data Here
          </h2>
        ) : (
          <div>
            <div className="space-y-6">
              {filteredData.map((data, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white flex items-center gap-5 w-full shadow-sm"
                >
                  <img
                    src={
                      data.type === "call"
                        ? CallImg
                        : data.type === "text"
                          ? SmsImg
                          : VideoImg
                    }
                    alt=""
                  />
                  <div>
                    <h3 className="text-xl font-medium text-[#244D3F]">
                      {data.type}{" "}
                      <span className="text-lg text-[#64748B]">
                        with {data.name}
                      </span>
                    </h3>
                    <p className="font-medium text-[#64748B]">
                      {new Date().toISOString().split("T")[0]}
                    </p>
                  </div>
                </div>
              ))}
              {/* {sms.map((data, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white flex items-center gap-5 w-full shadow-sm"
                >
                  <img src={SmsImg} alt="" />
                  <div>
                    <h3 className="text-xl font-medium text-[#244D3F]">
                      Text{" "}
                      <span className="text-lg text-[#64748B]">
                        with {data.name}
                      </span>
                    </h3>
                    <p className="font-medium text-[#64748B]">
                      {data.next_due_date}
                    </p>
                  </div>
                </div>
              ))}
              {video.map((data, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white flex items-center gap-5 w-full shadow-sm"
                >
                  <img src={VideoImg} alt="" />
                  <div>
                    <h3 className="text-xl font-medium text-[#244D3F]">
                      Video{" "}
                      <span className="text-lg text-[#64748B]">
                        with {data.name}
                      </span>
                    </h3>
                    <p className="font-medium text-[#64748B]">
                      {data.next_due_date}
                    </p>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
