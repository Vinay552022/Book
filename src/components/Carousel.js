import "../Carousel.css"
export default function Carousel(){
    return(
        <div id="bookCarousel" className="carousel slide mt-4 shadow rounded" data-bs-ride="carousel" >
        <ol className="carousel-indicators d-none">
          <li
            data-bs-target="#bookCarousel"
            data-bs-slide-to={0}
            className="active"
          />
          <li data-bs-target="#bookCarousel" data-bs-slide-to={1} />
          <li data-bs-target="#bookCarousel" data-bs-slide-to={2} />
        </ol>
        <div className="carousel-inner p-3">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Book 1" />
            <div className="carousel-caption d-none d-md-block">
             
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/1458805217/photo/a-book-left-open-in-the-classroom.jpg?s=2048x2048&w=is&k=20&c=2xTL9FVLlVe9YvX-MN3Yxm5FiRsma9fMDqfQJHE_DX0=" className="d-block w-100" alt="Book 2" />
            <div className="carousel-caption d-none d-md-block">
              
            </div>
          </div>
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bookCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bookCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    )
}