import "./topbar.css"


export default function TopBar(){
    return(
        <div className="top">
            <div className="topLeft">
            <a href="#" className='topImg'><i className='topImg' class="fa fa-facebook-official"></i></a> 
            <a href="#" className='topImg'><i class="fa fa-instagram"></i></a>
            <a href="#" className='topImg'><i class="fa fa-snapchat"></i></a>
            <a href="#" className='topImg'><i class="fa fa-flickr"></i></a>
            <a href="#" className='topImg'><i class="fa fa-twitter"></i></a>
            <a href="#" className='topImg'><i class="fa fa-linkedin"></i></a>
            </div>
            <div className="topCenter"></div>
            <div className="topRight">
            <a href="#" className='topSearchImg'><i class="fa fa-search"></i></a>
            </div>
        </div>
    )
}