import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    //check if an oject with the name "campsite" passed in via props can be evaluated as truthy

function RenderCampsite({ campsite }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}


function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1" >
                <h4>Comments</h4>
                {comments.map(comment => {
                    return (<div key={comment.id}>
                        <p>
                            {comment.text}
                            <br />
                            <i>{comment.author}</i> -- {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </div>);
                })
                }
            </div>
        );
    }
    return (<div></div>)
}
//this.props is an argument from the constructor class of the Main component
function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.campsite.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;