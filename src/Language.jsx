import Footer from "./Footer.jsx";
import './Language.css';

function Language() {
    return(
        <div>
            <div className="titleArea">
                <p>Language & Indigenous Knowledge</p>

                <h1>The Eskaya Script and Living Knowledge System</h1>

                <small>The Eskaya possess a remarkable indigenous writing system alongside a rich oral<br/> 
                tradition and body of ecological and technological knowledge accumulated over<br/> 
                generations.</small>

                <hr></hr>
            </div>

            <div className="language">
                <h2>The Eskaya Language</h2>

                <p>
                    The Eskaya speak their own indigenous language, also called<br/> 
                    Eskaya (or Eskayan). It is classified within the Austronesian<br/> 
                    language family, but it has features and vocabulary that<br/> 
                    distinguish it from neighboring Visayan languages such as<br/> 
                    Cebuano. Linguists who have studied the language note its<br/>
                    unique characteristics alongside its broader Austronesian<br/> 
                    affiliations.
                </p>

                <br/>

                <p>
                    The language is closely tied to cultural identity. Community<br/> 
                    members who are fluent in the Eskaya language — and<br/> 
                    particularly those who can use the Eskaya script — are considered<br/> 
                    to have full membership in the cultural community in the<br/> 
                    indigenous sense.
                </p>

                <br/>

                <p>
                    Most Eskaya speakers are also fluent in Cebuano (the regional<br/> 
                    lingua franca of Bohol and much of Central Visayas), Filipino (the<br/> 
                    national language), and varying degrees of English. This<br/> 
                    multilingualism is a product of both historical contact and<br/> 
                    contemporary educational requirements.
                </p>

                <br/>

                <p>
                    Language vitality is a concern shared by many indigenous<br/> 
                    language communities globally. Efforts to document and<br/> 
                    transmit the Eskaya language are documented in academic<br/> 
                    literature and in community-based cultural programs.
                </p>

                <br/>
            </div>

            <div className="writing">

                <h2>The Eskaya Writing System</h2>

                <small>A Distinct Indigenous Script</small>

                {/* naay image ani nga about sa writing system sa eskaya <img  /> */}

                <p>
                    The Eskaya writing system is a syllabary — a script where each character represents a syllable rather than a single consonant or vowel.<br/> 
                    This is consistent with other indigenous Philippine scripts (such as Baybayin), but the Eskaya script is visually and structurally distinct from<br/> 
                    Baybayin and from other known Philippine writing systems.
                </p>

                <br/>

                <p>
                    The Eskaya script is notable enough to have been assigned its own Unicode block: the <strong>Eskaya block (U+11940–U+1195F)</strong>, recognized by<br/> 
                    the Unicode Consortium in Unicode 13.0 (2020). This formal encoding reflects the script's documentation by linguists and its uniqueness<br/> 
                    among world writing systems.
                </p>

                <br/>

                <p>
                    Researchers including Jason William Lobel have published academic work on the Eskaya language and script. The script has<br/> 
                    approximately 71–75 characters documented in academic sources, representing the syllables of the Eskaya language.
                </p>

                <br/>

                <p>
                    The origins of the Eskaya script are discussed in the community's oral tradition and in academic literature. Some research attributes the<br/> 
                    contemporary form of the script to a 20th-century figure in the community, while others note evidence of an older tradition. This remains a<br/> 
                    subject of scholarly discussion.
                </p>

                <div className="first-three-writing">
                    <div className="script">
                        <h6>Script Type</h6>

                        <p>Syllabary (abugida)</p>
                    </div>

                    <div className="unicode">
                        <h6>Unicode Block</h6>

                        <p>U+11940–U+1195F</p>
                    </div>

                    <div className="added">
                        <h6>Added to Unicode</h6>

                        <p>Version 13.0 (2020)</p>
                    </div>
                </div>

                <div className="second-three-writing">
                    <div className="characters">
                        <h6>Approx. Characters</h6>

                        <p>~71–75 documented</p>
                    </div>

                    <div className="direction">
                        <h6>Direction</h6>

                        <p>Left to right</p>
                    </div>

                    <div className="status">
                        <h6>Status</h6>

                        <p>Living / Actively used</p>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Language;