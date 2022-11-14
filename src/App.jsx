import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ContactPage from './pages/Contact.jsx';
import HomePage from './pages/Home.jsx';
import PostsPage from './pages/Posts.jsx';
import PrivacyPage from './pages/PrivacyPolicy.jsx';
import { connect } from 'react-redux';
import Layout from './components/Layout';
import PostPage from './pages/Post.jsx';
import AboutPage from './pages/About.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/posts">
            <Route index element={<PostsPage />} />
            <Route path="*" element={<PostPage />} />
          </Route>
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default connect()(App);
