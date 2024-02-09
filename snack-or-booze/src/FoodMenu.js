import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import "./AddFood";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import AddFood from "./AddFood";

function FoodMenu({ food, type }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {type === 'drinks' ? 'Drink' : 'Snack'} Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Row>
            <Col>
            <ListGroup>
              {food.map(food => (
              <Link to={`/${type}/${food.id}`} key={food.id}>
                <ListGroupItem>{food.name}</ListGroupItem>
              </Link>
              ))}
              </ListGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <AddFood type={type}/>
    </section>
  );
}

export default FoodMenu;
