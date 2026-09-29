import Footer from "./Footer.jsx";
import Writing from "./assets/writing.jpg";
import Tinikling from "./assets/tinikling.jfif";
import './Community.css';

function Community() {
    return (
        <div>
            <div className="header">
                <div className="header-text">
                    <p>The Community</p>
                    <div className="text-with-image">

                        <div className="header-description">
                            <h1>Profile & Identity of the Eskaya</h1>

                            <p>
                                The Eskaya are an indigenous cultural community of southeastern Bohol,
                                recognized by<br />
                                the Philippine government and known for their distinct identity,
                                language, and cultural<br />
                                practices.
                            </p>
                        </div>

                        <div className="image">
                            <img
                            src={Writing}
                            alt="Eskaya writing"
                            className="header-image"
                        />
                        </div>
                    </div>

                    <hr />
                </div>
            </div>



            <div className="eskayaDefinition">
                <h2>Who Are the Eskaya?</h2>

                <p className="firstParagraph">
                    The Eskaya (also spelled Escaya, Iskaya) are an indigenous cultural community<br/>
                    (ICC) in the Philippines. They inhabit the mountainous and upland areas of <br/>
                    southeastern Bohol, primarily in the municipalities of Pilar, Guindulman, Garcia <br/>
                    Hernandez, and Duero. They are classified as one of the indigenous peoples of <br/>
                    the Visayas region.
                </p>

                <br></br>

                <p className="secondParagraph">
                    The Eskaya are officially recognized as an indigenous cultural community by the<br/>
                    National Commission on Indigenous Peoples (NCIP) under the Indigenous <br/>
                    Peoples' Rights Act of 1997 (Republic Act No. 8371). This recognition grants<br/>
                    them rights to their ancestral domain, self-governance, and cultural integrity.
                </p>

                <br></br>

                <p className="thirdParagraph">
                    What distinguishes the Eskaya most notably from neighboring communities is<br/>
                    their possession of an indigenous writing system — a syllabary distinct from the<br/>
                    pre-colonial Baybayin script used elsewhere in the Philippines — as well as a <br/>
                    corpus of oral literature, traditional laws, and cosmological beliefs that have<br/>
                    been documented by researchers from both the Philippines and abroad.
                </p>

                <br></br>

                <p className="fourthParagraph">
                    Scholars have noted that Eskaya identity is closely tied to their language and <br/>
                    script. Community members who can read, write, and speak the Eskaya <br/>
                    language and use the Eskaya script are considered fully Eskaya in the cultural <br/>
                    sense. This linguistic-cultural identity marker sets them apart from their <br/>
                    lowland Visayan neighbors.
                </p>
            </div>


            <div className="geographic">
                <h2>Geographic Location</h2>
                <br/>

                <p>
                    Bohol is an island province in the Central Visayas region (Region VII)<br/>
                    of the Philippines. The Eskaya occupy the southeastern portion of the island,<br/>
                    in upland and interior barangays of several municipalities.
                </p>

                <br/>

                <p>
                    The primary municipalities with documented Eskaya <br/>
                    communities include:
                </p>

                <br/>

                <div className="places">
                    <p>▪ Pilar — A principal center of Eskaya cultural life</p>
                    <p>▪ Guindulman — Home to several Eskaya barangays</p>
                    <p>▪ Garcia Hernandez — Known for upland Eskaya communities</p>
                    <p>▪ Duero — Southeastern coastal and inland areas</p>
                </div>

                <br/>

                <p>
                    The terrain is characterized by rolling hills, tropical forest, and <br/>
                    river valleys. The landscape provides the environmental context <br/>
                    for much of the Eskaya's traditional ecological knowledge and<br/>
                    livelihood practices.
                </p>
            </div>


            <div className="demographic">

                <h2>Demographic Information</h2><br/>

                <div className="note">
                    <p>
                        <strong>Note on Demographic Data:</strong> Precise and current population statistics for the Eskaya are not consistently available in publicly accessible government <br/>
                        databases as of the most recent census reports. Figures cited in various academic sources vary significantly, reflecting different methodologies and<br/>
                        definitions of community membership. This section presents only documented estimates from verifiable sources.
                    </p>
                </div>

                <p>
                    Academic literature on the Eskaya, including research published in linguistic and anthropological journals, indicates that the Eskaya are a<br/>
                    relatively small indigenous community. Some published studies have estimated community size in the hundreds to a few thousand <br/>
                    individuals, depending on whether the count includes those who identify culturally as Eskaya versus fluent language speakers.
                </p>

                <p>
                    The National Commission on Indigenous Peoples (NCIP) maintains records on indigenous communities throughout the Philippines, <br/>
                    including communities in Bohol. Readers seeking current population data are directed to the NCIP's official census records and the <br/>
                    Philippine Statistics Authority (PSA) data for Bohol province.
                </p>

                <p>
                    The community is concentrated in upland barangays. Many Eskaya individuals are bilingual or multilingual, also speaking Cebuano<br/>
                    (Bisaya) as the regional lingua franca and, in some cases, Filipino and English.
                </p>
            </div>

            <Footer />
        </div>
    );
}

export default Community;
