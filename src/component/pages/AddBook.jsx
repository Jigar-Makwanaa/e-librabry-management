import React, { useEffect, useState } from 'react'
import Header from '../Header'
import './pages.css'

const AddBook = () => {

    const [img, setImg] = useState('')
    const [bookname, setBookname] = useState('')
    const [author, setAuthor] = useState('')
    const [publishd, setPublishd] = useState('')
    const [publisher, setPublisher] = useState('')
    const [record, setRecord] = useState([])
    let id = Math.floor(Math.random() * 1000)


    useEffect(() => {
        let oldData = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldData)

    }, [])

    // add book start 

    const handleSubmit = (e) => {
        e.preventDefault()

        let obj = {
            id, img, bookname, author, publishd, publisher
        }

        let allRecord = [...record, obj]

        setRecord(allRecord)

        localStorage.setItem('user', JSON.stringify(allRecord))

        alert("Book successfully added")

        setImg('')
        setBookname('')
        setAuthor('')
        setPublishd('')
        setPublisher('')
    }

    // add book end




    return (
        <>
            <Header />

            {/* add-book section start  */}

            <div className="add-book-section">
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="form ">
                                <form action="" onSubmit={(e) => handleSubmit(e)}>
                                    <div className="head">
                                        <h2>add new book</h2>
                                    </div>
                                    <div className="book-img">
                                        <input type="text" placeholder='img-url' onChange={(e) => setImg(e.target.value)} value={img} />
                                    </div>
                                    <div className="book-name">
                                        <input type="text" placeholder='book name' onChange={(e) => setBookname(e.target.value)} value={bookname} />
                                    </div>
                                    <div className="author">
                                        <input type="text" placeholder='author name' onChange={(e) => setAuthor(e.target.value)} value={author} />
                                    </div>
                                    <div className="pub-date">
                                        <input type="number" placeholder='publishd date' onChange={(e) => setPublishd(e.target.value)} value={publishd} />
                                    </div>
                                    <div className="publisher">
                                        <input type="text" placeholder='publisher name' onChange={(e) => setPublisher(e.target.value)} value={publisher} />
                                    </div>
                                    <div className="btn">
                                        <button type='submit'>Add book</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* add-book section end */}
        </>
    )
}

export default AddBook