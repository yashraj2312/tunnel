import "./landingPage.css"
import { Link } from "react-router-dom"

export const landingPage =()=>{
    return(
        <div className="landingPage-container">
            <section className="left-section text-left">
                <h1>
                    <span className="primary-text-color">Tunnel</span>
                </h1>
                <div className="content  px-8">
                <h6 className="secondary-text-color">Tunnel your</h6>
                <h5 className="primary-text-color">Thoughts</h5>
                <p className="py-8">
                    Have a thought? Just share with friends.
                </p>
                </div>
            </section>
        </div>
    )
}