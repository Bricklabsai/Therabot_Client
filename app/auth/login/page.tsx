import { LoginForm } from "@/components/forms/login";
// import { signIn } from "next-auth/react";

const Login = ({
  searchParams,
}: {
  searchParams: { error: string; callbackUrl: string };
}) => {
  const getLoginSuccessRedirectUrl = () => {
    if (
      searchParams.callbackUrl &&
      typeof searchParams.callbackUrl === "string"
    ) {
      return searchParams.callbackUrl;
    }
    return "/";
  };


  return (
    <div>
      <div>
        <div className="container-fluid mt-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <div className="card p-5">
                <LoginForm
                  error={searchParams.error}
                  callbackUrl={searchParams.callbackUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;