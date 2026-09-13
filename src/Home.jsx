import { Link } from "react-router-dom";
import './Home.css';
import Footer from "./Footer.jsx";

function Home() {
    return(
        <div>
            <div>
                <section className="first-section">
                    <p>Indigenous Heritage of Bohol · Philippines</p><br/>

                    <h1>The Eskaya<br/><span className="people">People</span></h1>

                    <p>Guardians of a living script and a deeply rooted culture,<br/> 
                    the Eskaya of southeastern Bohol carry one of the Philippines' most remarkable indigenous<br/>
                    legacies — a people, a language, and a writing system unlike any other.</p>

                    <div className="buttons">
                        <Link to="/community">Explore the Community</Link>
                        <Link to="/history">Explore the History</Link>
                    </div>
                </section>

                <main className="second-section">
                    <h3>Introduction</h3>
                    <h1>A Living Community with <br/>Deep Roots</h1>

                    <p>The Eskaya are an indigenous cultural community residing in the<br/> 
                        mountainous interior of southeastern Bohol, in the Visayas<br/>
                        region of the Philippines. Recognized under the Indigenous<br/>
                        Peoples' Rights Act (Republic Act No. 8371, 1997), they are <br/>
                        among the country's most studied indigenous groups — <br/>
                        particularly for their unique indigenous script and oral <br/>
                        traditions.
                    </p>

                    {/* <img src="./assets/introImage.jpg" className="sampleImage1" /> */}
                    {/* <div className="introImages">
                        <img src="./assets/introImage.jpg" className="sampleImage1" />
                        <img src="./assets/eskaya.jpg" className="sampleImage2" />
                    </div> */}

                    <p>
                        Unlike many indigenous groups whose writing systems have <br/>
                        been lost to colonial history, the Eskaya possess and actively use <br/>
                        a writing system distinct from both the Latin alphabet and other <br/>
                        Philippine scripts. This script, along with their oral traditions, <br/>
                        myths, and community practices, continues to be transmitted <br/>
                        across generations.
                    </p>

                    <p>
                        This website presents documented and verifiable information <br/>
                        about the Eskaya based on academic publications, government <br/>
                        records, and cultural documentation, in the spirit of respectful <br/>
                        and accurate heritage presentation.<br/>
                    </p>
                </main>

                <section className="third-section">
                    <h1 className="title">Summarization</h1>

                    <div className="summary">

                        <div className="location">
                            <hr></hr>
                            <h2>Southeastern Bohol</h2>
                            <p>Philippines</p>
                            <h5>LOCATION</h5>
                        </div>

                        <div className="recognition">
                            <hr></hr>
                            <h2>Under IPRA</h2>
                            <p>R.A. 8371, 1997</p>
                            <h5>RECOGNITION</h5>
                        </div>

                        <div className="writing">
                            <hr></hr>
                            <h2>Eskaya Script</h2>
                            <p>Indigenous syllabary</p>
                            <h5>WRITING SYSTEM</h5>
                        </div>
                        
                        <div className="region">
                            <hr></hr>
                            <h2>Region VII</h2>
                            <p>Central Visayas</p>
                            <h5>REGION</h5>
                        </div>
                    </div>
                </section>

                <section className="fourth-section">
                    <p>What You Will Find Here</p>
                    <h1>Explore the Eskaya</h1>

                    <div className="first-three">
                        <div className="community">
                            <Link to="/community">The Community</Link>
                            <p>Profile, geograohic location, demographic <br/>
                            information, and the identity of the Eskaya 
                            people.</p>
                        </div>

                        <div className="history">
                            <Link to="/history">History and Heritage</Link>
                            <p>Origin, customs, traditions, beliefs, arts, <br/>
                            music, clothing, and cultural expressions.</p>
                        </div>

                        <div className="language">
                            <Link to="/language">Language and Knowledge</Link>
                            <p>The eskaya script, oral tradition, <br/>
                            livelihood practices, and <br/>
                            indigenous environmental knowledge.</p>
                        </div>
                        
                    </div>

                    <br/>

                    <div className="last-two">
                        <div className="today">
                            <Link to="/today">The Community Today</Link>
                            <p>Contemporary life, education, cultural <br/>
                            preservation efforts and challenges.</p>
                        </div>

                        <div className="digital">
                            <Link to="/digital">Digital heritageHeritage</Link>
                            <p>Photo gallery,historical timeline, interactive<br/>
                            map, and digital storytelling feature.</p>
                        </div>

                        <div className="creators">
                            <Link to="/creators">Meet the Creators</Link>
                            <p>Meet the team behind this website, their <br/>
                            roles, and their contributions to the project.</p>
                        </div>
                    </div>

                </section>

                <Footer />
            </div>
        </div>
    )
}

export default Home;