import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik } from "formik";
import * as Yup from "yup";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp } from "@/api/auth";
import ErrorMessage from "@/components/ErrorMessage";

interface Values {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  cPassword: string;
}

const SignupSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  last_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be 8 characters")
    .max(16, "Password must be 16 characters max"),
  cPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

function SignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: (_data) => {
      // Invalidate and refetch
      queryClient.setQueryData(["user"], _data);
      navigate("/");
    },
  });

  return (
    <main className="sm:p-0 ">
      <div className="bg-[#fefefe] shadow-md  flex flex-col items-center  max-w-2xl lg:h-[80vh] p-2 md:p-4 lg:mx-auto ">
        <h2 className="text-3xl pt-4 ">Sign up</h2>
        <p className="pt-2">Welcome to EventSnap</p>
        <Formik
          validationSchema={SignupSchema}
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            cPassword: "",
          }}
          onSubmit={(values: Values) => {
            mutation.mutate({ ...values });
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form
              action=""
              className="flex flex-col w-full py-4 gap-2"
              onSubmit={handleSubmit}
            >
              <Label htmlFor="first_name">First name</Label>

              <Input
                placeholder="First name"
                value={values.first_name}
                id="first_name"
                type="text"
                onChange={handleChange}
              />
              {errors.first_name && touched.first_name ? (
                <ErrorMessage msg={errors.first_name} />
              ) : null}

              <Label htmlFor="last_name">Last name</Label>
              <Input
                placeholder="Last name"
                value={values.last_name}
                id="last_name"
                type="text"
                onChange={handleChange}
              />
              {errors.last_name && touched.last_name ? (
                <ErrorMessage msg={errors.last_name} />
              ) : null}
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <ErrorMessage msg={errors.email} />
              ) : null}
              <Label htmlFor="password">Password</Label>
              <Input
                placeholder="Password"
                id="password"
                value={values.password}
                onChange={handleChange}
                type="password"
              />
              {errors.password && touched.password ? (
                <ErrorMessage msg={errors.password} />
              ) : null}

              <Label htmlFor="cPassword">Confirm password</Label>
              <Input
                placeholder="Confirm password"
                id="cPassword"
                value={values.cPassword}
                onChange={handleChange}
                type="password"
              />

              {errors.cPassword && touched.cPassword ? (
                <ErrorMessage msg={errors.cPassword} />
              ) : null}

              <p className="">
                Already have an account? <Link to="/login">Login.</Link>
              </p>

              <button
                disabled={mutation.isPending}
                type="submit"
                className=" bg-red-200 py-2 w-44 self-center rounded-sm disabled:bg-ctaLight"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
}

export default SignUp;
