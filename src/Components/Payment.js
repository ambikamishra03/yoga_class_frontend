import { useState } from "react";
import Lottie from "react-lottie";
import { Button, Typography, Alert } from "@mui/material";

import animationData from "../Animation/payment.json";
import PaymentService from "../Services/Pay";

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function Payment({ setPaying, userData }) {
  const submit = (e) => {
    e.preventDefault();
    PaymentService(userData.id).then((data) => {
      if (data.status) setPaying(2);
    });
  };

  return (
    <div className="d-flex h-100">
      <Lottie options={animationOptions} isClickToPauseDisabled={true} />
      <div className="col-6 d-flex h-100 flex-column align-items-center justify-content-center">
        <Typography variant="h5">Name: {userData.name}</Typography>
        <Typography variant="h5">Batch: {userData.batch}</Typography>
        <Typography variant="h5">Amount: Rs. 500/-</Typography>
        <form class="row g-3 needs-validation m-4" novalidate onSubmit={submit}>
          <div class="mb-3">
            <label for="validationCustom01" class="form-label">
              Account Holder's Name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
            />
          </div>
          <div class="mb-3">
            <label for="validationCustom01" class="form-label">
              Account Number
            </label>
            <input
              type="number"
              class="form-control"
              id="validationCustom01"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="validationCustom03" class="form-label">
              Validity
            </label>
            <input
              type="month"
              class="form-control"
              id="validationCustom03"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="validationCustom03" class="form-label">
              CVV
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              required
            />
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
