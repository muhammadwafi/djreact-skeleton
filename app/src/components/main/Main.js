import React from "react";
import { Container, Col, Jumbotron, Button } from "reactstrap";
import Header from "../shared/Header";

const Main = props => {
    return (
        <div className="main">
            <Header />
            <Jumbotron>
                <Container className="text-center">
                    <Col sm={12} md={8} className="mx-auto">
                        <h1 className="display-3">Hello World!</h1>
                        <hr className="my-2" />
                        <p>
                            You are successfully installing
                            <a href="https://www.djangoproject.com/" target="_blank"> Django</a>{" "} 
                            with <a href="https://www.django-rest-framework.org/" target="_blank">DRF</a> {" "}, <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://reactstrap.github.io/" target="_blank">Reactstrap</a>, and <a href="https://webpack.js.org/" target="_blank">Webpack</a>. Give me a star on <a href="https://github.com/muhammadwafi/djreact-skeleton">github</a> if you think this skeleton is useful, or report issues when you have
                            confused with some configuration
                        </p>
                        <p className="lead">
                            <a href="https://github.com/muhammadwafi/djreact-skeleton#readme">
                                <Button color="primary">Learn More</Button>
                            </a>
                        </p>
                    </Col>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Main;
