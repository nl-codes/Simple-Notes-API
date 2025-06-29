import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Createpage from "./pages/Createpage";
import Editpage from "./pages/Editpage";
import Viewpage from "./pages/ViewPage";
function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/notes/create" element={<Createpage />} />
                        <Route path="/notes/edit/:id" element={<Editpage />} />
                        <Route path="/notes/view/:id" element={<Viewpage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
