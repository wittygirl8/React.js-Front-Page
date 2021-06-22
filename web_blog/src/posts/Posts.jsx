import './post.css'

export default function Posts() {
    return (
        <div className='posts'>
            <div class="postTitle">
                {/* Blog entry*/}
                    <div class="postItem">
                        <div class="center">
                            <h2>TITLE HEADING</h2>
                            <h3>Title description, <span class="Topacity">May 2, 2016</span></h3>
                        </div>
                        <div class="center">
                            <img src="https://jooinn.com/images/girl-with-hat-1.jpg" alt="Girl Hat" class="image"/>
                            <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
                            magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <p class="w3-left"><button class="likeButton" ><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
                            <p class="w3-right"><button class="repliesButton" ><b>Replies  </b> <span class="white">1</span></button></p>
                            <div class="row">
                                <div class="column"></div>
                                <div class="column"></div>
                                <div class="column"></div>
                            </div>
                            <hr/>
                            <div class="commentItem">
                                    <img class="commentimg" src="https://png.pngtree.com/element_our/md/20180515/md_5afa55dcb7d8e.jpg"/>
                                    <div class="commentlistContentName">
                                        <h4 className="commentlistContent">George <span class="Topacity">May 3, 2015, 6:32 PM</span></h4>
                                        <br/>
                                        <span> Great blog post! Following</span>
                                    </div>
                                </div>
                            <div>
                            <p></p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="postTitle">
                    {/* Blog entry*/}
                    <div class="postItem">
                        <div class="center">
                            <h2>TITLE HEADING</h2>
                            <h3>Title description, <span class="Topacity">May 2, 2016</span></h3>
                        </div>
                        <div class="center">
                            <img src="https://blog.themancompany.com/wp-content/uploads/2016/05/a-man-in-hat-cigarette-smoke-179116.jpg" alt="Girl Hat" class="image"/>
                            <p><strong>Hats!</strong> The trend this summer is hats for men!</p>
                            <p>Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                            <p class="w3-left"><button class="likeButton" ><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
                            <p class="w3-right"><button class="repliesButton" ><b>Replies  </b> <span class="white">2</span></button></p>
                        </div>
                    </div>
                </div>

                <div class="postTitle">
                    {/* Blog entry*/}
                    <div class="postItem">
                        <div class="center">
                            <h2>TITLE HEADING</h2>
                            <h3>Title description, <span class="Topacity">April 7, 2016</span></h3>
                        </div>
                        <div class="center">
                            <img src="https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/models_.jpg" alt="Girl Hat" class="image"/>
                            <p><strong>Dont miss!</strong> The runway in New York City this weekend is gonna be legendary!</p>
                            <p>Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                            <p class="w3-left"><button class="likeButton" ><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
                            <p class="w3-right"><button class="repliesButton" ><b>Replies  </b> <span class="white">3</span></button></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
