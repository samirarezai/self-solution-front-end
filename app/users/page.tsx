const UsersPage = async () => {
    const data = await fetch('http://localhost:8001/users')
    const users = await data.json()
    console.log(users)
    return <div>
        {users.map((user: any) => (
            <div key={user.username}>{user.username}</div>
        ))}
    </div>;
};

export default UsersPage;