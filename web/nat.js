cosnt FakeData = {
    {
        id: '1',
        username: 'A',
        password: '123456',
        fname: 'a',
        lname: 'a'
    },
    {
        id: '2',
        username: 'B',
        password: '123456',
        fname: 'b',
        lname: 'b'
    },
    {
        id: 3,
        username: 'C',
        password: '123456',
        fname: 'c',
        lname: 'c'
    }
}

const LoginPage = () => {
    const checkUser = (e) => {
        const username = FackData.findByIndex((f) => f.username === e.target.username)
        const pass = FackData.findByIndex((f) => f.password === e.target.password)
        
        if(username > -1 && pass > -1) {
            //ทำไรก็ทำไป
        } else {
            throw new Error ("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
        }
    }

    const data = xxx

    return (
        <div>
            <p>Username: </p>
            <input name="username"></input>
            <p>Username: </p>
            <input name="password"></input>
            <button onClick={checkUser}>Sumbit</button>
        </div>
    )
}

export default LoginPage()