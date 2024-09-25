import React, { useEffect, useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    const [record, setRecord] = useState('')
    const [searchName, setSearchName] = useState('')    

    useEffect(() => {
        let allData = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(allData)
    }, [])

    // searchName start 

    // useEffect(()=>{
    //     if(searchName != '' ) {
    //         const searchData = record.filter((val)=>{
    //             return val.bookname.toLowerCase().includes(searchName.toLowerCase())
    //         })
    //         setMovieList(searchData)
    //     }
    //     else {
    //         setMovieList(allMovieData)
    //     }
    // },[searchName])

    // searchName end

    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="logo">
                                <Link to={'/'}>
                                    <img src="../img/logo.svg" alt="" />
                                </Link>
                            </div>
                            <div className="menu flex">
                                <div className="search">
                                    <input type="text" placeholder='search' onChange={(e) => setSearchName(e.target.value)} value={searchName} />
                                </div>
                                <div className="browse">
                                    <select>
                                        <option value="browse" selected >Browse</option>
                                        <option value="sbject">Subject</option>
                                        <option value="tranding">Tranding</option>
                                        <option value="list">List</option>
                                        <option value="collections">Collections</option>
                                    </select>
                                </div>
                                <div className="add-books">
                                    <Link to={'/addBook'}>
                                        <button>Add new book</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header