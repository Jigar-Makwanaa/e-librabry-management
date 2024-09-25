import React, { useEffect, useState } from 'react'
import Header from './Header'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {

    const [record, setRecord] = useState([])

    useEffect(() => {
        let allRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(allRecord)
    }, [])

    return (
        <>
            <Header />

            {/* home section start  */}

            <div className="home-section">
                <div className="container">
                    <div className="row">
                        <div className="head">
                            <h2>Welcome to Open Library</h2>
                        </div>
                        <div className="main flex">
                            {
                                record.map((val) => {
                                    return (
                                        <Link to={`/viewBook/${val.id}`}>
                                            <div className="box">
                                                <div className="content">
                                                    <div className="img">
                                                        <img src={val.img} alt="" />
                                                    </div>
                                                    <div className="btn">
                                                        <button>read</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* home section end */}
        </>
    )
}

export default Home