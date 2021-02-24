import react, { Component } from "react";
import classes from "./SignUpForm.module.css";
import Input from "../UI/Input/Input";

class SignUpForm extends Component {
  state = {
    form: {
      name: {
        elementType: "input",
        label: "Name",
        elementConfig: {
          type: "text",
          placeholder: "Enter your name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        label: "Password",
        elementConfig: {
          type: "text",
          placeholder: "Enter a password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        label: "E-Mail",
        elementConfig: {
          type: "text",
          placeholder: "Enter your E-mail address",
        },
        value: "",
        validation: {
          required: false,
        },
        valid: false,
        touched: false,
      },
      phone: {
        elementType: "input",
        label: "Phone",
        elementConfig: {
          type: "text",
          placeholder: "Enter your phone number",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      role: {
        elementType: "select",
        label: "Role",
        elementConfig: {
          options: [
            {
              value: "artist",
              displayValue: "Artist",
            },
            {
              value: "user",
              displayValue: "User",
            },
          ],
        },
        validation: {
          required: false,
        },
        value: "",
        valid: true,
        touched: false,
      },
    },
    formIsValid: false,
    loading: false,
  };

  formChangeHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.form,
    };
    const updatedFormElement = {
      ...updatedForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.touched = true;
    // if (inputIdentifier !== 'select') {
    // 	updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    // }
    updatedForm[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ form: updatedForm, formIsValid: formIsValid });
  };

  roleChangeHandler = (event) => {
    const updatedForm = {
      ...this.state.form,
    };
    updatedForm.role.value = event.target.value;
    this.setState({ form: updatedForm });
  };

  orderHandler = (event) => {
    event.preventDefault();
	console.log("Fuck")
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.form) {
      formData[formElementIdentifier] = this.state.form[
        formElementIdentifier
      ].value;
    }
    const payload = {
      ...formData
    };
    console.log(payload);
  };

  render() {
    const formElementsList = [];
    for (let key in this.state.form) {
      formElementsList.push({ id: key, config: this.state.form[key] });
    }

    return (
      <div>
        <form onSubmit={() => {}} className={classes.FormFields}>
          {formElementsList.map((element) => {
            if (element.id != "role") {
              return (
                <div className={classes.FormField}>
                  <label
                    className={classes.FormField__Label}
                    htmlFor={element.id}
                  >
                    {element.config.label}{" "}
                  </label>
                  <Input
                    type={element.config.elementType}
                    id={element.id}
                    className={classes.FormField__Input}
                    placeholder={element.config.elementConfig.placeholder}
                    name={element.id}
                    onChange={(event) => {
                      this.formChangeHandler(event, element.id);
                    }}
                    value={element.config.value}
                  />
                </div>
              );
            }
          })}

          <div className={classes.FormField__DropDown}>
            <label
              className={classes.FormField__Label__DropDown}
              htmlFor="role"
            >
              Role:{" "}
            </label>

            <select className={classes.FormField__Select} name="role" id="role" onChange={(event) => this.roleChangeHandler(event)}>
              <option
                className={classes.FormField__Select__Input}
                value="artist"
              >
                Artist
              </option>
              <option className={classes.FormField__Select__Input} value="user">
                User
              </option>
            </select>
          </div>

          {/* <div className={classes.FormField}>
					<label className={classes.FormField__CheckboxLabel}>
						<Input
							className={classes.FormField__Checkbox}
							type="checkbox"
							name="hasAgreed"
							value={''}
							onChange={(event) => {
								console.log(event.target.value);
							}}
						/>{' '}
						I agree all statements in{' '}
						<a href="" className={classes.FormField__TermsLink}>
							terms of service
						</a>
					</label>
				</div> */}

          <div className={classes.FormField}>
            <button className={classes.FormField__Button + " mr-20"}  onClick={(event) => this.orderHandler(event)}>
              Sign Up
            </button>{" "}
            <a href="#" className={classes.FormField__Link}>
              I'm already member
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
