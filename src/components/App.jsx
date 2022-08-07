import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import UpdateProfile from "./UpdateProfile";
import { Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <h1>OOPS! There's nothing here!</h1>
                  <Link to="/dashboard">Go to Home</Link>
                </main>
              }
            />
          </Routes>
          {/* <Signup /> */}
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
