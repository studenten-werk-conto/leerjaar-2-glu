import Admin from "../admin.styled";

function CreateBlog(){
    return(
        <div>
            <h1>create a blog post</h1>

            <Admin.Form method="post" action="/api/admin/createblog">
                <input type="text" placeholder="title" name="title"></input>
                <input type="file" placeholder="file" name="file"></input>
                <input type="text" placeholder="body" name="body"></input>
                <input type="submit"></input>
            </Admin.Form>
        </div>
    )
}

export default CreateBlog;