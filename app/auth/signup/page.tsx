import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { SignupForm } from "@/components/forms/signup";
export default function Page({
  searchParams,
}: {
  searchParams: { error: string };
}) {
  const router = useRouter();

  const handleGoogleSignup = async () => {
    await signIn("google-signup", {
      callbackUrl: "/profile",
      redirect: false,
    });
  };

  return (
    <div>
      <div>
        <div className="container-fluid mt-3">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <div className="card p-4">
                <SignupForm error={searchParams.error} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
