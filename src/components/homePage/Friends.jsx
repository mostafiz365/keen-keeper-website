import { use } from "react";
import FriendCard from "../ui/FriendCard";

const Friends = ({fetchFriends}) => {
    const friends = use(fetchFriends);
    

    return (
        <div className='bg-[#F8FAFC]'>
            <div className="max-w-10/12 mx-auto pt-10 pb-20">

            <div>
                <h3 className='text-2xl font-semibold text-[#1F2937] pb-5'>Your Friends</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                {
                    friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Friends;