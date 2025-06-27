
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrasadBooking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/coming-soon");
  }, [navigate]);

  return null;
};

export default PrasadBooking;
