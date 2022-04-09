import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {

    //check if an oject with the name "campsite" passed in via props can be evaluated as truthy

    renderCampsite(campsite) {
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

    // renderComments(comments) {
    //       if(comments) {
    //           return (
    //              <div className="col-md-5 m-1">
    //                  <h4>Comments</h4>
    //                  <div>{comments.map((comment) => comment.text)}</div>
    //              </div>
    //           );
    //       }
    //       return <div></div>
    // }
    renderComments(comments) {
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

    render() {
        if (this.props.campsite) {
            return <div className="row">
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
            </div>
        }
        return <div />;
    }
};

export default CampsiteInfo;