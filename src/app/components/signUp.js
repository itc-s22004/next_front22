const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('', { // `/api/signup`はバックエンドで設定するAPIエンドポイント
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, password }), // ユーザー入力値をJSON形式で送信
        });

        if (response.ok) {
            const data = await response.json();
            console.log('SignUp Success:', data);
            // サインアップ成功後の処理（例：サインインページへのリダイレクト）
        } else {
            // サーバーからのエラーレスポンス処理
            console.error('SignUp Failed:', await response.text());
        }
    } catch (error) {
        console.error('SignUp Error:', error);
    }

    return (
        <>
            <p>test</p>
        </>
    )
};