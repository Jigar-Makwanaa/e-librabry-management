import React, { useEffect, useState } from 'react'
import './pages.css'
import Header from '../Header'
import { Link, useParams } from 'react-router-dom'

const ViewBook = () => {

    const { id } = useParams()
    const [record, setRecord] = useState([])
    const [viewRecord, setVirRecord] = useState([])

    useEffect(() => {
        let allRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(allRecord)


    }, [])

    useEffect(() => {

        let oneData = record.filter((val) => {
            return val.id == id
        })

        setVirRecord(oneData)

    }, [record])


    return (
        <>
            <Header />

            {/* ViewBook section start  */}

            <div className="view-book-section">
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="left-side">
                                {
                                    viewRecord.map((val) => {
                                        return (
                                            <div className="box">
                                                <div className="content">
                                                    <div className="img">
                                                        <img src={val.img} alt="" />
                                                    </div>
                                                </div>
                                                <div className="btn">
                                                    <button>Borrow</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="right-side">
                                {
                                    viewRecord.map((val) => {
                                        return (
                                            <>
                                                <div className="details flex">
                                                    <div className="title">
                                                        <h2>{val.bookname}</h2>
                                                        <h4>author :- {val.author}</h4>
                                                    </div>
                                                    <div className="edit">
                                                        <Link to={`/EditBook/${val.id}`}>
                                                            <button>Edit</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="publishd">
                                                    <div className="box">
                                                        <h3>publishd date</h3>
                                                        <h4>{val.publishd}</h4>
                                                    </div>
                                                    <div className="box">
                                                        <h3>publisher</h3>
                                                        <h4>{val.publisher}</h4>
                                                    </div>
                                                </div>
                                                <div className="book-details">
                                                    <h2>Book Details</h2>

                                                    <div className="description">
                                                        <h3>Open Library :- <span>OL26011895M</span></h3>
                                                        <h3>Internet Archive :- <span>stonegoblins0000mell</span></h3>
                                                        <h3>ISBN :- <span>139780340930489</span></h3>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ViewBook section end */}
        </>
    )
}

export default ViewBook