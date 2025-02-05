import { Button } from "react-bootstrap";
import CommonInput from "../common-input";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

function CommonForm({
  formControls = [],
  onHandleSubmit,
  formData,
  setFormData,
  buttonText,
  onClearForm,
}) {
  function renderFormElement(getCurrentElement) {
    let content = null;

    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            required={getCurrentElement.required}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );

        break;

      default:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            type={getCurrentElement.type}
            required={formData[getCurrentElement.required]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return content;
  }

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElementItem, i) => (
            <div key={i}>{renderFormElement(singleFormElementItem)}</div>
          ))
        : null}
      <div style={{ marginTop: "12px" }}>
        <Button variant="success" size="sm" className="mr-2" type="submit">
          {buttonText || "Submit"}
        </Button>
        <Button
          variant="light"
          size="sm"
          className="mr-2"
          onClick={(e) => onClearForm(e)}
        >
          {"Clear"}
        </Button>
      </div>
    </form>
  );
}

export default CommonForm;
