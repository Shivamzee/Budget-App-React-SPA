import { currencyFormatter } from "../utils";
import Card from "react-bootstrap/Card";
const BudgetCard = ({ name, amount, max }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex">
            {currencyFormatter.format(amount)} / {max}
          </div>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default BudgetCard;
