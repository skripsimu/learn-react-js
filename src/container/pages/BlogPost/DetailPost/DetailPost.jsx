import axios from "axios";
import React, { Component } from "react";
import "./DetailPost.css";

class DetailPost extends Component {

    state = {
        post: {
            title: '',
            body: '',
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        axios.get('http://localhost:3001/posts/' + id).then((res) => {
            console.log(res);
            this.setState({
                post: res.data
            });
        })
    }

    render() {
        return (
            <div className="p-detail-post">
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-body">{this.state.post.body}</p>
            </div>
        )
    }
}
export default DetailPost;