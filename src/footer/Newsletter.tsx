import React, { useState, useCallback } from "react";
import styled from "styled-components";

import Button from "common/input/Button";

import media from "lib/media";
import { fontSizeSmall, fontWeightNormal } from "lib/theme";

const Title = styled.p`
  ${fontSizeSmall}
  ${fontWeightNormal}
  line-height: 1;
  letter-spacing: -0.2px;
  color: #4a4a4a;
  margin-bottom: 15px !important;
`;

const EmailInput = styled.input.attrs({
  type: "email",
})`
  border-radius: 3px;
  background-color: #fff;
  display: inline-flex;
  height: 40px;
  border-radius: 2px;
  border: solid 1px #cccccc;
  ${fontSizeSmall}
  color: #4a4a4a;
  width: 80%;
  margin-right: 9px;
  margin-bottom: 13px;
  padding: 0 10px;

  ${media.lessThan("sm")`
    max-width: 180px;
    margin-bottom: 0;
  `}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${media.lessThan("sm")`
    flex-direction: row;
  `}
`;

const SubmitButton = styled(Button).attrs({ type: "submit" })`
  ${media.greaterThan("sm")`
    align-self: start;
  `}
`;

const Newsletter: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [value, setValue] = useState("");

  const send = useCallback(
    (e) => {
      e.preventDefault();
      if (sent) return;
      fetch(
        `https://www.fravega.com/fravega/dataentities/CA/search/?email=${value}&_fields=email,id`,
      )
        .then((r) => r.json())
        .then(() => {
          setSent(true);
        });
    },
    [value],
  );

  const onChange = useCallback((e) => setValue(e.target.value), []);

  return (
    <div data-test-id="footer-newsletter">
      <Title>Recibí ofertas y promociones</Title>
      <Form
        action="https://www.fravega.com/fravega/dataentities/CA/search/"
        method="get"
        onSubmit={send}
      >
        <EmailInput
          value={value}
          onChange={onChange}
          type="email"
          name="email"
          placeholder="Ingresá tu email"
          data-test-id="footer-newsletter-input"
          required
        />
        <SubmitButton
          disabled={sent}
          data-test-id="footer-newsletter-subscribe-button"
        >
          {sent ? "Enviado" : "Suscribirme"}
        </SubmitButton>
      </Form>
    </div>
  );
};

export default Newsletter;
