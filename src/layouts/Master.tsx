import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Master = () => {
    return (
        <div>
            {/* Header */}
            <section>
                <Header />
            </section>

            {/* Navigation Bar */}
            <section>
                <Navbar />
            </section>

            {/* Main Content */}
            <main className="container mt-4">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default Master