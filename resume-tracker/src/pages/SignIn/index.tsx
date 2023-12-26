import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/api/auth";
import ErrorMessage from "@/components/ErrorMessage";
interface Values {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

function Signin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (_data) => {
      queryClient.setQueryData(["user"], _data);
      navigate("/");
    },
  });

  return (
    <main className="sm:p-0">
      <div className=" bg-[#fefefe] shadow-md full flex flex-col items-center  max-w-2xl lg:h-[80vh] p-2 md:p-4 lg:mx-auto">
        <h2 className="text-3xl pt-4 ">Login</h2>
        <p className="pt-2">Welcome</p>

        <div className="w-full bg-gray-100 p-4 rounded-md">
          <h2 className=" font-bold">Demo account</h2>
          <p>Email: demo@account.com</p>
          <p>Password: Demo1234</p>
        </div>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values: Values) => {
            mutation.mutate({ email: values.email, password: values.password });
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form
              action=""
              className="flex flex-col w-full py-4 gap-2"
              onSubmit={handleSubmit}
            >
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

              {mutation.isError && (
                <ErrorMessage msg="Email or password is incorrect" />
              )}

              <p className="mt-2">
                Don't have an account? <Link to="/signup">Signup.</Link>
              </p>

              <button
                disabled={mutation.isPending}
                type="submit"
                className="bg-cta bg-red-200 py-2 w-44 self-center mt-4 rounded-sm disabled:bg-ctaLight"
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

export default Signin;
