import Dashboard from "./pages/Dashboard";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { SharedView } from "./pages/SharedView";
import { ProtectedRoute } from "./components";

export default function App() {

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/nitify" element={<Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/public/nitify/share/:hash" element={<SharedView />} />
          <Route path="*" element={<SignUp />}/>

          
        </Routes>
        
      </BrowserRouter>

    </ThemeContextProvider>
  )
}