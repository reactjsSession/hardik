import { useState, useEffect } from 'react';
import './table.css';
function Table(){
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState('');
    const itemsPerPage = 5;
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(err => console.error('Error fetching data:', err));
    },[]);
    const filteredData = data.filter(item =>{
        return(
            item.name.toLowerCase().includes(keyword.toLowerCase()) ||
            item.email.toLowerCase().includes(keyword.toLowerCase()) ||
            item.id.toString().includes(keyword)
        );
    });
    const indexStart=(page-1)*itemsPerPage;
    const visibleData=filteredData.slice(indexStart,indexStart+itemsPerPage);
    const goToNext=()=>{
        if (page*itemsPerPage<filteredData.length) {
            setPage(prev=>prev+1);
        }
    };
    const goToPrev =()=>{
        if(page>1){
            setPage(prev=>prev-1);
        }
    };
    const handleSearch=(e)=>{
        setKeyword(e.target.value);
        setPage(1);
    };
    return (
        <>
            <input
                type="text"
                placeholder="Search for Something"
                value={keyword}
                onChange={handleSearch}
                id="search"
            />
            <table id="table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {visibleData.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </table>
            <div id="pager">
                <button onClick={goToNext}> Next Page </button>
                <button onClick={goToPrev}> Prev Page </button>
            </div>
        </>
    );
}
export default Table;
