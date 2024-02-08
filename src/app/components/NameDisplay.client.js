const NameDisplay = () => {
    const [name, setName] = useState('Loading...');

    useEffect(() => {
        const fetchName = async () => {
            try {
                const response = await fetch('http://localhost:3030/users/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setName(data.name); // 仮にレスポンスの形式が { name: '名前' } だと仮定
            } catch (error) {
                setName('Failed to load name');
                console.error('Failed to fetch name:', error);
            }
        };

        fetchName();
    }, []);

    return <div>{name}</div>;
};

export default NameDisplay;
