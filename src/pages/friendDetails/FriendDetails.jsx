import React, { useContext } from "react";
import { BsArchive } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdOutlineTextsms } from "react-icons/md";
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import { FriendContext } from "../../context/FriendContext";

const FriendDetails = () => {
  const { id } = useParams();
  const friends = useLoaderData();

  const {handleCallBtn, handleSmsBtn, handleVideoBtn} = useContext(FriendContext);

  const selectedFriend = friends.find((friend) => friend.id == id);
  console.log(selectedFriend);

  return (
    <div className="bg-[#F8FAFC] py-20">
      <div className="max-w-10/12 mx-auto flex gap-5">
        <div className="w-[35%] space-y-4">
          <div className="p-6 bg-white rounded-lg space-y-3 shadow-sm">
            <div>
              <img
                className="h-20 w-20 rounded-full object-cover mx-auto"
                src={selectedFriend.picture}
                alt=""
              />
            </div>
            <div className="text-center space-y-2.5">
              <h2 className="font-semibold text-xl text-[#1F2937]">
                {selectedFriend.name}
              </h2>
              <span
                className={`text-sm font-medium text-white p-2 rounded-full ${selectedFriend.status === "overdue" && "bg-[#EF4444]"} ${selectedFriend.status === "almost due" && "bg-[#EFAD44]"} ${selectedFriend.status === "on-track" && "bg-[#244D3F]"}`}
              >
                {selectedFriend.status}
              </span>
              <div className="flex gap-2.5 justify-center pt-4">
                {selectedFriend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="font-semibold text-sm text-[#244D3F] bg-[#CBFADB] px-3 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-medium text-[#64748B]">{selectedFriend.bio}</p>
              <p className="text-[#64748B]">{selectedFriend.email}</p>
            </div>
          </div>
          <div className="space-y-2.5">
                <button className="p-4 bg-white rounded-md w-full font-medium text-[#1F2937] flex justify-center items-center gap-1 shadow-sm"><RiNotificationSnoozeLine />Snooze 2 weeks</button>
                <button className="p-4 bg-white rounded-md w-full font-medium text-[#1F2937] flex justify-center items-center gap-1 shadow-sm"><BsArchive />Archive</button>
                <button className="p-4 bg-white rounded-md w-full font-medium text-red-500 flex justify-center items-center gap-1 shadow-sm"><RiDeleteBin5Line />Delete</button>
            </div>
        </div>
        <div className="w-[65%] space-y-7">
            <div className="grid grid-cols-3 gap-6 text-center">
                <div className='px-4 py-8 rounded-lg bg-white space-y-2 shadow-sm'>
                    <h3 className='text-3xl font-semibold text-[#244D3F]'>{selectedFriend.days_since_contact}</h3>
                    <p className='text-lg text-[#64748B]'>Days Since Contact</p>
                </div>
                <div className='px-4 py-8 rounded-lg bg-white space-y-2 shadow-sm'>
                    <h3 className='text-3xl font-semibold text-[#244D3F]'>{selectedFriend.goal}</h3>
                    <p className='text-lg text-[#64748B]'>Goal (Days)</p>
                </div>
                <div className='px-4 py-8 rounded-lg bg-white space-y-2 shadow-sm'>
                    <h3 className='text-3xl font-semibold text-[#244D3F]'>{selectedFriend.next_due_date}</h3>
                    <p className='text-lg text-[#64748B]'>Next Due</p>
                </div>
            </div>
            <div>
                <div className='p-6 rounded-lg bg-white space-y-4 shadow-sm'>
                    <div className="flex justify-between items-center">
                        <h4 className='text-xl font-medium text-[#244D3F]'>Relationship Goal</h4>
                        <button className="font-medium text-sm text-[#1F2937] p-2 bg-[#F8FAFC] rounded-sm">Edit</button>
                    </div>
                    <p className='text-lg text-[#64748B]'>Connect every <span className="font-bold text-[#1F2937] text-lg">{selectedFriend.goal} days</span></p>
                </div>
            </div>
            <div className='p-6 rounded-lg bg-white space-y-4 shadow-sm'>
                <h4 className='text-xl font-medium text-[#244D3F]'>Quick Check-In</h4>
                <div className="grid grid-cols-3 gap-4">
                    <button onClick={() => handleCallBtn(selectedFriend)} className="p-4 rounded-lg bg-[#F8FAFC] text-lg text-[#1F2937] flex flex-col justify-center items-center border border-[#E9E9E9] gap-2 cursor-pointer hover:bg-blue-500 duration-300 hover:text-white"><FiPhoneCall />Call</button>
                    <button onClick={()=> handleSmsBtn(selectedFriend)} className="p-4 rounded-lg bg-[#F8FAFC] text-lg text-[#1F2937] flex flex-col justify-center items-center border border-[#E9E9E9] gap-2 cursor-pointer hover:bg-blue-500 duration-300 hover:text-white"><MdOutlineTextsms />Text</button>
                    <button onClick={() => handleVideoBtn(selectedFriend)} className="p-4 rounded-lg bg-[#F8FAFC] text-lg text-[#1F2937] flex flex-col justify-center items-center border border-[#E9E9E9] gap-2 cursor-pointer hover:bg-blue-500 duration-300 hover:text-white"><GoDeviceCameraVideo />Video</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
