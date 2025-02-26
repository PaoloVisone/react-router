import axios from "axios";
import { useState, useEffect } from 'react';
// estrarre parametri dalla URL
import { useParams } from "react-router-dom";
// Uso link per paginazione (+ -)
import { Link } from "react-router-dom";



export default function SingleProduct() {

    // destructuring per ritornare l'id (proprietà id dell'oggetto param)
    const { id } = useParams();

    //  settaggio dello stato del componente
    const [post, setPost] = useState({});

    // funzione di chiamata verso la rotta store
    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPost(),
        [id])


    return (
        <>

            {/* Navigazione tra posts */}
            <nav>
                <Link to={`/posts/${parseInt(id) - 1}`}>+</Link>
                <Link to={`/posts/${parseInt(id) + 1}`}>-</Link>
            </nav>

            {/* Dettagli */}
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
            <p>{post.content}</p>
            <span>{post.tags.join(", ")}</span>

        </>
    );
}