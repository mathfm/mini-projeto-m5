import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./pages/Skills/Skills";
import Post from "./pages/Post/Post";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import PostComentario from "./pages/PostComentario/PostComentario";
import Container from "./components/container/container.component";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/:post_id/comment" element={<PostComentario />} />
                    <Route path="/posts" element={<Post />} />
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}