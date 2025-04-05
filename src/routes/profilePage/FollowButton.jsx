import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";

const followUser = async () => {
  const res = apiRequest.post(`/users/follow/:${username}`);
  return (await res).data;
};

const FollowButton = ({ isFollowing, username }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: followUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile", username] });
    },
  });

  return (
    <>
      <button onClick={() => mutation.mutate(username)} disabled={mutation.isPending} >
        {isFollowing ? "Unfollow" : "follow"}
      </button>
    </>
  );
};

export default FollowButton;