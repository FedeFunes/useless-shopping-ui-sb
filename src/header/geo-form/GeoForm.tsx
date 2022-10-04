import React, { useCallback, Ref } from "react";
import styled from "styled-components";
import media from "lib/media";

import NumberField from "common/formik/NumberField";
import SubmitButton from "common/formik/SubmitButton";
import Button from "common/input/Button";
import { Formik, Form } from "formik";
import * as yup from "yup";

import useGeoForm from "hooks/useGeoForm";
import type { GeoFormErrorCode } from "hooks/useGeoForm";

import { ShoppingGeoLocation } from "lib/shoppingGeoLocation";
import useTracking from "hooks/useTracking";

const Label = styled.label`
  display: inline-block;
  font-size: 0.875em;
  font-family: "Work Sans", sans-serif;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;

  & > * + * {
    margin-inline-start: 1em;
  }
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-gap: 0.5em;
  margin: 16px 0px 8px;
  list-style: none;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 16px 0;
  ${media.greaterThan("sm")`
    margin: 20px 0;
  `}
`;

const StyledLink = styled.a`
  font-family: Arial;
  font-size: 14px;
  line-height: 1.07;
  color: #006afd;
  text-decoration: none;
  margin: 8px 0px 16px;
`;

const ErrorMessage = styled.p`
  font-family: Arial;
  font-size: 13px;
  color: #b80000;
  font-weight: normal;
  margin: 8px 0px;
`;

interface ErrorLabelProps {
  error: boolean;
  errorCode: GeoFormErrorCode;
}

function ErrorLabel({ error, errorCode }: ErrorLabelProps): JSX.Element {
  if (error && errorCode === "invalidPostalCode")
    return (
      <ErrorMessage>
        No pudimos validar tu ubicación, ingresá otro código postal.
      </ErrorMessage>
    );

  if (error && errorCode === "serverError")
    return (
      <ErrorMessage>
        Hubo en error inesperado. Volvé a ingresar tu código postal.
      </ErrorMessage>
    );
  return null;
}

interface GeoFormProps {
  inputRef: Ref<HTMLInputElement>;
  isGeoLocated: boolean;
  onSubmit: (
    geoLocation: ShoppingGeoLocation,
    bag: { reset: () => unknown },
  ) => unknown;
  context?: string;
}

export default function GeoForm({
  inputRef,
  isGeoLocated,
  onSubmit,
  context,
}: GeoFormProps) {
  const [
    state,
    onPostalNumberSubmit,
    locationOptions,
    onRegionSelected,
    { error, errorCodes },
  ] = useGeoForm({
    onSubmit,
  });

  const [trackEvent] = useTracking();

  const handleSubmit = useCallback(
    ({ postalNumber }, { resetForm }) => {
      onPostalNumberSubmit(postalNumber)
        .then(() => {
          trackEvent("fvg.header.click-save-cp", {
            context,
            cp: postalNumber,
          });
        })
        .catch(() => {
          trackEvent("fvg.header.click-save-unavailable-cp", {
            context,
            cp: postalNumber,
          });
          resetForm();
        });
    },
    [onPostalNumberSubmit, trackEvent],
  );

  const StyledSubmitButton = styled(SubmitButton)`
    font-size: "14px";
    background-color: "#440099";
    border-radius: 3px;
    font-weight: "600";
    padding: 8px 12px;
    letter-spacing: "normal";
    :disabled {
      opacity: 0.9;
    }
  `;

  switch (state) {
    case "options":
      return (
        <Wrapper>
          <div>
            <Label as="p">
              <b>¿En qué provincia estás?</b>
            </Label>
            <Row as="ul">
              {locationOptions.map((locationOption, i) => (
                <li key={locationOption.id}>
                  <Button
                    variant="outlined"
                    autoFocus={i === 0}
                    ref={i === 0 ? inputRef : undefined}
                    onClick={() => onRegionSelected(locationOption)}
                  >
                    {locationOption.location?.name ?? locationOption.region}
                  </Button>
                </li>
              ))}
            </Row>
          </div>
        </Wrapper>
      );
    case "idle":
    default:
      return (
        <Wrapper>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{ postalNumber: "" }}
            validateOnMount
            validationSchema={yup.object({
              postalNumber: yup
                .number()
                .integer()
                .min(1000)
                .max(9999)
                .required(),
            })}
          >
            <Form style={{ marginBottom: "5px" }}>
              <FormWrapper>
                <NumberField
                  id="header-geo-location-form-postal-number"
                  data-test-id="header-geo-location-form-postal-number"
                  name="postalNumber"
                  placeholder="Ej 1414"
                  autoComplete="off"
                  autoFocus={!isGeoLocated}
                  ref={inputRef}
                  maxLength={4}
                  size={10}
                  style={{
                    display: "inline-block",
                    borderColor: error ? "#b80000" : undefined,
                    backgroundColor: "#ffffff",
                    fontSize: "14px",
                    padding: "8px",
                  }}
                />
                <StyledSubmitButton
                  type="submit"
                  data-test-id="button-save-postal-code"
                >
                  Guardar
                </StyledSubmitButton>
              </FormWrapper>
            </Form>
          </Formik>
          <ErrorLabel error={error} errorCode={errorCodes[0]} />
          <StyledLink
            href="https://www6.oca.com.ar/BuscadorCP/"
            target="_blank"
            data-test-id="link-dont-know-postal-code"
          >
            No sé mi código
          </StyledLink>
        </Wrapper>
      );
  }
}
