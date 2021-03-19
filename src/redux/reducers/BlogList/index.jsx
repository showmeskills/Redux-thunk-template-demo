import {START_AXIOS_BLOG_LIST,AXIOS_SUCCESS_BLOG_LIST,AXIOS_FAILED_BLOG_LIST} from '../../actions/BlogList/actionType'

const initBlogList = {
    list:[
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
    ],
    isLoading:false,
    errMsg:'',
}


export const BlogList = (state=initBlogList, action) =>{
    switch(action.type){
        case START_AXIOS_BLOG_LIST:
            return{
                ...state,
                isLoading:true,
            }
        case AXIOS_SUCCESS_BLOG_LIST:
            return{
                ...state,
                isLoading:false,
                list:action.preload.list,
                errMsg:'',
            }
        case AXIOS_FAILED_BLOG_LIST:
            return{
                ...state,
                isLoading:false,
                errMsg:action.err.err,
            }
        default:
            return state
    }
}