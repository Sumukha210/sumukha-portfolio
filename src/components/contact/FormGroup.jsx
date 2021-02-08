import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axios from "axios"
import { useForm } from "react-hook-form"
import Alert from "react-bootstrap/Alert"

const FormGroup = () => {
  const { register, handleSubmit, errors, reset } = useForm()
  const [emailRes, setEmailRes] = useState({ success: "", error: "" })
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false)
      }, 5000)
    }
  }, [showAlert])

  const sendEmail = async userData => {
    setBtnDisabled(true)
    try {
      const { data } = await axios.post(
        "https://sumukha-portfolio.herokuapp.com/",
        userData
      )
      setShowAlert(true)
      setEmailRes({ error: "", success: "Message successfully sent" })
      setBtnDisabled(false)
    } catch (error) {
      setShowAlert(true)
      setEmailRes({ error: "Something went wrong!!!", success: "" })
      setBtnDisabled(false)
    }
  }

  const onSubmit = (data, e) => {
    sendEmail(data)
    e.target.reset()
  }

  return (
    <>
      <Form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-md-flex justify-content-center">
          <Form.Group className="mr-2 w-100">
            <Form.Control
              placeholder="name"
              name="name"
              className="w-100"
              ref={register({ required: "this is required" })}
            />

            {errors.name && (
              <Form.Text className="error text-danger font-weight-bold ">
                {errors.name.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="w-100">
            <Form.Control
              name="email"
              ref={register({
                required: "this is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="email"
              className="w-100"
            />
            {errors.email && (
              <Form.Text className="error text-danger font-weight-bold ">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>
        </div>

        <Form.Group>
          <Form.Control
            name="message"
            as="textarea"
            placeholder="message"
            className="w-100 h-100"
            ref={register({ required: "this is required" })}
          />
          {errors.message && (
            <Form.Text className="error text-danger font-weight-bold ">
              {errors.message.message}
            </Form.Text>
          )}
        </Form.Group>

        <div className="btn__container">
          <Button
            className="customBtn  mr-2"
            type="submit"
            disabled={btnDisabled ? true : false}
          >
            Submit
          </Button>
          <Button className="customBtn" onClick={() => reset()}>
            clear
          </Button>
        </div>
      </Form>

      <Alert
        className={`mt-4 alertMsg ${showAlert ? "showAlert" : ""} ${
          emailRes.success ? "green" : emailRes.error ? "red" : ""
        } `}
      >
        {emailRes.success
          ? emailRes.success
          : emailRes.error
          ? emailRes.error
          : ""}
      </Alert>
    </>
  )
}

export default FormGroup
