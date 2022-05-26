import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function QuizEnd() {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
                <Card.Title>Score More</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">With Quiz</Card.Subtitle>
            <Card.Text>
                Congratulations!! for completing the Quiz completely. Your live score is ____.
            </Card.Text>
            <button>Play Again</button>
        </Card.Body>
        </Card>
    </div>
  )
}

export default QuizEnd;