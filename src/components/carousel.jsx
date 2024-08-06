import { FaArrowUpRightFromSquare, FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaJs } from "react-icons/fa6";
import flavorfiesta from "../assets/images/flavorfiesta.png";

const Carousel = () => {
    return (
        <div className="carousel slide mt-5" id="projectCarousel" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="d-flex justify-content-center">
                    <div className="card w-50">
                        <h5 className="card-header">Car</h5>
                        <div className="card-body">
                            <img src={flavorfiesta} alt="Flavorfiesta Bites" className='card-img-top w-100 mb-3' />
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Laborum omnis quis libero! Quam veniam, voluptatibus repellat nisi quod praesentium rem,
                                mollitia qui numquam illum modi unde recusandae quisquam laborum corporis.
                            </p>
                        </div>
                        <div className="card-footer p-2 d-flex justify-content-between">
                            <div>
                                <button className="btn text-center me-1">View Live Project <FaArrowUpRightFromSquare /></button>
                                <button className="btn text-center ms-1">View Source <FaGithub /></button>
                            </div>
                            <div>
                                <FaHtml5 className="icon html" />
                                <FaCss3Alt className="icon css" />
                                <FaJs className="icon javascript" />
                                <FaBootstrap className="icon bootstrap" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
}

export default Carousel