import Layout from "./Components/CustomHooks/Layout";

const Blog =()=>{
    return(
        <Layout>
           
            <div className="container-1">
            <h1>News Feeds</h1>
                <p><i className="bi bi-house-add" style={{fontSize:"2rem"}}> <a href="/">Home </a> <i className="bi bi-arrow-right"> <span>Blog</span></i></i></p>
                <div className="row">
                    <div className="col">

               
                <img src="blog_image_1.png" style={{height:"500px", width:"600px"}}  alt="blog_image" className="blog-img"></img>
                
                </div>
                
                <div className="col">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam a laborum quibusdam ab accusamus magni quas saepe tenetur natus doloremque neque veritatis, accusantium ducimus culpa nihil excepturi enim ipsum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam a laborum quibusdam ab accusamus magni quas saepe tenetur natus doloremque neque veritatis, accusantium ducimus culpa nihil excepturi enim ipsum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam a laborum quibusdam ab accusamus magni quas saepe tenetur natus doloremque neque veritatis, accusantium ducimus culpa nihil excepturi enim ipsum.
                    </p>
                </div>
                </div>
            </div>

            <div className="container-2">
                <div className="row">
                    <div className="col">

               
                <img src="blog_image_2.png" style={{height:"500px", width:"600px"}}  alt="blog_image" className="blog-img"></img>
                
                </div>
                
                <div className="col-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam a laborum quibusdam ab accusamus magni quas saepe tenetur natus doloremque neque veritatis, accusantium ducimus culpa nihil excepturi enim ipsum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam a laborum quibusdam ab accusamus magni quas saepe tenetur natus doloremque neque veritatis, accusantium ducimus culpa nihil excepturi enim ipsum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam a laborum quibusdam ab accusamus magni quas saepe tenetur natus doloremque neque veritatis, accusantium ducimus culpa nihil excepturi enim ipsum.
                    </p>
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default Blog;