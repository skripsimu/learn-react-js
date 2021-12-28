import { Get } from "./Get";
import { Post } from "./Post";

/// POST
const postNewBloc = (data) => Post('posts', data);

/// GET
const getNewsBloc = () => Get('posts?_sort=id&_order=desc');
const getComments = () => Get('comments', true);

const Api = {
    getNewsBloc,
    getComments,
    postNewBloc
}

export default Api;