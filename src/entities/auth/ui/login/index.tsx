import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { fetchLogin } from "../../model";
import { useDispatch } from "react-redux";
import { Notification } from "../../../../app/components/Notification";
interface Value {
  email: string | null;
  password: string | null;
}

const validate = (values: Value) => {
  const errors: any = {};

  if (!values.email) {
      errors.email = "Email address required";
      return errors;
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
      return errors;
  }

  if (!values.password) {
    errors.password = "Password is required";
    return errors;
  }
  return errors;
};

export const Login = (props:any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  //const [ntfList, setNtfList] = useState<ntfType[]>([]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(fetchLogin(values));

      //notification msgs
      const ntf = [...props.props.ntfList,
        {
          id: props.props.ntfList.length,
          type: "success",
          title: "Success",
          msg: "Success Login",
        },
        {
          id: props.props.ntfList.length+1,
          type: "warning",
          title: "Warning",
          msg: "Just warning",
        },
        {
          id: props.props.ntfList.length+2,
          type: "danger",
          title: "Danger",
          msg: "Can not connect to server",
        },
      ];

      props.props.showNtf(ntf);
      //alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="sign-in">
      <div className="card-title">
        <div className="card-title-welcome">
          <p>Welcome to Qonys</p>
          <h5>Sign in</h5>
        </div>
        <div className="card-title-question">
          <p>No Account ?</p>
          <button onClick={() => navigate("/register")}>Sign up</button>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Username or email address"
          name="email"
          autoComplete="email"
          autoFocus
          error={!!formik.errors.email}
          helperText={formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          error={!!formik.errors.password}
          helperText={formik.errors.password}
          autoComplete="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <Link
              href="#"
              variant="body2"
              sx={{ color: "#AD3113", textDecoration: "none" }}
            >
              Forgot password
            </Link>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            p: "15px 0",
            backgroundColor: "#0032E4",
            borderRadius: "10px",
            fontFamily: "poppins500",
            fontSize: "16px",
            lineHeight: "24px",
            textTransform: "none",
          }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};
