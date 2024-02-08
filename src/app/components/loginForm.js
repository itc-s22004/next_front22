"use client";
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // ログイン処理をここに実装
        // 例: fetch APIを使用してバックエンドにリクエストを送信
        console.log('Login Attempt:', username, password);
        // 成功または失敗に応じて適切なフィードバックをユーザーに提供
    };

    return (
        <div>
            <h1>ログイン</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">ユーザー名:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">パスワード:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">ログイン</button>
                </div>
            </form>
        </div>
    );
};

export default Login;