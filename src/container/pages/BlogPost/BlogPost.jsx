import React, { Fragment, Component } from "react";
import "../BlogPost/BlogPost.css";
import Post from "../../../components/Post/Post";
import axios from "axios";
import Api from "../../../services";


class BlogPost extends Component {

    state = {
        post: [],
        comments: [],
        isUpdate: false,
        formInput: {
            id: 1,
            title: '',
            body: '',
            userId: 1,
        }
    }

    getPostAPI = () => {
        Api.getNewsBloc().then(res => {
            this.setState({
                post: res
            });
        })
        // Api.getComments().then(res => {
        //     this.setState({
        //         comments: res
        //     })
        // })
    }

    putDataPostAPI = () => {
        axios.put('http://localhost:3001/posts/' + this.state.formInput.id, this.state.formInput).then((result) => {
            console.log(result);
            this.setState({
                isUpdate: false,
                formInput: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1,
                }
            });
            this.getPostAPI();
        })
    }

    handleRemove = (data) => {
        console.log('data', { data });
        axios.delete('http://localhost:3001/posts/' + data).then((result) => {
            this.setState({
                post: this.state.post.filter(post => post.id !== data)
            });
        })
    }

    handleUpdate = (data) => {
        this.setState({
            formInput: data,
            isUpdate: true,
        });
    }

    createPost = () => {
        Api.postNewBloc(this.state.formInput).then((result) => {
            console.log(result);
            this.setState({
                formInput: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1,
                }
            });
            this.getPostAPI();
        });
    }

    handleOnChange = (event) => {
        let formInputTemp = { ...this.state.formInput };
        let timeStamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formInputTemp['id'] = timeStamp;
        }
        formInputTemp[event.target.name] = event.target.value;
        this.setState({
            formInput: formInputTemp
        });
    }

    handleDetail = (id) => {
        this.props.history.push('/details/' + id);
    }

    handleSubmit() {
        if (this.state.isUpdate) {
            if (this.state.formInput['title'] !== '' && this.state.formInput['body'] !== '') {
                this.putDataPostAPI();
            } else {
                alert('Data tidak boleh kosong');
            }
        } else {
            if (this.state.formInput['title'] !== '' && this.state.formInput['body'] !== '') {
                this.createPost();
            } else {
                alert('Data tidak boleh kosong');
            }
        }
    }

    componentDidMount() {
        this.getPostAPI();
    }

    render() {

        return (
            <Fragment>
                <p>Halaman Blog Post</p>
                <hr />
                <p className="section-title">Membuat Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Judul</label>
                    <input type="text" name="title" placeholder="add title" value={this.state.formInput.title} onChange={this.handleOnChange} />
                    <label htmlFor="body">Deskripsi</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" value={this.state.formInput.body} onChange={this.handleOnChange} />
                    <button className="btn-submit" onClick={() => this.handleSubmit()}>Simpan</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return (
                            <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;