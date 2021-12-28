import React from "react";

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="https://img.freepik.com/free-vector/modern-youtube-thumbnail-with-comic-art-background_1361-2738.jpg?size=626&ext=jpg" alt="" />
            </div>
            <div className="content">
                <p className="title" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;