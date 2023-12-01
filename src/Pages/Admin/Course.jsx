import React from "react";

function Course() {
    return ( 
        <div>Course Questions
            <form class="form-inline" action="/action_page.php">
            <div class="form-group">
                <label class="sr-only" >Considering your experience in a relationship, how likely would you be to recommend a friend or a colleague to take this survey to understand the health of their relationship?0 Very Unlikely to 10 Very Likely:</label>
                <input type="text" class="form-control" />
            </div>
            <div class="form-group">
                <label class="sr-only" for="pwd">How satisfied are you with your partner for the following in your relationship?</label>
                <input type="text" class="form-control" />
            </div>
            
            <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>
     );
}

export default Course;