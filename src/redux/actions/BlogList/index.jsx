import {START_AXIOS_BLOG_LIST,AXIOS_SUCCESS_BLOG_LIST,AXIOS_FAILED_BLOG_LIST} from './actionType'
import {getPosts} from '../../../service';


const startFetchBlogList=()=>({type:START_AXIOS_BLOG_LIST})
const axiosSuccessBlogList=(preload)=>({type:AXIOS_SUCCESS_BLOG_LIST,preload});
const axiosFailedBloglIST=(err)=>({type:AXIOS_FAILED_BLOG_LIST,err});


export const startAxios = ()=>dispatch=>{
        dispatch(startFetchBlogList())
        getPosts()
            .then(res=>{
                if(res.status === 200){
                    dispatch(axiosSuccessBlogList({
                        list:res.data
                    }))
                }else{
                    dispatch(axiosFailedBloglIST({
                        err:'there are something wrong'
                    }))
                }
            })
            .catch(err=>{
                dispatch(axiosFailedBloglIST(err))
            })
    
}





