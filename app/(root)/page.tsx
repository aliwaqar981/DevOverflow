import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <h1 className="h1-bold font-inter">Tailwind CSS is fun [interfont]</h1>
      <h1 className="h1-bold font-space-grotesk">
        Tailwind CSS is fun [spaceGrotesk]
      </h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </div>
  );
};

export default Home;
