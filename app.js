// استيراد المكتبات
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// تهيئة Express وقراءة المتغيرات البيئية
dotenv.config();
const app = express();
app.use(express.json());

// الاتصال بقاعدة البيانات
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('تم الاتصال بقاعدة البيانات'))
    .catch((error) => console.log('خطأ في الاتصال:', error));

// تشغيل الخادم
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`الخادم يعمل على المنفذ ${PORT}`);
});

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>منصة التواصل الاجتماعي</h1>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/" exact>
                        <h2>مرحبًا بك في منصة الاوتاكو انمي</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

import Profile from './pages/Profile';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>منصة التواصل الاجتماعي</h1>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/" exact>
                        <h2>مرحبًا بك في منصة الاوتاكوا انمي</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

import Post from './components/Post';
import PostList from './components/PostList';

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <h1>منصة التواصل الاجتماعي</h1>
                </header>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/posts" exact>
                        <Post />
                        <PostList />
                    </Route>
                    <Route path="/" exact>
                        <h2>مرحبًا بك في منصة الاوتاكو انمي</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

import Notifications from './components/Notifications';

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <h1>منصة التواصل الاجتماعي</h1>
                    <Notifications />
                </header>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/posts" exact>
                        <Post />
                        <PostList />
                    </Route>
                    <Route path="/" exact>
                        <h2>مرحبًا بك في منصة الاوتاكو انمي</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
