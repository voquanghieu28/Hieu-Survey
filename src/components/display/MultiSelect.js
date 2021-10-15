import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

function MultiSelect(props) {
  return (
    <div>
      <Card
        className="shadow"
        style={{ backgroundColor: "rgba(255,255,255,0.75)" }}
      >
        <CardHeader>
          <h5>
            {props.number}. {props.name}{" "}
          </h5>
        </CardHeader>
        <CardBody>
          <CardText>
            <input type="hidden" name={`questions[${props.name}]`} />

            {props.options.map((value, index) => {
              return (
                <FormGroup check>
                  <Input
                    id="radio1-option1"
                    type="checkbox"
                    value={value}
                    name={`questions[${props.name}]`}
                    style={{ width: "1em", height: "1em" }}
                  />
                  <Label check for="radio1-option1">
                    {" "}
                    {value}
                  </Label>
                </FormGroup>
              );
            })}
          </CardText>
        </CardBody>
      </Card>
      <br></br>
    </div>
  );
}
export default MultiSelect;
