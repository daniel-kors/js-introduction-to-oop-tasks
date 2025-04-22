// BEGIN
export function getMutualFriends(user1, user2) {
  const friendsOfUser1 = user1.getFriends();
  const friendsOfUser2 = user2.getFriends();

  const mutualFriends = friendsOfUser1.filter(friend1 =>
      friendsOfUser2.some(friend2 => friend2.id === friend1.id)
  );

  return mutualFriends;
}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});