import { Body } from "./body"
import { BrowserRouter, Route, Routes } from "react-router"
import { LogIn } from "./login"
import { Userprofile } from "./user-profile"

export const App = () => {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />} >
            <Route path="/login" element={<LogIn />} />
            <Route path="/user-profile" element={<Userprofile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

