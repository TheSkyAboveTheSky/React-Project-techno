

const ticketDetails = () => {

    return (
        <div id="ticket-details" className="row-section">
            <div className="column-section" id="details">
                <div className="column-section" id="user-data">
                    <div id="user-profile"></div>
                    <p id="user-email">[Emailuser@gmail.com]</p>
                    <div class="buttons row-section">
                        <button>Follow</button>
                        <button>Message</button>
                    </div>
                </div>
                <div className="column-section" id="details-section">
                    <div id="details-title">
                        Ticket Details
                    </div>
                    <div id="description">
                        I am writing this ticket to let you know that your webapp sucks
                    </div>
                </div>
                <div className="column-section" id="tickets-info">
                    <div id="ticket-info-title">
                        Ticket Info
                    </div>
                    <div className="column-section" id="tickets-info-content">
                    <label for="priority">Priority</label>
                    <input id="priority" type="text" value="High" readonly></input>
                    <label for="department">Department</label>
                    <input id="department" type="text" value="pre-sales" readonly></input>
                    <label for="product">Product</label>
                    <input id="product" type="text" value="Test Product" readonly></input>
                    <label for="Date">Date</label>
                    <input id="Date" type="text" value="2000-08-07" readonly></input>
                    </div>
                </div>
            </div>
            <div className="column-section" id="reply">
                <div className="column-section" id="post-reply">
                    <form className="column-section">
                        <textarea></textarea>
                        <button>Post</button>
                    </form>
                </div>
                <div className="column-section" id="replies">
                    <div id="reply">
                        <div className="row-section" id="user-info">
                            <img src="../../assets/user.png" alt="User image" />
                            <div id="reply-user-name">User Name</div>
                            <div id="reply-user-location">San Francisco, USA</div>
                            <div id="reply-user-date">20-April-2019</div>
                        </div>
                        <div className="column-section" id="reply-body">
                            <div id="reply-title">
                                I don't like this shit
                            </div>
                            <div id="reply-details">
                                So am writing this reply cuz i don't like dat shit
                            </div>
                            <div className="row-section" id="reactions">
                                <div className="row-section" id="react">
                                    <div id="react-btn">
                                        
                                    </div>
                                    <div id="react-count">
                                        12
                                    </div>
                                    <div id="react-type">
                                        Love
                                    </div>
                                </div>
                                <div className="row-section" id="react">
                                    <div id="react-btn">

                                    </div>
                                    <div id="react-count">
                                        5
                                    </div>
                                    <div id="react-type">
                                        Comment
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ticketDetails