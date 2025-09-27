import { useState } from "react"
import { httpClient } from "./lib/http-Client"

export const LogIn = () => {
    const [formData, setFormData] = useState({
        emailId: "",
        password: ""
    })

    const handleLogin = async () => {
        console.log(formData)
        const res = await httpClient.post('/user/login', formData)
        console.log(res.data)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div className="flex justify-center py-16">
            <div className="card bg-base-300 w-96 shadow-sm items-center gap-4 pt-4">
                <div><span className="tex">Log In</span></div>
                <div className="flex-col space-y-4">
                    <div>
                        <div>
                            <label>Email</label>
                        </div>
                        <div className="bg-base-100 shadow-sm rounded-2xl">
                            <input
                                className="w-full px-4 py-2 rounded-2xl"
                                type="email"
                                name="emailId"
                                placeholder="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Password</label>
                        </div>
                        <div className="bg-base-100 shadow-sm rounded-2xl">
                            <input
                                className="w-full px-4 py-2 rounded-2xl"
                                type="password"
                                name="password"
                                placeholder="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={() => handleLogin()}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}