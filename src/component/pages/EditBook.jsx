import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useNavigate, useParams } from 'react-router-dom'

const EditBook = () => {
    const [img, setImg] = useState('')
    const [bookname, setBookname] = useState('')
    const [author, setAuthor] = useState('')
    const [publishd, setPublishd] = useState('')
    const [publisher, setPublisher] = useState('')
    const [record, setRecord] = useState([])
    let { id } = useParams()
    let navigate = useNavigate()


    // edit book start 

    useEffect(() => {
        let oldData = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldData)

        let editData = oldData.find((val) => {
            return val.id == id
        })

        setImg(editData.img)
        setBookname(editData.bookname)
        setAuthor(editData.author)
        setPublishd(editData.publishd)
        setPublisher(editData.publisher)

    }, [])

    // edit book end

    // update book start

    const handleSubmit = (e) => {
        e.preventDefault()

        let updateData = record.map((val) => {
            if (val.id == id) {
                return {
                    ...val,
                    img: img,
                    bookname: bookname,
                    author: author,
                    publishd: publishd,
                    publisher: publisher
                }
            }
            return val
        })

        setRecord(updateData)

        localStorage.setItem('user', JSON.stringify(updateData))

        alert("Book successfully updated")

        navigate(`/viewBook/ ${id}`)

    }

    // update book end






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
                                        <h2>Edit new book</h2>
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
                                        <button type='submit'>Edit book</button>
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

export default EditBook